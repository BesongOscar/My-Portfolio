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
 * and the full /projects page (components/projects/ProjectsGrid.tsx) now read
 * from this one array, so updating a project here updates it everywhere.
 *
 * `overview` is intentionally longer/more detailed than `description` — it's
 * not used yet, but it's there so a future /projects/[slug] case-study page
 * can use it without needing new data.
 */

export type ProjectCategory = "Web" | "Mobile"| "SaaS";

export interface Project {
  /** URL-safe identifier, reserved for a future /projects/[slug] detail page. */
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
    slug: "janlums",
    title: "Laundry Management Saas",
    description:
      "JanLunMS is a multi-tenant Laundry Management SaaS platform that streamlines laundry operations, customer self-service, order tracking, inventory management, payments, notifications, and business administration across web and mobile applications.",
    overview:
      "Janlums is a comprehensive laundry management system that streamlines operations for laundry businesses, providing features for order tracking, customer management, and reporting.",
    tech: ["Next.js", "CSS", "PostgreSQL", "React-Native", "Expo", "NestJS", "TypeScript"],
    category: "SaaS",
    image: "/projects/janlums.jpg",
    demoUrl: null,
    githubUrl: "https://github.com/BesongOscar/JanLums.git",
    color: "#f97316",
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
    githubUrl: "https://github.com/BesongOscar/camhotel-mobileapp.git",
    color: "#0000ee",
    featured: false,
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
    demoUrl: null,
    githubUrl: "https://github.com/BesongOscar/Dev-events-nextjsApp.git",
    color: "#3b82f6",
    featured: false,
  },
  {
    slug: "To-Do",
    title: "To-Do Application",
    description:
      "A production-ready task management application inspired by Microsoft To Do, built with React Native, Expo, and Firebase, offering authentication, task organization, and real-time cloud synchronization.",
    overview:
      "This application helps users organize their tasks and stay productive with a clean and intuitive interface.",
    tech: ["React Native", "TypeScript", "Firebase", "Expo"],
    category: "Mobile",
    image: "/icon.png",
    demoUrl: null,
    githubUrl: "https://github.com/BesongOscar/TO-DO-app.git",
    color: "#0078d4",
    featured: false,
  },
];

/** Projects flagged for the homepage teaser section. */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/** Look up a single project by its slug — ready for a future /projects/[slug] route. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Unique category list, derived from the data so it never goes stale. */
export function getProjectCategories(): ProjectCategory[] {
  return Array.from(new Set(projects.map((project) => project.category)));
}
