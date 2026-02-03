import styles from "./Resume.module.css";
import { Download } from "lucide-react";

/**
 * Resume component
 * Section with resume/CV download functionality
 */
export default function Resume() {
  return (
    <section className={styles.resume} aria-labelledby="resume-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="resume-heading">Download My Resume</h2>
          <p>
            Interested in learning more about my experience and qualifications?
            Download my resume to see my complete professional background.
          </p>
          <a
            href="/resume.pdf"
            download="Besong_Oscar_Resume.pdf"
            className={styles.downloadBtn}
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
