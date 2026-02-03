"use client";
import styles from "./about.module.css";
import Education from "@/components/about/education";
import Experience from "@/components/about/experience";
import Hero from "@/components/about/hero";
import Skills from "@/components/about/skills";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <Hero />
      <Skills />
      {/* Education Timeline */}
      <Education />
      {/* Experience Timeline */}
      <Experience />
    </section>
  );
}
