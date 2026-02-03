import { motion } from "framer-motion";
import styles from "./contactInfo.module.css";
import { Linkedin, Github, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
        >
          I’m open to opportunities, collaborations, and interesting
          conversations. Feel free to reach out.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
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
        </motion.div>
      </motion.div>
    </>
  );
}
