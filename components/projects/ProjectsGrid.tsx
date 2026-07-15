"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { ExternalLink, Github, Globe, Smartphone } from "lucide-react";
import styles from "./ProjectsGrid.module.css";
import { projects, getProjectCategories, Project, ProjectCategory } from "@/lib/projects";

/**
 * components/projects/ProjectsGrid.tsx
 * --------------------------------------
 * Full content for the /projects page: intro header, a category filter
 * (All / Web / Mobile — built the same way as the filter UI on the About
 * > Skills section), the complete project grid, and a closing CTA that
 * points to /contact.
 *
 * Rendered from app/projects/page.tsx, which is a server component so the
 * page can export real metadata (title/description) — this file stays a
 * client component purely for the filter state + animations.
 *
 * NOTE on images: each project in lib/projects.ts has an `image` path
 * under /public/projects/, but those screenshot files don't exist in the
 * repo yet. Rather than render a broken <Image>, cards show a generated
 * gradient + icon placeholder using each project's accent color. Once you
 * add real screenshots, swap the `.imagePlaceholder` block below for a
 * `next/image` using `project.image` — the rest of the layout doesn't
 * need to change.
 */

type FilterValue = "All" | ProjectCategory;

const categoryIcons: Record<ProjectCategory, typeof Globe> = {
  Web: Globe,
  Mobile: Smartphone,
  SaaS: Globe,
};

export default function ProjectsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = getProjectCategories();
  const filters: FilterValue[] = ["All", ...categories];

  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const countFor = (filter: FilterValue) =>
    filter === "All"
      ? projects.length
      : projects.filter((project) => project.category === filter).length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.projectsSection} ref={ref}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            A selection of web and mobile applications I&apos;ve designed and
            built — from idea through deployment.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.active : ""
              }`}
              aria-pressed={activeFilter === filter}
            >
              <span>{filter}</span>
              <span className={styles.count}>{countFor(filter)}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variants={cardVariants} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Closing CTA */}
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 style={{ textAlign: "center" }}>Have a project in mind?</h3>
          <p>I&apos;m always open to discussing new ideas and opportunities.</p>
          <a href="/contact" className={styles.ctaButton}>
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  variants,
}: {
  project: Project;
  variants: Variants;
}) {
  const CategoryIcon = categoryIcons[project.category];

  return (
    <motion.div className={styles.card} variants={variants} whileHover={{ y: -10 }}>
      {/* Placeholder artwork — swap for next/image once screenshots exist. Links to the project's detail page. */}
      <Link
        href={`/projects/${project.slug}`}
        className={styles.imageWrapper}
        aria-label={`View details for ${project.title}`}
      >
        <div
          className={styles.imagePlaceholder}
          style={{
            background: `linear-gradient(135deg, ${project.color}25, ${project.color}05)`,
          }}
        >
          <CategoryIcon size={40} style={{ color: project.color, opacity: 0.5 }} />
        </div>
        <span
          className={styles.categoryBadge}
          style={{ borderColor: `${project.color}60` }}
        >
          {project.category}
        </span>
      </Link>

      {/* Content */}
      <div className={styles.cardContent}>
        <Link href={`/projects/${project.slug}`} className={styles.cardTitleLink}>
          <h3>{project.title}</h3>
        </Link>
        <p>{project.description}</p>

        <ul className={styles.techList}>
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.cardActions}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
              aria-label={`View live demo of ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryCta}
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
