import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { VeloriaNavigation } from "./components/VeloriaNavigation";
import { VeloriaFooter } from "./components/VeloriaFooter";
import { ProjectDetail } from "./components/ProjectDetail";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { Project } from "./data/projectsData";

export default function App() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewAllProjects = () => {
    navigate('/projects');
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    navigate(`/projects/${project.id}`);
  };

  const handleBackToHome = () => {
    navigate('/');
    setSelectedProject(null);
  };

  const handleBackToProjects = () => {
    navigate('/projects');
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen text-white scroll-smooth overflow-x-hidden w-full bg-[#0d1117]">
      <VeloriaNavigation />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              onViewAllProjects={handleViewAllProjects}
              onProjectSelect={handleProjectSelect}
            />
          } 
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route 
          path="/projects" 
          element={
            <ProjectsPage 
              onBack={handleBackToHome}
              onProjectSelect={handleProjectSelect}
            />
          } 
        />
        <Route 
          path="/projects/:id" 
          element={
            selectedProject ? (
              <ProjectDetail 
                project={selectedProject}
                onBack={handleBackToProjects}
              />
            ) : (
              <ProjectsPage 
                onBack={handleBackToHome}
                onProjectSelect={handleProjectSelect}
              />
            )
          } 
        />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Routes>

      <VeloriaFooter />
    </div>
  );
}