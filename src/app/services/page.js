import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { services, site, waLink } from "@/lib/site";

export const metadata = {
  title: { absolute: "Automation Services Dubai | PLC, HMI, CANbus, LMI & Electrical | Zaki Abbas" },
  description:
    "Zaki Abbas services in Dubai: PLC programming, HMI development, CANbus troubleshooting, sensor calibration, electrical fault finding, LMI calibration and control panel support for foundation machinery UAE.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Automation Services Dubai | Zaki Abbas",
    description:
      "PLC, HMI, CANbus, LMI and electrical automation services for piling and foundation machinery across the UAE.",
    url: `${site.url}/services`,
  },
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Automation Services | Zaki Abbas Dubai",
    url: `${site.url}/services`,
    about: {
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          provider: {
            "@type": "LocalBusiness",
            name: site.name,
          },
        },
      })),
    },
  };

  return (
    <SiteChrome solid>
      <JsonLd data={schema} />
      <PageHero
        image="/assets/images/abi-tm20.jpg"
        alt="Heavy foundation equipment controls and hydraulics"
        eyebrow="Our services"
        title="Automation services that protect foundation uptime"
        lead="From PLC logic to CANbus recovery — specialist support for piling, drilling and foundation fleets across the UAE."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Services" },
        ]}
        actions={
          <>
            <Link className="btn btn--accent" href="/contact">
              Request support
            </Link>
            <a className="btn btn--ghost" href={waLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp {site.phoneDisplay}
            </a>
          </>
        }
      />

      <section className="section section--sand">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">Full capability list</div>
              <h2 className="reveal reveal-d1">Eight core services for foundation plant</h2>
              <p className="reveal reveal-d2">
                Each service is delivered with structured diagnostics, clear communication and verified
                handback.
              </p>
            </div>
          </div>
          <div className="detail-grid">
            {services.map((s) => (
              <article className="detail-card reveal" id={s.id} key={s.id}>
                <div className="detail-card__top">
                  <span className="detail-card__num">{s.num}</span>
                  <h2>{s.title}</h2>
                </div>
                <p>{s.description}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="btn btn--accent" href={`/contact?service=${s.id}`}>
                  Request this service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">Engagement</div>
              <h2 className="reveal reveal-d1">How a typical service call runs</h2>
            </div>
          </div>
          <div className="process-grid" style={{ color: "inherit" }}>
            {[
              ["01", "Briefing", "Machine model, codes and site constraints captured before arrival."],
              ["02", "Diagnosis", "Power, PLC, CANbus, sensors and safety circuits scanned systematically."],
              ["03", "Intervention", "Repair, reprogram, calibrate or replace with root cause fixed."],
              ["04", "Verification", "Functional proving and notes for your maintenance record."],
            ].map(([n, t, p], i) => (
              <article
                className={`process-card process-card--light reveal${i ? ` reveal-d${i + 1}` : ""}`}
                key={n}
              >
                <div className="process-card__n">{n}</div>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <CtaBand
            title="Tell us the machine and the symptom"
            text="We’ll recommend the fastest service path — PLC, CANbus, electrical or safety systems."
            primary={{ href: "/contact", label: "Get a quote" }}
            secondary={{ href: "/machinery", label: "Machinery we support" }}
          />
        </div>
      </section>
    </SiteChrome>
  );
}
