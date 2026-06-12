import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Veloria Tech — start a project, request a quote, or discuss your mobile and web software needs.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactSection standalonePage />;
}
