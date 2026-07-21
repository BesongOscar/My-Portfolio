"use client";
import styles from "./Skills.module.css";
import { motion, useInView, cubicBezier } from "framer-motion";
import { Monitor, Smartphone, Server, Wrench } from "lucide-react";
import { useRef } from "react";

// Skills data organized by category with proficiency levels
const skillsData = [
  {
    category: "Web Frontend",
    icon: Monitor,
    color: "#7c3aed", // Purple
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 85 },
      { name: "Javascript", level: 85 },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    color: "#ec4899", // Pink
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 75 },
      { name: "Expo", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "#3b82f6", // Blue
    skills: [
      { name: "Nest.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
      {name: "firebase", level: 70},
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    color: "#10b981", // Green
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Gitlab", level: 85 },
      { name: "Vercel", level: 85 },
      { name: "PostHog", level: 70 },
      { name: "HTTPie", level: 75 },
      { name: "Wordpress", level: 70 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for individual skill cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const SkillsCard = ({
    category,
    icon: Icon,
    skills,
    color,
  }: {
    category: string;
    icon: React.ElementType;
    skills: { name: string; level: number }[];
    color: string;
  }) => {
    return (
      <motion.div
        className={styles.card}
        variants={cardVariants}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3 }
        }}
      >
        {/* Animated gradient border on hover */}
        <div 
          className={styles.cardGlow} 
          style={{ 
            background: `radial-gradient(circle at top, ${color}22, transparent)` 
          }}
        />
        
        <div className={styles.cardHeader}>
          <div 
            className={styles.iconWrapper}
            style={{ 
              background: `${color}15`,
              borderColor: `${color}40`
            }}
          >
            <Icon size={24} style={{ color }} />
          </div>
          <h3>{category}</h3>
        </div>

        <div className={styles.skillsList}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={styles.skillItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.4 
              }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <div className={styles.skillInfo}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  style={{ 
                    background: `linear-gradient(90deg, ${color}, ${color}dd)` 
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ 
                    duration: 1.2, 
                    ease: "easeOut",
                    delay: index * 0.05 
                  }}
                  viewport={{ once: true }}
                />
                {/* Glowing effect on progress bar */}
                <motion.div
                  className={styles.progressGlow}
                  style={{ 
                    background: color,
                    width: `${skill.level}%`
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.05 
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section className={styles.skills} aria-labelledby="skills-heading" ref={ref}>
      <div className={styles.container}>
        {/* Enhanced animated title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="skills-heading" className={styles.title}>
            Skills & Expertise
          </h2>
          <p className={styles.subtitle}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Animated grid container with staggered card animations */}
        <motion.div
          variants={containerVariants}
          className={styles.grid}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillsData.map((skillCategory) => (
            <SkillsCard
              key={skillCategory.category}
              category={skillCategory.category}
              icon={skillCategory.icon}
              skills={skillCategory.skills}
              color={skillCategory.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}