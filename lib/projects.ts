/**
 * lib/projects.ts
 * ----------------
 * Single source of truth for all portfolio project data.
 *
 * Previously this data was split in two places that could drift out of sync:
 *   - lib/projects.ts          (slug, title, description, tech, overview)
 *   - components/home/Projects.tsx (title, description, tech, image, demoUrl, githubUrl, category)
 *
 * Both the homepage "Featured Projects" teaser (components/home/Projects.tsx)
 * and the full /Projects page (components/Projects/ProjectsGrid.tsx) now read
 * from this one array, so updating a project here updates it everywhere.
 *
 * `overview` is intentionally longer/more detailed than `description` — it's
 * not used yet, but it's there so a future /Projects/[slug] case-study page
 * can use it without needing new data.
 */

export type ProjectCategory = "Web" | "Mobile";

export interface Project {
  /** URL-safe identifier, reserved for a future /Projects/[slug] detail page. */
  slug: string;
  /** Card title. */
  title: string;
  /** Short 1-line summary shown on project cards. */
  description: string;
  /** Longer summary, reserved for a future project detail page. */
  overview: string;
  /** Tech stack tags shown as pills on the card. */
  tech: string[];
  category: ProjectCategory;
  /** Path to a screenshot/thumbnail under /public. May not exist yet — see note in ProjectsGrid.tsx. */
  image: string;
  /** Live demo URL, or null for projects with no public deployment (e.g. mobile apps). */
  demoUrl: string | null;
  /** Source code URL, or null if the repo is private. */
  githubUrl: string | null;
  /** Accent color used for the card's placeholder artwork and category icon. */
  color: string;
  /** Whether this project shows up in the homepage "Featured Projects" teaser. */
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    description:
      "A personal portfolio website built to showcase my skills, projects, and experience.",
    overview:
      "This project was built to create a clean, professional online presence. It focuses on performance, accessibility, and clear presentation of work.",
    tech: ["Next.js", "CSS Modules", "Framer Motion"],
    category: "Web",
    image: "/projects/portfolio.jpg",
    demoUrl: "https://my-portfolio-eight-gold-47.vercel.app/",
    githubUrl: "https://github.com/BesongOscar/My-Portfolio",
    color: "#7c3aed",
    featured: true,
  },
  {
    slug: "camhotel",
    title: "CamHotel Mobile App",
    description:
      "A mobile application for discovering hotels and accommodations in Cameroon.",
    overview:
      "CamHotel helps users find hotels easily through a simple and intuitive mobile interface, built with a focus on usability and performance.",
    tech: ["React Native", "Expo"],
    category: "Mobile",
    image: "/projects/camhotel.jpg",
    demoUrl: null,
    githubUrl: "https://github.com/BesongOscar/camhotel-mobileapp",
    color: "#ec4899",
    featured: true,
  },
  {
    slug: "events",
    title: "Event Management Platform",
    description:
      "A web application for creating, managing, and discovering events.",
    overview:
      "This platform allows users to create events, manage registrations, and discover upcoming activities in a seamless web experience.",
    tech: ["Next.js", "MongoDB"],
    category: "Web",
    image: "/projects/events.jpg",
    demoUrl: "https://your-events-app.com",
    githubUrl: "https://github.com/BesongOscar/Dev-events-nextjsApp",
    color: "#3b82f6",
    featured: true,
  },
];

/** Projects flagged for the homepage teaser section. */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/** Look up a single project by its slug — ready for a future /Projects/[slug] route. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Unique category list, derived from the data so it never goes stale. */
export function getProjectCategories(): ProjectCategory[] {
  return Array.from(new Set(projects.map((project) => project.category)));
}
