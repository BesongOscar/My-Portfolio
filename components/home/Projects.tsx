"use client";
import styles from "./Projects.module.css";
import { motion, useInView, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { getFeaturedProjects } from "@/lib/projects";

/**
 * components/home/Projects.tsx
 * -----------------------------
 * Homepage "Featured Projects" teaser. Shows the projects flagged
 * `featured: true` in lib/projects.ts and links to the full /Projects
 * page (components/Projects/ProjectsGrid.tsx) for the complete list.
 *
 * Data previously lived here as its own hardcoded array; it now comes
 * from lib/projects.ts so the homepage and /Projects page can't drift
 * out of sync with each other.
 */
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projects = getFeaturedProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={styles.projects} aria-labelledby="projects-heading" ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="projects-heading">Featured Projects</h2>
          <p className={styles.subtitle}>
            Some projects that reflect my learning and experience
          </p>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Project Image/Thumbnail */}
              <div className={styles.imageWrapper}>
                <div
                  className={styles.imagePlaceholder}
                >
                  {/* Replace with actual Image component once screenshots exist under /public/projects */}
                  <span className={styles.categoryBadge}>{project.category}</span>
                </div>
                {/* Uncomment when you have actual images:
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
                */}
              </div>

              {/* Project Content */}
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Tech Stack */}
                <ul className={styles.techList}>
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* CTAs */}
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
          ))}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          className={styles.viewAllWrapper}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a href="/Projects" className={styles.viewAllBtn}>
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
