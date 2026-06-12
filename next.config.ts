import type { NextConfig } from "next";
import { finalProjectsData } from "./lib/data/projectsData";

const projectIdRedirects = finalProjectsData.map((project) => ({
  source: `/projects/${project.id}`,
  destination: `/projects/${project.slug}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  // Ensure title, description, and canonical render in <head> for Lighthouse
  // and other HTML-only crawlers (Next.js 15.2+ streams metadata by default).
  htmlLimitedBots: /.*/,
  devIndicators: false,
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1360],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return projectIdRedirects;
  },
};

export default nextConfig;
