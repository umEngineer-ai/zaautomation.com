"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/lib/site";

export default function Header({ solid = false }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(solid);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (solid) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`header${solid ? " header--solid" : ""}${pathname === "/" ? " home-header" : ""}${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
      id="header"
    >
      <div className="header__inner">
        <Link className="logo" href="/" aria-label="Zaki Abbas home" onClick={() => setMenuOpen(false)}>
          <Image
            className="logo__img"
            src="/assets/images/logo.png"
            alt="Zaki Abbas Technical Services LLC — Automation"
            width={52}
            height={52}
            priority
          />
          <div className="logo__text">
            <strong>{site.shortName}</strong>
            <small>Zaki Abbas Technical Services LLC</small>
          </div>
        </Link>

        <button
          className="header__menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`header__menu${menuOpen ? " is-open" : ""}`}>
          <nav className="nav" id="primary-navigation" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : undefined}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__cta">
            <a
              className="btn btn--ghost"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Zaki Abbas"
            >
              WhatsApp
            </a>
            <Link className="btn btn--accent" href="/contact" onClick={() => setMenuOpen(false)}>
              Request Support
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
