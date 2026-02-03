"use client";

import { motion, easeOut, useInView } from "framer-motion";
import styles from "./experience.module.css";
import { Briefcase, MapPin, Calendar, ExternalLink, Award } from "lucide-react";
import { useRef } from "react";

const experience = [
  {
    year: "2022",
    duration: "3 months",
    company: "Audit & Financial Consultants",
    location: "Douala, Cameroon",
    role: "IT Intern",
    type: "Internship",
    achievement: "Introduced to basic networking concepts and IT infrastructure",
    skills: ["Networking", "IT Support"],
    color: "#3b82f6", // Blue
    link: null,
  },
  {
    year: "2025",
    duration: "Present",
    company: "Dora Mpeh Tech Solutions",
    location: "Douala, Cameroon",
    role: "Frontend Developer",
    type: "Part-time",
    achievement: "Building suitable and user-friendly websites with WordPress and modern frameworks",
    skills: ["WordPress", "React", "CSS"],
    color: "#10b981", // Green
    link: null,
    current: true,
  },
  {
    year: "2025",
    duration: "Present",
    company: "Jans-IT Solutions",
    location: "Douala, Cameroon",
    role: "Mobile App Developer",
    type: "Part-time",
    achievement: "Building robust and scalable mobile applications that meet end-user needs",
    skills: ["React Native", "Flutter", "Mobile UI/UX"],
    color: "#8b5cf6", // Purple
    link: null,
    current: true,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slideVariants = {
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
        ease: [0.25, 0.1, 0.25, 1]
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