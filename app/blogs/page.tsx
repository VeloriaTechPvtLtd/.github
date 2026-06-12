import type { Metadata } from "next";
import { BlogsPage } from "@/components/BlogsPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering notes, product thinking, and lessons from building software for startups and enterprises.",
  alternates: { canonical: "/blogs" },
};

export default function Page() {
  return <BlogsPage />;
}
