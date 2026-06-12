import { finalProjectsData, type Project } from "./projectsData";

export type { Project } from "./projectsData";
export { finalProjectsData, projectsData } from "./projectsData";

export function getProjectBySlug(slug: string): Project | undefined {
  return finalProjectsData.find((project) => project.slug === slug);
}

export function getProjectById(id: number): Project | undefined {
  return finalProjectsData.find((project) => project.id === id);
}

export function getProjectPath(project: Project): string {
  return `/projects/${project.slug}`;
}

const slugSet = new Set<string>();
for (const project of finalProjectsData) {
  if (slugSet.has(project.slug)) {
    throw new Error(`Duplicate project slug: ${project.slug}`);
  }
  slugSet.add(project.slug);
}
