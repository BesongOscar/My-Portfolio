"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./skills.module.css";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiFlutter,
  SiWordpress,
  SiGithub,
  SiVercel,
  SiExpo,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { JSX, useState, useRef } from "react";
import { useInView } from "framer-motion";

type SkillCategory = "frontend" | "backend" | "mobile" | "tools";

interface Skill {
  icon: JSX.Element;
  name: string;
  category: SkillCategory;
  color: string; // Brand color for each skill
  level?: number; // Optional proficiency level
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills: Skill[] = [
    { icon: <SiReact />, name: "React", category: "frontend", color: "#61DAFB", level: 90 },
    { icon: <SiNextdotjs />, name: "Next.js", category: "frontend", color: "#000000", level: 90 },
    { icon: <SiHtml5 />, name: "HTML5", category: "frontend", color: "#E34F26", level: 95 },
    { icon: <SiCss3 />, name: "CSS3", category: "frontend", color: "#1572B6", level: 85 },
    { icon: <SiJavascript />, name: "JavaScript", category: "frontend", color: "#F7DF1E", level: 85 },
    { icon: <SiNodedotjs />, name: "Nest.js", category: "backend", color: "#339933", level: 80 },
    { icon: <SiMongodb />, name: "PostgreSQL", category: "backend", color: "#47A248", level: 75 },
    { icon: <SiMongodb />, name: "Firebase", category: "backend", color: "#FFCA28", level: 70 },
    { icon: <SiFlutter />, name: "Flutter", category: "mobile", color: "#02569B", level: 75 },
    { icon: <SiExpo />, name: "React Native", category: "mobile", color: "#000020", level: 85 },
    { icon: <SiGithub />, name: "GitHub", category: "tools", color: "#181717", level: 90 },
    { icon: <SiVercel />, name: "Vercel", category: "tools", color: "#000000", level: 85 },
    { icon: <SiWordpress />, name: "WordPress", category: "tools", color: "#21759B", level: 70 },
  ];

  const [activeFilter, setActiveFilter] = useState<SkillCategory | "all">("all");

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  const categoryLabels = {
    all: { label: "All", count: skills.length },
    frontend: { label: "Frontend", count: skills.filter(s => s.category === "frontend").length },
    backend: { label: "Backend", count: skills.filter(s => s.category === "backend").length },
    mobile: { label: "Mobile", count: skills.filter(s => s.category === "mobile").length },
    tools: { label: "Tools", count: skills.filter(s => s.category === "tools").length },
  };

  return (
    <section className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Technical Skills</h2>
          <p className={styles.subtitle}>
            The tools and technologies I use to build scalable, performant, and
            beautiful applications. Constantly learning and expanding this toolkit.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as SkillCategory | "all")}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.active : ""
              }`}
            >
              <span>{categoryLabels[filter].label}</span>
              <span className={styles.count}>{categoryLabels[filter].count}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className={styles.skillsGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                layout
              >
                <div 
                  className={styles.iconWrapper}
                  style={{ 
                    background: `${skill.color}15`,
                    borderColor: `${skill.color}40`
                  }}
                >
                  <div style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </div>
                <span className={styles.skillName}>{skill.name}</span>
                
                {/* Optional: Show proficiency level */}
                {skill.level && (
                  <div className={styles.proficiency}>
                    <div className={styles.proficiencyBar}>
                      <motion.div
                        className={styles.proficiencyFill}
                        style={{ 
                          background: skill.color,
                          width: `${skill.level}%`
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.05 + 0.2, duration: 0.8 }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills count */}
        <motion.p
          className={styles.resultCount}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Showing {filteredSkills.length} {activeFilter === "all" ? "skills" : `${activeFilter} skills`}
        </motion.p>
      </div>
    </section>
  );
}