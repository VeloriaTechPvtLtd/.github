import type { Metadata } from "next";
import { TestimonialsPage } from "@/components/TestimonialsPage";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client stories and testimonials — how startups and enterprises partner with Veloria Tech to ship production software.",
  alternates: { canonical: "/testimonials" },
};

export default function Page() {
  return <TestimonialsPage />;
}
