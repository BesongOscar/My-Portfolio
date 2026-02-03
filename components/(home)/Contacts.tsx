"use client";
import styles from "./Contact.module.css";
import { Mail, Github, Linkedin, MapPin, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactMethods = [
  {
    title: "Email",
    icon: Mail,
    value: "Wildeo963@gmail.com",
    href: "mailto:wildeo963@gmail.com",
    label: "Send Email",
    primary: true,
    color: "#ffffff",
  },
  {
    title: "GitHub",
    icon: Github,
    value: "BesongOscar",
    href: "https://github.com/BesongOscar",
    label: "View GitHub",
    primary: false,
    color: "#ffffff",
  },
  {
    title: "LinkedIn",
    icon: Linkedin,
    value: "Besong Oscar-Wilde",
    href: "https://www.linkedin.com/in/besong-oscar-wilde-272a6a336/",
    label: "Connect on LinkedIn",
    primary: false,
    color: "#fffff",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeOut
      },
    },
  };

  return (
    <section className={styles.contact} aria-labelledby="contact-heading" ref={ref}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contact-heading">Let's Work Together</h2>
          <p className={styles.subtitle}>
            I'm open to opportunities, collaborations, and interesting
            conversations. Feel free to reach out.
          </p>

          {/* Availability Indicator */}
          <div className={styles.availability}>
            <div className={styles.statusDot} />
            <span>Available for new projects</span>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div
                className={styles.iconWrapper}
                style={{
                  background: `${method.color}15`,
                  borderColor: `${method.color}40`,
                }}
              >
                <method.icon size={32} style={{ color: method.color }} />
              </div>

              <h3>{method.title}</h3>
              <p className={styles.contactValue}>{method.value}</p>

              
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={method.primary ? styles.primaryBtn : styles.secondaryBtn}
              >
                {method.label}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className={styles.additionalInfo}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className={styles.infoItem}>
            <MapPin size={20} />
            <span>Douala, Cameroon</span>
          </div>
          <div className={styles.infoItem}>
            <Clock size={20} />
            <span>WAT (GMT+1)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}