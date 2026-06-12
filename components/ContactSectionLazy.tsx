"use client";

import dynamic from "next/dynamic";
import { LazyWhenVisible } from "./LazyWhenVisible";
import { CONTACT_FORM_SECTION_ID, CONTACT_SECTION_ID } from "@/lib/utils/scrollToSection";

const ContactSection = dynamic(
  () =>
    import("@/components/ContactSection").then((mod) => mod.ContactSection),
  { ssr: false },
);

export function ContactSectionLazy() {
  return (
    <LazyWhenVisible
      component={ContactSection}
      sectionId={CONTACT_SECTION_ID}
      relatedHashIds={[CONTACT_FORM_SECTION_ID]}
      minHeight={720}
      rootMargin="400px"
    />
  );
}
