import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFICATION_EMAIL =
  process.env.LEAD_NOTIFICATION_EMAIL || "zaki@zaautomation.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "ZA Automation <noreply@zaautomation.com>";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const company = String(body.company || "").trim();
    const phone = String(body.phone || "").trim();
    const whatsapp = String(body.whatsapp || "").trim();
    const machine = String(body.machine || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!SUPABASE_URL || !SUPABASE_KEY) {
      console.error("Supabase lead service is not configured.");
      return NextResponse.json(
        { error: "Lead service is not configured yet." },
        { status: 500 }
      );
    }

    const db = await fetch(SUPABASE_URL + "/rest/v1/leads", {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: "Bearer " + SUPABASE_KEY,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        company: company || null,
        email,
        phone: phone || null,
        whatsapp: whatsapp || null,
        machine: machine || null,
        service: service || null,
        message,
        source: "website",
      }),
      cache: "no-store",
    });

    if (!db.ok) {
      const details = await db.text();
      console.error("Supabase lead insert failed:", details);
      return NextResponse.json(
        { error: "We could not save your request. Please try again." },
        { status: 502 }
      );
    }

    if (RESEND_API_KEY) {
      try {
        const mail = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + RESEND_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [NOTIFICATION_EMAIL],
            reply_to: email,
            subject: "New website lead" + (machine ? " — " + machine : ""),
            text: [
              "Name: " + name,
              "Company: " + (company || "N/A"),
              "Email: " + email,
              "Phone / WhatsApp: " + (phone || whatsapp || "N/A"),
              "Machine: " + (machine || "N/A"),
              "Service: " + (service || "N/A"),
              "",
              "Message:",
              message,
            ].join("\n"),
          }),
        });

        if (!mail.ok) {
          console.error("Resend notification failed:", await mail.text());
        }
      } catch (mailError) {
        console.error("Resend request failed:", mailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
