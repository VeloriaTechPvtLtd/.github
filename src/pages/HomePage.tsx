import { VeloriaHero } from "../components/VeloriaHero";
import { ArenzoSection } from "../components/ArenzoSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { ContactSection } from "../components/ContactSection";
import { Project } from "../data/projectsData";

interface HomePageProps {
  onViewAllProjects: () => void;
  onProjectSelect: (project: Project) => void;
}

export function HomePage({ onViewAllProjects, onProjectSelect }: HomePageProps) {
  return (
    <>
      <VeloriaHero />
      <ArenzoSection />
      <ServicesSection />
      <ProjectsSection
        onViewAllProjects={onViewAllProjects}
        onProjectSelect={onProjectSelect}
      />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
} 