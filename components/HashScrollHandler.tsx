"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/utils/scrollToSection";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    requestAnimationFrame(() => {
      scrollToSection(hash);
    });
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      if (pathname !== "/") return;
      const hash = window.location.hash.replace(/^#/, "");
      if (hash) scrollToSection(hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}
