import type { Metadata } from "next";
import { TermsPage } from "@/components/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Veloria Tech website and software development services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TermsPage />;
}
