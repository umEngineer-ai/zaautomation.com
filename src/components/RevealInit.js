"use client";

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    document.body.classList.add("is-ready");
    return () => document.body.classList.remove("is-ready");
  }, []);

  return null;
}
