import Link from "next/link";
import Image from "next/image";
import { site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="logo">
            <Image
              className="logo__img logo__img--footer"
              src="/assets/images/logo.png"
              alt="Zaki Abbas Technical Services LLC — Automation"
              width={52}
              height={52}
            />
            <div className="logo__text">
              <strong>{site.shortName}</strong>
              <small>Technical Services LLC</small>
            </div>
          </div>
          <p>
            Industrial automation specialists for piling and foundation
            machinery — PLC, HMI, CANbus, electrical diagnostics and safety
            systems across the UAE.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/machinery">Machinery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/services#plc">PLC Programming</Link>
            </li>
            <li>
              <Link href="/services#hmi">HMI Development</Link>
            </li>
            <li>
              <Link href="/services#canbus">CANbus Diagnostics</Link>
            </li>
            <li>
              <Link href="/services#electrical">Electrical Fault Finding</Link>
            </li>
            <li>
              <Link href="/services#lmi">LMI Calibration</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.address.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Al Barah, Dubai
              </a>
            </li>
            <li>
              <Link href="/contact">Request a visit</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} {site.name} · {site.address.line1},{" "}
        {site.address.city}
      </div>
    </footer>
  );
}
