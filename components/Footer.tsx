"use client";
import styles from "./Footer.module.css";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Projects", href: "/Projects" },
    { label: "Contact", href: "/Contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:wildeo963@gmail.com",
    color: "#7c3aed",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/BesongOscar",
    color: "#ffffff",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/besong-oscar-wilde-272a6a336/",
    color: "#0077b5",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandName}>Besong Oscar</h3>
            <p className={styles.tagline}>
              Building digital experiences with modern web technologies
            </p>
            
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  className={styles.socialIcon}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className={styles.linksSection}>
            <h4>Legal</h4>
            <ul>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <h4>Let's Connect</h4>
            <p>Have a project in mind?</p>
            <a href="/#contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Besong Oscar. Built with{" "}
            <Heart size={14} className={styles.heartIcon} fill="currentColor" />{" "}
            using Next.js
          </p>

          <div className={styles.bottomLinks}>
            <span className={styles.status}>
              <span className={styles.statusDot} />
              Available for work
            </span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className={styles.backToTop}
        onClick={scrollToTop}
        aria-label="Back to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}