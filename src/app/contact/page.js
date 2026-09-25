import { Suspense } from "react";
import SiteChrome from "@/components/SiteChrome";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { site, waLink } from "@/lib/site";

export const metadata = {
  title: { absolute: "Contact ZA Automation Dubai | WhatsApp +971 55 962 6398 | Al Barah" },
  description:
    "Contact Zaki Abbas Technical Services LLC in Dubai: WhatsApp +971 55 962 6398, email zaki@zaautomation.com, Office F-201 Building 137 Al Barah. Request PLC, HMI, CANbus or electrical support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact ZA Automation Dubai",
    description:
      "WhatsApp +971 55 962 6398 · zaki@zaautomation.com · Office F-201, Building No. 137, Al Barah, Dubai.",
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ZA Automation",
    url: `${site.url}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneE164,
      email: site.email,
      url: site.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressCountry: site.address.countryCode,
      },
    },
  };

  return (
    <SiteChrome solid>
      <JsonLd data={schema} />
      <PageHero
        short
        image="/assets/images/abi-tm22-site.jpg"
        alt="Contact ZA Automation for foundation machinery support in Dubai"
        eyebrow="Contact"
        title="Request automation support"
        lead={`WhatsApp ${site.phoneDisplay} · ${site.email} · Al Barah, Dubai`}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Contact" },
        ]}
      />

      <section className="section section--sand">
        <div className="container contact">
          <aside className="contact__info reveal">
            <div className="eyebrow" style={{ color: "#f0b089" }}>
              Field desk · Dubai
            </div>
            <h2>Let’s restore uptime</h2>
            <p>
              Zaki Abbas Technical Services LLC — specialist PLC, HMI, CANbus and electrical support
              for piling and foundation machinery.
            </p>
            <div className="contact__rows">
              <div className="contact__row">
                <div className="contact__ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m22 7-8.99 5.73a2 2 0 0 1-2.02 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong>Office</strong>
                  <span>
                    {site.address.line1}, {site.address.city}
                  </span>
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
                  </svg>
                </div>
                <div>
                  <strong>Coverage</strong>
                  <span>{site.address.country}</span>
                </div>
              </div>
            </div>
            <a
              className="btn btn--accent"
              style={{ marginTop: 22 }}
              href={site.address.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </aside>

          <Suspense fallback={<div className="contact__form">Loading form…</div>}>
            <ContactForm showService />
          </Suspense>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="info-grid">
            <article className="info-card reveal">
              <div className="info-card__num">WA</div>
              <h3>Fastest response</h3>
              <p>
                WhatsApp {site.phoneDisplay} for machine-down calls and quick technical triage.
              </p>
            </article>
            <article className="info-card reveal reveal-d2">
              <div className="info-card__num">HQ</div>
              <h3>Dubai office</h3>
              <p>
                {site.address.line1}, {site.address.city} — supporting projects UAE-wide.
              </p>
            </article>
            <article className="info-card reveal reveal-d3">
              <div className="info-card__num">EM</div>
              <h3>Email</h3>
              <p>
                Send machine details and photos to {site.email} for planned work and quotations.
              </p>
            </article>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
