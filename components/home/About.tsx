"use client";
import { useEffect, useRef } from "react";
import styles from "./About.module.css";
import { motion, useInView } from "framer-motion";
import { Code2, Rocket, Users, Award } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Completed", value: "10+", color: "#7c3aed" },
  { icon: Rocket, label: "Years Experience", value: "3+", color: "#ec4899" },
  { icon: Users, label: "Happy Clients", value: "15+", color: "#3b82f6" },
  { icon: Award, label: "Certifications", value: "3+", color: "#10b981" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.about} aria-labelledby="about-heading" ref={ref}>
      <div className={styles.container}>
        {/* Animated heading */}
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Main content with stagger animation */}
        <motion.div
          className={styles.content}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            I'm a passionate software developer with expertise in building
            modern web and mobile applications. With a strong foundation in
            frontend technologies like <span className={styles.highlight}>Next.js</span> and{" "}
            <span className={styles.highlight}>React</span>, I create seamless
            user experiences that are both functional and visually appealing.
          </motion.p>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            My journey in software development has equipped me with skills
            across the full stack, from crafting responsive interfaces to
            building robust backend systems. I'm constantly learning and
            adapting to new technologies to deliver innovative solutions.
          </motion.p>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            When I'm not coding, I enjoy exploring new frameworks, contributing
            to open-source projects, and sharing knowledge with the developer
            community.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className={styles.statsGrid}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <stat.icon size={32} style={{ color: stat.color }} />
              <h3 className={styles.statValue}>{stat.value}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}