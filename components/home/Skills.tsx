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
      { name: "Next.js" },
      { name: "React" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    color: "#ec4899", // Pink
    skills: [
      { name: "React Native" },
      { name: "Flutter" },
      { name: "Expo" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "#3b82f6", // Blue
    skills: [
      { name: "NestJS" },
      { name: "PostgreSQL" },
      {name: "firebase"},
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    color: "#10b981", // Green
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "Vercel" },
      { name: "PostHog" },
      { name: "HTTPie" },
      { name: "WordPress" },
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
    skills: { name: string }[];
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

        <ul className={styles.skillsList}>
          {skills.map((skill) => (
            <li key={skill.name} className={styles.skillItem}>
              {skill.name}
            </li>
          ))}
        </ul>
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