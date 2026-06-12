import type { Metadata } from "next";
import { StatusPage } from "@/components/StatusPage";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist or may have been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      label="Error"
      title="Page not found"
      description="The page you are looking for does not exist, may have been moved, or the URL may be incorrect."
      primaryAction={{ label: "Back to home", href: "/" }}
      secondaryAction={{ label: "View projects", href: "/projects" }}
    />
  );
}
