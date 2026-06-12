"use client";

import { VeloriaHero } from "./VeloriaHero";
import { PlatformStatsSection } from "./PlatformStatsSection";
import { ServicesSection } from "./ServicesSection";
import { ProjectsSection } from "./ProjectsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ArenzoSection } from "./ArenzoSection";
import { WhyChooseUsSection } from "./WhyChooseUsSection";
import { ContactSection } from "./ContactSection";
import { HashScrollHandler } from "./HashScrollHandler";
import { useRouter } from "next/navigation";
import { getProjectPath, type Project } from "@/lib/data/projects";

export function HomePage() {
  const router = useRouter();

  const handleViewAllProjects = () => {
    router.push("/projects");
  };

  const handleProjectSelect = (project: Project) => {
    router.push(getProjectPath(project));
  };

  return (
    <>
      <HashScrollHandler />
      <VeloriaHero />
      <PlatformStatsSection />
      <ServicesSection />
      <ProjectsSection
        onViewAllProjects={handleViewAllProjects}
        onProjectSelect={handleProjectSelect}
      />
      <TestimonialsSection onViewAllProjects={handleViewAllProjects} />
      <ArenzoSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
