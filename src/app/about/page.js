import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { assetPath, site, waLink } from "@/lib/site";

export const metadata = {
  title: {
    absolute:
      "About ZA Automation Dubai | Foundation Machinery Automation Specialists",
  },
  description:
    "Learn about ZA Automation Technical Services LLC in Al Barah, Dubai — specialists in PLC, HMI, CANbus and electrical automation for piling and foundation machinery across the UAE.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ZA Automation Dubai",
    description:
      "Dubai-based specialists keeping foundation fleets online with PLC, HMI, CANbus and electrical diagnostics.",
    url: `${site.url}/about`,
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About ZA Automation Technical Services LLC",
    url: `${site.url}/about`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneE164,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressCountry: site.address.countryCode,
      },
      areaServed: "AE",
    },
  };

  return (
    <SiteChrome solid>
      <JsonLd data={schema} />
      <PageHero
        image={assetPath("/assets/images/abi-mobilram.jpg")}
        alt="ZA Automation field work on rotary drilling equipment"
        eyebrow="About the company"
        title="Dubai specialists keeping foundation fleets online"
        lead="ZA Automation Technical Services LLC delivers disciplined automation, diagnostics and control solutions for piling and foundation machinery across the UAE."
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
      />

      <section className="section section--sand">
        <div className="container about">
          <div className="about__visual reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/assets/images/abi-tm22-site.jpg")}
              alt="ABI piling machine supported by ZA Automation in Dubai"
            />
            <div className="about__float">
              <article>
                <strong>{site.stats.projects}</strong>
                <span>Projects completed</span>
              </article>
              <article>
                <strong>{site.stats.installs}</strong>
                <span>Major installations</span>
              </article>
            </div>
          </div>
          <div className="about__copy">
            <div className="eyebrow reveal">Who we are</div>
            <h2 className="reveal reveal-d1">
              Engineering partners for contractors who cannot afford downtime
            </h2>
            <p className="reveal reveal-d2">
              Based in Al Barah, Dubai, ZA Automation supports foundation
              contractors with PLC programming, HMI development, CANbus
              troubleshooting, sensor calibration, LMI work and electrical fault
              finding.
            </p>
            <p className="reveal reveal-d3">
              We work as an extension of your maintenance team — from the first
              fault code to verified handback — so critical plant returns to
              production with root cause addressed.
            </p>
            <ul className="about__points">
              <li className="reveal reveal-d2">
                <i>✓</i> On-site engineers across the UAE
              </li>
              <li className="reveal reveal-d3">
                <i>✓</i> ABI, Bauer, Liebherr, SANY experience
              </li>
              <li className="reveal reveal-d4">
                <i>✓</i> Controls, diagnostics &amp; safety systems
              </li>
              <li className="reveal reveal-d5">
                <i>✓</i> Clear reporting for maintenance files
              </li>
            </ul>
            <Link className="btn btn--accent reveal reveal-d5" href="/contact">
              Talk to an engineer
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">What drives us</div>
              <h2 className="reveal reveal-d1">
                Mission, method and field standards
              </h2>
            </div>
          </div>
          <div className="info-grid">
            <article className="info-card reveal">
              <div className="info-card__num">01</div>
              <h3>Mission</h3>
              <p>
                Protect foundation project schedules by restoring machine
                control systems quickly, accurately and with documented
                handback.
              </p>
            </article>
            <article className="info-card reveal reveal-d2">
              <div className="info-card__num">02</div>
              <h3>Method</h3>
              <p>
                Structured diagnostics across power, PLC, CANbus, sensors and
                safety circuits — so faults are fixed at the root, not masked.
              </p>
            </article>
            <article className="info-card reveal reveal-d3">
              <div className="info-card__num">03</div>
              <h3>Standards</h3>
              <p>
                Clear communication with site teams, OEM-aware practices, and
                service notes your maintenance managers can file with
                confidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">Why ZA</div>
              <h2 className="reveal reveal-d1">
                Built for foundation site reality
              </h2>
            </div>
          </div>
          <div className="proof">
            <article className="proof__main reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/assets/images/abi-tm20.jpg")}
                alt="Foundation machinery on UAE project site"
              />
              <div className="proof__main-content">
                <h3>From Al Barah, Dubai to sites nationwide</h3>
                <p>
                  {site.address.line1}, {site.address.city} — with field support
                  for piling, drilling and foundation fleets across the
                  Emirates.
                </p>
                <Link className="btn btn--accent" href="/contact">
                  Visit / contact details
                </Link>
              </div>
            </article>
            <div className="proof__side">
              <article className="proof-card reveal reveal-d2">
                <strong>PLC</strong>
                <h4>Control systems</h4>
                <p>
                  Programming, retrofit and commissioning for industrial
                  controllers on foundation plant.
                </p>
              </article>
              <article className="proof-card reveal reveal-d3">
                <strong>CAN</strong>
                <h4>Network diagnostics</h4>
                <p>
                  Bus health, node isolation, joystick integration and
                  communication recovery.
                </p>
              </article>
              <article className="proof-card reveal reveal-d4">
                <strong>LMI</strong>
                <h4>Safety systems</h4>
                <p>
                  Load moment indicators, angle sensors and safe-load
                  calibration on site.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <CtaBand
            title="Need a partner who understands foundation plant?"
            text={`Call or WhatsApp ${site.phoneDisplay} · Email ${site.email}`}
            primary={{ href: "/contact", label: "Request support" }}
            secondary={{ href: "/services", label: "View services" }}
          />
        </div>
      </section>
    </SiteChrome>
  );
}
