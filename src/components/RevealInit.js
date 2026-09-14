"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Non-card reveals: show immediately (text safety)
    document
      .querySelectorAll(".reveal:not(.mach-detail), .process-card, .page-hero__content, .page-hero__inner")
      .forEach((el) => el.classList.add("is-in"));

    const cards = Array.from(document.querySelectorAll(".mach-detail"));
    if (!cards.length) return undefined;

    // Reset then animate in on view
    cards.forEach((el) => el.classList.remove("is-in"));

    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      cards.forEach((el) => io.observe(el));
    }

    // Fallback so cards never stay stuck off-screen
    const fallback = window.setTimeout(() => {
      cards.forEach((el) => el.classList.add("is-in"));
    }, 700);

    return () => {
      window.clearTimeout(fallback);
      if (io) io.disconnect();
    };
  }, [pathname]);

  return null;
}
