import type { Metadata } from "next";
import { AboutUsPage } from "@/components/AboutUsPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Veloria Tech (OPC) Private Limited — company details, registration, and how we build software for clients worldwide.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutUsPage />;
}
