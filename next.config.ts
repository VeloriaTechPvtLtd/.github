import type { NextConfig } from "next";
import { finalProjectsData } from "./lib/data/projectsData";

const projectIdRedirects = finalProjectsData.map((project) => ({
  source: `/projects/${project.id}`,
  destination: `/projects/${project.slug}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return projectIdRedirects;
  },
};

export default nextConfig;
