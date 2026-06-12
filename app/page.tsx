import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} - Software Solutions`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
