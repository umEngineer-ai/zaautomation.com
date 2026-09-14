"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash?.replace("#", "");
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;
      // Offset for fixed header
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
      el.classList.add("is-in");
    };

    // Run after paint / route change
    const t1 = setTimeout(scrollToHash, 80);
    const t2 = setTimeout(scrollToHash, 350);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
