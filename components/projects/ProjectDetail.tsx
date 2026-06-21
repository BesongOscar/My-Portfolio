"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Globe, Smartphone } from "lucide-react";
import styles from "./ProjectDetail.module.css";
import { Project, ProjectCategory, projects } from "@/lib/projects";

/**
 * components/Projects/ProjectDetail.tsx
 * ----------------------------------------
 * Case-study layout for a single project, rendered by
 * app/Projects/[slug]/page.tsx. Uses the `overview` field from
 * lib/projects.ts as the main body copy — that field existed in the
 * data already but had no page to render it until now.
 *
 * Deliberately only renders fields that exist in lib/projects.ts. If
 * you want this page to say more about a given project (specific
 * challenges, metrics, screenshots, etc.), add real fields to that
 * project's entry in lib/projects.ts rather than hardcoding copy here —
 * that keeps this component reusable for every project.
 */

const categoryIcons: Record<ProjectCategory, typeof Globe> = {
  Web: Globe,
  Mobile: Smartphone,
};

export default function ProjectDetail({ project }: { project: Project }) {
  const CategoryIcon = categoryIcons[project.category];
  const otherProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <section className={styles.detailSection}>
      <div className={styles.container}>
        <Link href="/Projects" className={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Hero */}
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={styles.categoryBadge}
            style={{ borderColor: `${project.color}60`, color: project.color }}
          >
            <CategoryIcon size={14} />
            {project.category}
          </span>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.actions}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryCta}
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
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Banner placeholder — swap for a real screenshot via next/image
            using `project.image` once one exists under /public/projects */}
        <motion.div
          className={styles.banner}
          style={{
            background: `linear-gradient(135deg, ${project.color}25, ${project.color}05)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <CategoryIcon size={64} style={{ color: project.color, opacity: 0.4 }} />
        </motion.div>

        {/* Overview + quick facts */}
        <div className={styles.contentGrid}>
          <motion.div
            className={styles.overview}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </motion.div>

          <motion.aside
            className={styles.sidebar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className={styles.sidebarCard}>
              <h3>Category</h3>
              <p>{project.category}</p>
            </div>

            <div className={styles.sidebarCard}>
              <h3>Tech Stack</h3>
              <ul className={styles.techList}>
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.sidebarCard}>
              <h3>Links</h3>
              {project.demoUrl || project.githubUrl ? (
                <div className={styles.sidebarLinks}>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                      Source Code
                    </a>
                  )}
                </div>
              ) : (
                <p className={styles.noLinks}>No public links yet</p>
              )}
            </div>
          </motion.aside>
        </div>

        {/* More projects */}
        {otherProjects.length > 0 && (
          <motion.div
            className={styles.moreProjects}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>More Projects</h2>
            <div className={styles.moreGrid}>
              {otherProjects.map((p) => (
                <Link key={p.slug} href={`/Projects/${p.slug}`} className={styles.moreCard}>
                  <span
                    className={styles.moreCategoryBadge}
                    style={{ borderColor: `${p.color}60`, color: p.color }}
                  >
                    {p.category}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Closing CTA */}
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Have a project in mind?</h3>
          <p>I&apos;m always open to discussing new ideas and opportunities.</p>
          <Link href="/Contact" className={styles.ctaButton}>
            Let&apos;s Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
