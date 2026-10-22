"use client";
import { useRef } from "react";
import styles from "./About.module.css";
import { motion, useInView } from "framer-motion";
import { Code2, Briefcase, Languages, GraduationCap } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects on GitHub", value: "4", color: "#7c3aed" },
  { icon: Briefcase, label: "Professional Roles", value: "3", color: "#ec4899" },
  { icon: Languages, label: "Languages (EN / FR)", value: "2", color: "#3b82f6" },
  { icon: GraduationCap, label: "BTech Degree", value: "1", color: "#10b981" },
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
            I&apos;m a software developer based in Douala, Cameroon, with a BTech in
            Computer Engineering (Software Engineering) from the University of
            Buea. I work across the stack: <span className={styles.highlight}>Next.js</span> and{" "}
            <span className={styles.highlight}>React</span> on the web,{" "}
            <span className={styles.highlight}>React Native</span> with Expo on mobile, and{" "}
            <span className={styles.highlight}>NestJS</span> with PostgreSQL on the backend.
          </motion.p>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            I&apos;ve built cross-platform mobile apps professionally at Jan-IT
            Solution and delivered WordPress websites for clients at Dora Mpeh
            Tech Services. My largest project, JanLunMS, is a multi-tenant SaaS
            platform that I designed and built on my own, from the data model to
            the web and mobile apps.
          </motion.p>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            I care about clean, reusable component architecture and apps that
            stay fast and easy to maintain. I&apos;m open to full-time and remote
            opportunities.
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