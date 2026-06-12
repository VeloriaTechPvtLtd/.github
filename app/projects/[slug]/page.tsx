import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import {
  breadcrumbJsonLd,
  JsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo/jsonLd";
import { getSiteUrl } from "@/lib/seo/site";
import {
  finalProjectsData,
  getProjectById,
  getProjectBySlug,
  getProjectPath,
} from "@/lib/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return finalProjectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  const siteUrl = getSiteUrl();
  const path = getProjectPath(project);
  const image = project.image.startsWith("http")
    ? project.image
    : `${siteUrl}${project.image}`;

  return {
    title: project.title,
    description: project.description.slice(0, 160),
    alternates: { canonical: path },
    openGraph: {
      title: project.title,
      description: project.subtitle ?? project.description.slice(0, 160),
      url: `${siteUrl}${path}`,
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.subtitle ?? project.description.slice(0, 160),
      images: [image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const numericId = /^\d+$/.test(slug) ? Number(slug) : null;
  if (numericId !== null) {
    const projectById = getProjectById(numericId);
    if (projectById) {
      redirect(getProjectPath(projectById));
    }
    notFound();
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const path = getProjectPath(project);

  return (
    <>
      <JsonLd data={softwareApplicationJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: project.title, href: path },
        ])}
      />
      <ProjectDetail project={project} />
    </>
  );
}
