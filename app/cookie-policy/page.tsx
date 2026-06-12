import type { Metadata } from "next";
import { CookiePolicyPage } from "@/components/CookiePolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for Veloria Tech — how we use cookies and similar technologies on this website.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CookiePolicyPage />;
}
