import type { Metadata } from "next";
import { ServicesSection } from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile apps, web applications, AI solutions, analytics, cloud, cybersecurity, and custom software development by Veloria Tech.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <ServicesSection />;
}
