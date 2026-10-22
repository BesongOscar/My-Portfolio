"use client";

import { motion,Variants, useInView } from "framer-motion";
import styles from "./experience.module.css";
import { Briefcase, MapPin, Calendar, ExternalLink, Award } from "lucide-react";
import { useRef } from "react";

const experience = [
  {
    year: "2025",
    duration: "Jul – Sep 2025",
    company: "Audit & Financial Consultants",
    location: "Douala, Cameroon",
    role: "IT/Networking Support Intern",
    type: "Internship",
    achievement: "Configured and troubleshot LAN/WAN connectivity and gave first-level technical support",
    skills: ["Networking", "IT Support"],
    color: "#3b82f6", // Blue
    link: null,
    current: false,
  },
  {
    year: "2025",
    duration: "Mar – Dec 2025",
    company: "Dora Mpeh Tech Services",
    location: "Douala, Cameroon",
    role: "WordPress Developer",
    type: "Part-time",
    achievement: "Designed, deployed and maintained client websites with custom theme and plugin work",
    skills: ["WordPress", "PHP", "CSS"],
    color: "#10b981", // Green
    link: null,
    current: false,
  },
  {
    year: "2025 – 2026",
    duration: "Aug 2025 – Sep 2026",
    company: "Jan-IT Solution",
    location: "Douala, Cameroon",
    role: "Mobile Application Developer",
    type: "Part-time",
    achievement: "Built and refactored cross-platform mobile apps with reusable component architecture",
    skills: ["React Native", "Expo", "State Management"],
    color: "#8b5cf6", // Purple
    link: null,
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slideVariants: Variants = {
    hiddenLeft: {
      opacity: 0,
      x: -60,
    },
    hiddenRight: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      },
    },
  };

  return (
    <section className={styles.experienceSection} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Work Experience</h2>
        <p className={styles.subtitle}>
          Professional journey and hands-on experience in software development
        </p>
      </motion.div>

      <div className={styles.timelineContainer}>
        <motion.div
          className={styles.timelineLine}
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
        />

        <ul className={styles.timeline}>
          {experience.map((exp, index) => (
            <li
              key={index}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <motion.div
                className={styles.card}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                whileInView="visible"
                variants={slideVariants}
                initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Gradient overlay */}
                <div
                  className={styles.cardGradient}
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}10, transparent)`,
                  }}
                />

                {/* Current badge */}
                {exp.current && (
                  <div className={styles.currentBadge}>
                    <span>Current</span>
                  </div>
                )}

                {/* Type badge */}
                <div className={styles.typeBadge} style={{ borderColor: exp.color }}>
                  {exp.type}
                </div>

                {/* Marker */}
                <span className={styles.marker}>
                  <motion.div
                    className={styles.markerFill}
                    style={{ background: exp.color }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  />
                  <Briefcase size={18} color="#fff" />
                </span>

                {/* Content */}
                <div className={styles.cardHeader}>
                  <time className={styles.year} style={{ color: exp.color }}>
                    {exp.year}
                  </time>
                  <span className={styles.duration}>
                    <Calendar size={12} />
                    {exp.duration}
                  </span>
                </div>

                <h3 className={styles.company}>
                  {exp.company}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.companyLink}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </h3>

                <div className={styles.location}>
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>

                <p className={styles.role}>{exp.role}</p>

                {exp.achievement && (
                  <div className={styles.achievement}>
                    <Award size={14} />
                    <small>{exp.achievement}</small>
                  </div>
                )}

                {/* Skills */}
                {exp.skills && (
                  <div className={styles.skills}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}