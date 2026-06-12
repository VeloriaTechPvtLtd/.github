import type { Project } from "./projectsData";

/** Minimal fields for the homepage project cards — avoids shipping full case study data. */
export const homeFeaturedProjects: Pick<
  Project,
  "id" | "slug" | "title" | "subtitle" | "description" | "category" | "tech" | "image" | "duration"
>[] = [
  {
    id: 1,
    slug: "richie",
    title: "Richie",
    subtitle: "AI-Powered Financial Learning & Advisory Platform",
    description:
      "Richie Solution is an AI-driven mobile platform designed to simplify financial learning and investment decision-making for retail investors.",
    category: "ai",
    tech: ["Flutter", "Node.js", "React.js", "MongoDB", "AI"],
    image: "/assets/icons/richie/feature.png",
    duration: "Production",
  },
  {
    id: 2,
    slug: "guidel",
    title: "Guidel",
    subtitle: "AI City & Travel Audio Guide",
    description:
      "Guidel is an AI-powered mobile application that delivers personalized audio stories for cities, monuments, and cultural sites.",
    category: "ai",
    tech: ["Flutter", "GPT-4", "Google Maps", "Firebase"],
    image: "/assets/icons/guidel/feature.png",
    duration: "Production",
  },
  {
    id: 3,
    slug: "shiftbookd",
    title: "ShiftBOOKD",
    subtitle: "Native iOS Appointment Booking App",
    description:
      "Appointment scheduling platform for beauty and hair professionals with service management and payments.",
    category: "mobile",
    tech: ["Swift", "UIKit", "Core Data", "REST APIs"],
    image: "/assets/icons/shiftbookd/feature.png",
    duration: "Production",
  },
];

export const HOME_PROJECT_COUNT = 8;
