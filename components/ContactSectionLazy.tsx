"use client";

import dynamic from "next/dynamic";
import { LazyWhenVisible } from "./LazyWhenVisible";

const ContactSection = dynamic(
  () =>
    import("@/components/ContactSection").then((mod) => mod.ContactSection),
  { ssr: false },
);

export function ContactSectionLazy() {
  return (
    <LazyWhenVisible
      component={ContactSection}
      minHeight={720}
      rootMargin="400px"
    />
  );
}
