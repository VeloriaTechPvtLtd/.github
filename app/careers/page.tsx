import type { Metadata } from "next";
import { CareersPage } from "@/components/CareersPage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Veloria Tech — open roles in engineering, design, and product. Build mobile and web software from Bengaluru.",
  alternates: { canonical: "/careers" },
};

export default function Page() {
  return <CareersPage />;
}
