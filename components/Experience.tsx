import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2>Experience & Education</h2>

      {/* EXPERIENCE */}
      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Experience</h3>

        <div className={styles.item}>
          <span className={styles.year}>2024 – Present</span>
          <h4>Self-Taught Software Developer</h4>
          <p>
            Building web and mobile applications using Next.js, React Native,
            Flutter, and WordPress. Focused on clean UI, performance, and solving
            real-world problems through hands-on projects. Experienced with
            tools like Expo, HTTPie, and PostHog.
          </p>
        </div>
      </div>

      {/* EDUCATION */}
      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Education</h3>

        <div className={styles.item}>
          <span className={styles.year}>2023 – 2025</span>
          <h4>BTech – University of Buea</h4>
          <p>
            Bachelor of Technology program with a focus on software development
            and applied computing.
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.year}>2021 – 2023</span>
          <h4>Advanced Level – PSS Douala</h4>
          <p>
            Completed Advanced Level education with a strong foundation in
            analytical thinking and problem solving.
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.year}>2014 – 2020</span>
          <h4>Ordinary Level – PSS Douala</h4>
          <p>
            Completed Ordinary Level education, building the academic foundation
            for further studies in technology.
          </p>
        </div>
      </div>
    </section>
  );
}
