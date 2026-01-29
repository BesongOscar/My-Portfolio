import styles from "./About.module.css";

/**
 * About component
 * Brief bio section introducing the developer's background and expertise
 */
export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-heading">
      <div className={styles.container}>
        <h2 id="about-heading">About Me</h2>
        <div className={styles.content}>
          <p>
            I'm a passionate software developer with expertise in building
            modern web and mobile applications. With a strong foundation in
            frontend technologies like Next.js and React, I create seamless
            user experiences that are both functional and visually appealing.
          </p>
          <p>
            My journey in software development has equipped me with skills
            across the full stack, from crafting responsive interfaces to
            building robust backend systems. I'm constantly learning and
            adapting to new technologies to deliver innovative solutions.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new frameworks, contributing
            to open-source projects, and sharing knowledge with the developer
            community.
          </p>
        </div>
      </div>
    </section>
  );
}
