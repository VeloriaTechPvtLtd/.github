import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/components/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Veloria Tech privacy policy — how we collect, use, and protect personal data.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
