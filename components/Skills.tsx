"use client";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Server, Wrench } from "lucide-react";

// Skills data organized by category with proficiency levels
const skillsData = [
  {
    category: "Web Frontend",
    icon: Monitor,
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
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 75 },
      { name: "Expo", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
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
  // Animation variants for staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation variants for individual skill cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const SkillsCard = ({
    category,
    icon: Icon,
    skills,
  }: {
    category: string;
    icon: React.ElementType;
    skills: { name: string; level: number }[];
  }) => {
    return (
      <motion.div
        className={styles.card}
        variants={cardVariants}
        whileHover={{ scale: 1.03 }}
      >
        <div className={styles.cardHeader}>
          <Icon size={24} className={styles.categoryIcon} />
          <h3>{category}</h3>
        </div>
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section className={styles.skills} aria-labelledby="skills-heading">
      <div className={styles.container}>
        <h2 id="skills-heading" className={styles.title}>Skills.</h2>

        {/* Animated grid container with staggered card animations */}
        <motion.div
          variants={containerVariants}
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skillCategory) => (
            <SkillsCard
              key={skillCategory.category}
              category={skillCategory.category}
              icon={skillCategory.icon}
              skills={skillCategory.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
