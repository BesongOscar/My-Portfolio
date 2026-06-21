"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "../TextReveal";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Left section */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h3
          className={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi, I&apos;m
        </motion.h3>

        {/* Premium Text Reveal */}
        <TextReveal>
          Besong Oscar.
        </TextReveal>

        <motion.h2
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Software Developer
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          I build modern, scalable web applications with <br />
          Next.js, React and clean Architecture, alongside <br />
          Cross platform mobile apps with React-Native and Flutter
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link href={"/projects"} className={styles.primaryBtn}>
            View Projects
          </Link>
          <Link href={"/contact"} className={styles.secondaryBtn}>
            Contact Me
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a
            href="https://github.com/BesongOscar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialIcon}
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/besong-oscar-wilde-272a6a336/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialIcon}
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:wildeo963@gmail.com"
            aria-label="Email"
            className={styles.socialIcon}
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* Right section */}
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/me.jpg"
          alt="Besong Oscar - Software Developer"
          width={500}
          height={500}
          className={styles.image}
          priority
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.6 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
