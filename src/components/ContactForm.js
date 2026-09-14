"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

const machineOptions = [
  "ABI Sheet Pile Machine",
  "Rotary Drilling Rig / SANY",
  "Bauer Foundation Equipment",
  "Liebherr Drilling Rig",
  "Vibro Hammer / Antares",
  "Casagrande / Foundation Plant",
  "Hydraulic / Control System",
  "Other",
];

const serviceOptions = [
  { value: "plc", label: "PLC Programming" },
  { value: "hmi", label: "HMI Development" },
  { value: "canbus", label: "CANbus Troubleshooting" },
  { value: "sensors", label: "Sensor Calibration" },
  { value: "electrical", label: "Electrical Fault Finding" },
  { value: "lmi", label: "LMI Calibration" },
  { value: "joystick", label: "Joystick CANbus Integration" },
  { value: "panels", label: "Control Panels & Harnesses" },
  { value: "other", label: "Other / Not sure" },
];

function serviceLabel(value) {
  return serviceOptions.find((s) => s.value === value)?.label || value || "N/A";
}

export default function ContactForm({ showService = false }) {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    machine: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const service = searchParams.get("service") || "";
    const machine = searchParams.get("machine") || "";
    setForm((prev) => {
      const next = { ...prev };
      if (service) next.service = service;
      if (machine) {
        const match = machineOptions.find(
          (opt) =>
            opt.toLowerCase().includes(machine.toLowerCase()) ||
            machine.toLowerCase().includes(opt.toLowerCase().split(" ")[0])
        );
        next.machine = match || machine;
      }
      return next;
    });
  }, [searchParams]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Service request${form.machine ? ` — ${form.machine}` : ""} | ZA Automation`
    );

    const body = encodeURIComponent(
      `Hello ZA Automation,\n\n` +
        `Name: ${form.name}\n` +
        `Company: ${form.company || "N/A"}\n` +
        `Email: ${form.email}\n` +
        `Phone / WhatsApp: ${form.phone || "N/A"}\n` +
        `Machine: ${form.machine || "N/A"}\n` +
        `Service: ${serviceLabel(form.service)}\n\n` +
        `Message:\n${form.message}\n`
    );

    // Open default email client to company inbox
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact__form reveal reveal-d2" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          <span>Full name</span>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={onChange}
          />
        </label>
        <label>
          <span>Company</span>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            value={form.company}
            onChange={onChange}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            value={form.email}
            onChange={onChange}
          />
        </label>
        <label>
          <span>WhatsApp / Phone</span>
          <input
            type="tel"
            name="phone"
            placeholder="+971 ..."
            value={form.phone}
            onChange={onChange}
          />
        </label>
      </div>

      <label>
        <span>Machine type</span>
        <select name="machine" value={form.machine} onChange={onChange}>
          <option value="">Select machinery</option>
          {machineOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      {showService && (
        <label>
          <span>Service needed</span>
          <select name="service" value={form.service} onChange={onChange}>
            <option value="">Select service</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      )}

      <label>
        <span>How can we help?</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Describe the fault, codes or service needed..."
          required
          value={form.message}
          onChange={onChange}
        />
      </label>

      <button className="btn btn--accent btn--block" type="submit">
        Send via Email
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
      <p className="form-note">
        Opens your email app to <a href={`mailto:${site.email}`}>{site.email}</a> with your details.
        For urgent support use WhatsApp {site.phoneDisplay}.
      </p>
    </form>
  );
}
