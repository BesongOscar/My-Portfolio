import styles from "./Footer.module.css";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          © {new Date().getFullYear()} Besong Oscar. All rights reserved.
        </p>

        <div className={styles.links}>
          <a href="mailto:wildeo963@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>

          <a
            href="https://github.com/BesongOscar"
            target="_blank"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/besong-oscar-wilde-272a6a336/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
