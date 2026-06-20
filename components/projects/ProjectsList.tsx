"use client";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import styles from "./ProjectsList.module.css";

interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  overview: string;
  image?: string;
  demoUrl?: string | null;
  githubUrl?: string;
  category: string;
}

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={styles.grid}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.article
          key={project.slug}
          className={styles.card}
          variants={cardVariants}
          whileHover={{ y: -8 }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.categoryBadge}>{project.category}</span>
            </div>
          </div>

          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardDescription}>{project.description}</p>

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
        </motion.article>
      ))}
    </motion.div>
  );
}
