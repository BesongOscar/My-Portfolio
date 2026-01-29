import Link from "next/link";
import styles from './Navbar.module.css'
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span>Sir</span>Wilde
        </Link>

        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contacts</Link>
          </li>
        </ul>

        {/* Placeholder for future navigation actions (e.g., theme toggle, mobile menu) */}
        <a
            href="/resume.pdf"
            download="Besong_Oscar_Resume.pdf"
            className={styles.downloadBtn}
          >
            <Download size={20} />
            Download Resume
          </a>
      </nav>
    </header>
  );
}
