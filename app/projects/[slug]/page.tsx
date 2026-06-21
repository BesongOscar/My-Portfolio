import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";

/**
 * app/projects/[slug]/page.tsx
 * ------------------------------
 * Route: /projects/[slug] — e.g. /projects/portfolio
 *
 * Server Component. `generateStaticParams` pre-renders one page per
 * project at build time, and `generateMetadata` gives each one its own
 * <title>/description instead of inheriting the root layout's.
 *
 * Note: in Next.js 15+, `params` is a Promise and must be awaited —
 * that's why both functions below `await params` before reading `slug`.
 */

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Unknown slug (typo'd URL, removed project, etc.) — render Next's 404.
  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
