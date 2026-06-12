import type { Metadata } from "next";
import { ProjectsPage } from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production apps shipped by Veloria Tech — mobile, web, AI, and analytics products for startups and enterprises.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <ProjectsPage />;
}
