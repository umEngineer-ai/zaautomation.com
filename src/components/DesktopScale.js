"use client";

import { useEffect } from "react";

export default function DesktopScale() {
  useEffect(() => {
    const DESIGN_WIDTH = 1440;
    const NAVBAR_HEIGHT = 84;

    function scaleDesktop() {
      const root = document.getElementById("desktop-root");
      const navbar = document.getElementById("desktop-navbar");
      if (!root || !navbar) return;

      const scale = window.innerWidth / DESIGN_WIDTH;

      [root, navbar].forEach((element) => {
        element.style.width = DESIGN_WIDTH + "px";
        element.style.transformOrigin = "top left";
        element.style.transform = `scale(${scale})`;
      });

      navbar.style.height = NAVBAR_HEIGHT * scale + "px";

      root.style.height = "auto";
      if (scale < 1) {
        root.style.height = root.scrollHeight * scale + "px";
      }
    }

    scaleDesktop();
    window.addEventListener("resize", scaleDesktop);
    window.addEventListener("load", scaleDesktop);

    return () => {
      window.removeEventListener("resize", scaleDesktop);
      window.removeEventListener("load", scaleDesktop);
    };
  }, []);

  return null;
}
