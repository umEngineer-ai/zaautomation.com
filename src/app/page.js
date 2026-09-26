import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import CtaBand from "@/components/CtaBand";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";
import { machines, services, site, testimonials, waLink } from "@/lib/site";

export const metadata = {
  title: {
    absolute:
      "Zaki Abbas Dubai | PLC, HMI & CANbus for Piling & Foundation Machinery",
  },
  description:
    "Zaki Abbas Technical Services LLC in Dubai — PLC programming, HMI development, CANbus diagnostics, sensor calibration and electrical fault finding for ABI, Bauer, Liebherr and foundation fleets across the UAE.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zaki Abbas Dubai | Foundation Machinery Automation",
    description:
      "Specialist PLC, HMI, CANbus and electrical automation for piling and foundation machinery. On-site support across the UAE.",
    url: site.url,
  },
};

const homeServices = [
  services.find((s) => s.id === "plc"),
  services.find((s) => s.id === "canbus"),
  services.find((s) => s.id === "lmi"),
  services.find((s) => s.id === "electrical"),
  services.find((s) => s.id === "sensors"),
  services.find((s) => s.id === "panels"),
].filter(Boolean);

export default function HomePage() {
  const marquee = [...site.brands, ...site.brands];

  return (
    <SiteChrome>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero__media">
          <Image
            src="/assets/images/abi-tm20.jpg"
            alt="ABI Mobilram TM20 foundation piling machine"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="hero__shade" />
        <div className="hero__noise" aria-hidden="true" />

        <div className="hero__content">
          <div>
            <div className="hero__eyebrow">
              <i /> Dubai · UAE Foundation Machinery Automation
            </div>
            <h1>
              Precision control for machines that <em>build the ground</em>
            </h1>
            <p className="hero__lead">
              Zaki Abbas Technical Services LLC keeps ABI, Bauer, Liebherr
              and rotary fleets productive with specialist PLC, HMI, CANbus and
              electrical diagnostics — delivered on site from Dubai across the
              UAE.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--accent" href="/contact">
                Book a field visit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                className="btn btn--ghost"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp now
              </a>
            </div>
            <div className="hero__chips">
              <span>PLC &amp; HMI</span>
              <span>CANbus Diagnostics</span>
              <span>LMI &amp; Sensors</span>
              <span>On-site UAE</span>
            </div>
          </div>

          <aside className="hero__panel" aria-label="Quick capabilities">
            <div className="hero__panel-top">
              <strong>Operations snapshot</strong>
              <span>● Field ready</span>
            </div>
            <div className="hero__panel-stats">
              <article>
                <strong>{site.stats.projects}</strong>
                <span>Projects</span>
              </article>
              <article>
                <strong>{site.stats.installs}</strong>
                <span>Installs</span>
              </article>
              <article>
                <strong>{site.stats.coverage}</strong>
                <span>Coverage</span>
              </article>
            </div>
            <div className="hero__panel-list">
              <Link href="/services">
                <div>
                  <b>Control systems</b>
                  <small>PLC programming &amp; HMI builds</small>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/services#canbus">
                <div>
                  <b>Diagnostics</b>
                  <small>CANbus, electrical &amp; sensors</small>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/machinery">
                <div>
                  <b>Platforms</b>
                  <small>ABI · Bauer · Liebherr · SANY</small>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </aside>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee" aria-label="Supported machinery brands">
        <div className="marquee__label">
          Trusted across major foundation platforms
        </div>
        <div className="marquee__track-wrap">
          <div className="marquee__track">
            {marquee.map((b, i) => (
              <Link
                className="marquee__item"
                href={`/machinery`}
                key={`${b}-${i}`}
                aria-label={`View ${b} machinery support`}
              >
                {b}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section--sand" id="about">
        <div className="container about">
          <div className="about__visual reveal">
            <Image
              src="/assets/images/abi-tm22-site.jpg"
              alt="SANY rotary drilling rig on foundation project"
              fill
              sizes="(max-width: 1200px) 100vw, 560px"
              style={{ objectFit: "cover" }}
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
            <div className="eyebrow reveal">About Zaki Abbas</div>
            <h2 className="reveal reveal-d1">
              Dubai-based specialists for foundation fleets that cannot stop
            </h2>
            <p className="reveal reveal-d2">
              Zaki Abbas Technical Services LLC delivers automation,
              troubleshooting and control solutions for piling and foundation
              machinery. From our Dubai office in Al Barah, we support
              contractors across the UAE with disciplined field diagnostics.
            </p>
            <p className="reveal reveal-d3">
              From the first fault code to verified handback, our engineers work
              as an extension of your maintenance team — protecting schedules
              when downtime is not an option.
            </p>
            <ul className="about__points">
              <li className="reveal reveal-d2">
                <i>✓</i> Experienced on-site engineers
              </li>
              <li className="reveal reveal-d3">
                <i>✓</i> Advanced CANbus &amp; PLC diagnostics
              </li>
              <li className="reveal reveal-d4">
                <i>✓</i> Safety systems &amp; LMI calibration
              </li>
              <li className="reveal reveal-d5">
                <i>✓</i> UAE-wide field coverage
              </li>
            </ul>
            <Link className="btn btn--accent reveal reveal-d5" href="/contact">
              Talk to an engineer
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--white" id="services">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">Services</div>
              <h2 className="reveal reveal-d1">
                PLC, HMI, CANbus &amp; electrical support that protects uptime
              </h2>
              <p className="reveal reveal-d2">
                Core services for foundation contractors — controls,
                diagnostics, sensor calibration, electrical fault finding and
                on-site recovery.
              </p>
            </div>
            <Link className="btn btn--outline reveal" href="/services">
              View all services
            </Link>
          </div>

          <div className="bento">
            <article className="service-card service-card--lg reveal">
              <div className="service-card__num">01 / CONTROLS</div>
              <div className="service-card__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3>PLC Programming &amp; HMI Development</h3>
              <p>
                Logic development, retrofit and commissioning for industrial
                controllers — plus operator interfaces that make alarms,
                parameters and machine status clear under real site conditions.
              </p>
              <Link className="service-card__link" href="/services#plc">
                Discuss a controls project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            <div className="service-card service-card--md">
              <article className="service-card service-card--nested reveal reveal-d2">
                <div className="service-card__num">02</div>
                <div className="service-card__icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                  </svg>
                </div>
                <h3>CANbus Diagnostics</h3>
                <p>
                  Bus analysis, node isolation, joystick integration and
                  communication recovery.
                </p>
                <Link className="service-card__link" href="/services#canbus">
                  Get support
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
              <article className="service-card service-card--nested reveal reveal-d3">
                <div className="service-card__num">03</div>
                <div className="service-card__icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>LMI &amp; Safety Systems</h3>
                <p>
                  Load moment indicators, boom angle sensors and safe-load
                  calibration.
                </p>
                <Link className="service-card__link" href="/services#lmi">
                  Get support
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            </div>

            {homeServices.slice(3).map((svc, idx) => (
              <article
                className={`service-card service-card--sm reveal reveal-d${idx + 2}`}
                key={svc.id}
              >
                <div className="service-card__num">0{idx + 4}</div>
                <div className="service-card__icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.short}</p>
                <Link
                  className="service-card__link"
                  href={`/services#${svc.id}`}
                >
                  Get support
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINERY */}
      <section className="section section--sand" id="machinery">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">Machinery we support</div>
              <h2 className="reveal reveal-d1">
                Built around the platforms that drive foundation work
              </h2>
              <p className="reveal reveal-d2">
                Deep hands-on experience with the heavy plant behind piling,
                drilling and diaphragm-wall projects.
              </p>
            </div>
          </div>

          <div className="machine-grid">
            {machines.map((m, i) => (
              <Link
                className={`machine-card reveal${i ? ` reveal-d${Math.min(i + 1, 4)}` : ""}`}
                href={`/contact?machine=${encodeURIComponent(m.brand.split(" ")[0])}`}
                key={m.id}
              >
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="400px"
                  style={{ objectFit: "cover" }}
                />
                <div className="machine-card__shade" />
                <div className="machine-card__body">
                  <span className="machine-card__tag">{m.tag}</span>
                  <h3>
                    {m.title
                      .replace(" Sheet Pile Machines", " Machines")
                      .replace(" Drilling Equipment", " Rigs")
                      .replace(" & Systems", "")}
                  </h3>
                  <p>{m.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--ink" id="process">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">How we work</div>
              <h2 className="reveal reveal-d1">
                A clear path from fault call to handback
              </h2>
              <p className="reveal reveal-d2">
                Predictable engagement for maintenance managers and project
                directors who need machines back online.
              </p>
            </div>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Briefing",
                "Machine model, codes, history and site constraints captured before mobilization.",
              ],
              [
                "02",
                "Diagnosis",
                "Structured scan of power, PLC, CANbus, sensors and safety circuits on site.",
              ],
              [
                "03",
                "Intervention",
                "Repair, reprogram, calibrate or replace — with root cause addressed, not masked.",
              ],
              [
                "04",
                "Verification",
                "Functional proving and a clear service record for your maintenance file.",
              ],
            ].map(([n, t, p], i) => (
              <article
                className={`process-card reveal${i ? ` reveal-d${i + 1}` : ""}`}
                key={n}
              >
                <div className="process-card__n">{n}</div>
                <h3>{t}</h3>
                <p>{p}</p>
                <div className="process-card__bar">
                  <span />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section section--white" id="proof">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">Why contractors choose ZA</div>
              <h2 className="reveal reveal-d1">
                Uptime is the only metric that matters on site
              </h2>
            </div>
          </div>
          <div className="proof">
            <article className="proof__main reveal">
              <Image
                src="/assets/images/abi-mobilram.jpg"
                alt="Foundation machinery working on site"
                fill
                sizes="700px"
                style={{ objectFit: "cover" }}
              />
              <div className="proof__main-content">
                <h3>Field-proven diagnostics for high-stakes plant</h3>
                <p>
                  When a rig stops, every hour counts. We isolate control-system
                  faults with OEM-grade discipline so your fleet returns to
                  production with confidence.
                </p>
                <Link className="btn btn--accent" href="/contact">
                  Schedule support
                </Link>
              </div>
            </article>
            <div className="proof__side">
              <article className="proof-card reveal reveal-d2">
                <strong>{site.stats.projects}</strong>
                <h4>Projects delivered</h4>
                <p>
                  From rapid fault calls to planned automation upgrades across
                  foundation fleets.
                </p>
              </article>
              <article className="proof-card reveal reveal-d3">
                <strong>{site.stats.installs}</strong>
                <h4>Major installations</h4>
                <p>
                  Commissioning, integration and calibration work on critical
                  site equipment.
                </p>
              </article>
              <article className="proof-card reveal reveal-d4">
                <strong>{site.stats.coverage}</strong>
                <h4>Nationwide coverage</h4>
                <p>
                  On-site engineers ready to support piling and drilling
                  operations across the Emirates.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--sand" id="stories">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">Client voices</div>
              <h2 className="reveal reveal-d1">
                Trusted by teams who run foundation plant
              </h2>
            </div>
          </div>
          <div className="quotes">
            {testimonials.map((t, i) => (
              <article
                className={`quote-card reveal${i ? ` reveal-d${i + 1}` : ""}`}
                key={t.name}
              >
                <div className="quote-card__stars">★★★★★</div>
                <q>{t.quote}</q>
                <div className="quote-card__user">
                  <div className="quote-card__avatar">{t.initial}</div>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--white">
        <div className="container">
          <CtaBand
            title="Machine down? Get a specialist on the line."
            text="Share your platform and symptoms — we’ll recommend the fastest diagnostic path across the UAE."
            primary={{ href: "/contact", label: "Request support" }}
            secondary={{
              href: waLink(
                "Hello Zaki Abbas, I need urgent automation support.",
              ),
              label: "WhatsApp engineer",
              external: true,
            }}
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section--sand" id="contact">
        <div className="container">
          <div className="section__head">
            <div className="section__head-copy">
              <div className="eyebrow reveal">Contact</div>
              <h2 className="reveal reveal-d1">
                Request automation support in Dubai &amp; across the UAE
              </h2>
              <p className="reveal reveal-d2">
                Tell us the machine and the fault. Reach us on WhatsApp{" "}
                {site.phoneDisplay} or email {site.email}.
              </p>
            </div>
          </div>

          <div className="contact">
            <aside className="contact__info reveal">
              <div className="eyebrow" style={{ color: "#f0b089" }}>
                Field desk · Dubai
              </div>
              <h2>Let’s restore uptime</h2>
              <p>
                Zaki Abbas Technical Services LLC — specialist PLC, HMI,
                CANbus and electrical support for piling and foundation
                machinery.
              </p>
              <div className="contact__rows">
                <div className="contact__row">
                  <div className="contact__ico">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
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
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Phone / WhatsApp</strong>
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="contact__row">
                  <div className="contact__ico">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <strong>Office</strong>
                    <a
                      href={site.address.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.address.line1}, {site.address.city}
                    </a>
                  </div>
                </div>
                <div className="contact__row">
                  <div className="contact__ico">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
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
            </aside>

            <Suspense
              fallback={<div className="contact__form">Loading form…</div>}
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
