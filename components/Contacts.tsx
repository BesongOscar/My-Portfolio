import styles from "./Contact.module.css";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.container}>
        <h2 id="contact-heading">Get In Touch</h2>
        <p>
          I’m open to opportunities, collaborations, and interesting
          conversations. Feel free to reach out.
        </p>

        <div className={styles.actions}>
          <div className={styles.card}>
            <h2>Email</h2>
            <Mail size={50} className={styles.icon} />
            <p>Wildeo963@gmail.com</p>
            <a
              href="mailto:wildeo963@gmail.com"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Email Me
            </a>
          </div>

          <div className={styles.card}>
            <h2>GitHub</h2>
            <Github size={50} className={styles.icon} />
            <p>Besong Oscar</p>
            <a
              href="https://github.com/BesongOscar"
              target="_blank"
              className={styles.secondary}
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className={styles.card}>
            <h2>LinkedIn</h2>
            <Linkedin size={50} className={styles.icon} />
            <p>Besong Oscar-Wilde</p>
            <a
              href="https://www.linkedin.com/in/besong-oscar-wilde-272a6a336/"
              target="_blank"
              className={styles.secondary}
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
