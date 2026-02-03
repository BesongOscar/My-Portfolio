"use client";

import { motion, useInView, Variants } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";
import styles from "./education.module.css";
import { useRef } from "react";

const education = [
  {
    year: "2014–2020",
    school: "PSS Douala",
    location: "Douala, Cameroon",
    degree: "Ordinary Levels",
    achievement: "Intro to the fundamentals of computer science",
    color: "#3b82f6", // Blue
  },
  {
    year: "2021–2023",
    school: "PSS Douala",
    location: "Douala, Cameroon",
    degree: "A Levels",
    achievement: "Specialized in Science & Tech",
    color: "#8b5cf6", // Purple
  },
  {
    year: "2023–2025",
    school: "University of Buea",
    location: "Buea, Cameroon",
    degree: "B-Tech Computer Engineering",
    achievement: "Focus on Web & Mobile Development",
    color: "#ec4899", // Pink
    current: true, // Add flag for current education
  },
];

export default function Education() {
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={styles.educationSection} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Education Journey</h2>
        <p className={styles.subtitle}>
          My academic background and continuous learning path
        </p>
      </motion.div>

      <div className={styles.timelineContainer}>
        {/* Vertical timeline line in center */}
        <motion.div
          className={styles.timelineLine}
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
        />

        <ul className={styles.timeline}>
          {education.map((edu, index) => (
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
                {/* Gradient overlay based on color */}
                <div 
                  className={styles.cardGradient}
                  style={{
                    background: `linear-gradient(135deg, ${edu.color}10, transparent)`
                  }}
                />

                {/* Current badge
                {edu.current && (
                  <div className={styles.currentBadge}>
                    <span>Current</span>
                  </div>
                )} */}

                {/* Marker at top of card */}
                <span className={styles.marker}>
                  <motion.div
                    className={styles.markerFill}
                    style={{ background: edu.color }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                  <GraduationCap size={20} color="#fff" />
                </span>

                {/* Card content */}
                <time className={styles.year} style={{ color: edu.color }}>
                  {edu.year}
                </time>
                
                <h3 className={styles.school}>{edu.school}</h3>
                
                <div className={styles.location}>
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>

                <p className={styles.degree}>{edu.degree}</p>
                
                {edu.achievement && (
                  <div className={styles.achievement}>
                    <Award size={14} />
                    <small>{edu.achievement}</small>
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