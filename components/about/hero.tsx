"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Download, MapPin, Calendar } from "lucide-react";
import styles from "./hero.module.css";

const highlights = [
  { icon: Calendar, label: "3+ Years Experience" },
  { icon: MapPin, label: "Based in Cameroon" },
];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.container}>
        {/* Main Heading */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Turning ideas into modern
          <br />
          <span className={styles.gradient}>web & mobile products</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} // FIXED: was y: 20
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I design and develop high-performance applications using React,
          Next.js, Flutter, and modern backend tools.
        </motion.p>

        {/* Highlights */}
        <motion.div
          className={styles.highlights}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {highlights.map((item, index) => (
            <div key={index} className={styles.highlight}>
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects" className={styles.primaryBtn}>
              <span>View Projects</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/Contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/resume.pdf"
              download="Besong_Oscar_Resume.pdf"
              className={styles.tertiaryBtn}
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}