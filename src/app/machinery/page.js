import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { assetPath, machines, site } from "@/lib/site";

export const metadata = {
  title: {
    absolute:
      "Machinery We Support | ABI, Bauer, Liebherr, SANY | Zaki Abbas Dubai",
  },
  description:
    "Zaki Abbas supports ABI sheet pile machines, rotary drilling rigs, Bauer systems, Liebherr equipment, vibro hammers and foundation plant with PLC, HMI, CANbus and electrical automation across the UAE.",
  alternates: { canonical: "/machinery" },
  openGraph: {
    title: "Machinery We Support | Zaki Abbas Dubai",
    description:
      "Foundation and piling machinery platforms supported by Zaki Abbas in Dubai and across the UAE.",
    url: `${site.url}/machinery`,
  },
};

export default function MachineryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Machinery We Support | Zaki Abbas",
    url: `${site.url}/machinery`,
    description:
      "Foundation and piling machinery platforms supported by Zaki Abbas in Dubai and across the UAE.",
  };

  return (
    <SiteChrome solid>
      <JsonLd data={schema} />
      <PageHero
        image={assetPath("/assets/images/abi-mobilram.jpg")}
        alt="Bauer foundation machinery supported by Zaki Abbas"
        eyebrow="Platforms"
        title="Machinery we support across UAE foundation sites"
        lead="Hands-on automation experience with the heavy plant behind piling, drilling and foundation works."
        crumbs={[{ href: "/", label: "Home" }, { label: "Machinery" }]}
      />

      <section className="section section--sand">
        <div className="container">
          <div className="brand-pills reveal">
            {site.brands.map((b) => {
              const match = machines.find(
                (m) =>
                  m.brand.toLowerCase().includes(b.toLowerCase()) ||
                  m.title.toLowerCase().includes(b.toLowerCase()),
              );
              const href = match
                ? `#${match.id}`
                : `/contact?machine=${encodeURIComponent(b)}`;
              return (
                <Link key={b} href={href} className="brand-pill">
                  {b}
                </Link>
              );
            })}
          </div>
          <div className="mach-detail-list">
            {machines.map((m, index) => (
              <article
                id={m.id}
                className={`mach-detail reveal${index ? ` reveal-d${Math.min(index, 6)}` : ""}`}
                key={m.id}
              >
                <div className="mach-detail__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} alt={m.title} />
                </div>
                <div className="mach-detail__body">
                  <span className="machine-card__tag">{m.tag}</span>
                  <h2>{m.title}</h2>
                  <p className="mach-detail__brand">
                    Platform focus: <strong>{m.brand}</strong>
                  </p>
                  <p>{m.description}</p>
                  <ul>
                    <li>
                      <Link href="/services#plc">PLC / HMI support</Link>
                    </li>
                    <li>
                      <Link href="/services#canbus">
                        CANbus &amp; electrical diagnostics
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#lmi">
                        Sensors, LMI &amp; safety systems
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">On-site UAE field service</Link>
                    </li>
                  </ul>
                  <div className="mach-detail__actions">
                    <Link
                      className="btn btn--accent"
                      href={`/contact?machine=${encodeURIComponent(m.brand.split(" ")[0])}`}
                    >
                      Request support for this machine
                    </Link>
                    <Link className="btn btn--outline" href="/services">
                      View services
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <CtaBand
            title="Don’t see your exact model?"
            text="Send the brand, model and fault symptoms — we’ll confirm if we can support it."
            primary={{ href: "/contact", label: "Contact engineering" }}
            secondary={{ href: "/services", label: "View services" }}
          />
        </div>
      </section>
    </SiteChrome>
  );
}
