"use client";
import styles from "./Projects.module.css";
import { motion, useInView, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio showcasing my skills, projects, and experience.",
    tech: ["Next.js", "CSS", "Framer Motion"],
    image: "/projects/portfolio.jpg", // Add your project images
    demoUrl: "https://my-portfolio-eight-gold-47.vercel.app/",
    githubUrl: "https://github.com/BesongOscar/My-Portfolio",
    category: "Web",
    //gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "CamHotel Mobile App",
    description:
      "A hotel discovery mobile application built for users in Cameroon.",
    tech: ["React Native", "Expo"],
    image: "/projects/camhotel.jpg",
    demoUrl: null, // Mobile app - no demo URL
    githubUrl: "https://github.com/BesongOscar/camhotel-mobileapp",
    category: "Mobile",
   // gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Event Management Platform",
    description:
      "A web application for creating, managing, and discovering events.",
    tech: ["Next.js", "MongoDB", "React"],
    image: "/projects/events.jpg",
    demoUrl: "https://your-events-app.com",
    githubUrl: "https://github.com/BesongOscar/Dev-events-nextjsApp",
    category: "Web",
    //gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Project Image/Thumbnail */}
              <div className={styles.imageWrapper}>
                <div 
                  className={styles.imagePlaceholder}
                >
                  {/* Replace with actual Image component when you have images */}
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
          <a href="/projects" className={styles.viewAllBtn}>
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}