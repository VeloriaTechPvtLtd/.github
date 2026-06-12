import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BlogDetail } from "@/components/BlogDetail";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  JsonLd,
} from "@/lib/seo/jsonLd";
import { getSiteUrl } from "@/lib/seo/site";
import {
  blogPosts,
  getBlogPostById,
  getBlogPostBySlug,
  getBlogPostPath,
} from "@/lib/data/blogs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/blogs/${post.slug}`;
  const image = post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const numericId = /^\d+$/.test(slug) ? Number(slug) : null;
  if (numericId !== null) {
    const postById = getBlogPostById(numericId);
    if (postById) {
      redirect(getBlogPostPath(postById));
    }
    notFound();
  }

  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blogs" },
          { name: post.title, href: `/blogs/${post.slug}` },
        ])}
      />
      <BlogDetail post={post} />
    </>
  );
}
