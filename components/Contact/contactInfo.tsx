"use client";
import { motion, useInView } from "framer-motion";
import styles from "./contactInfo.module.css";
import { 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MessageCircle,
  Calendar,
  MapPin
} from "lucide-react";
import { useRef } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "wildeo963@gmail.com",
    username: "wildeo963@gmail.com",
    href: "mailto:wildeo963@gmail.com",
    label: "Send Email",
    color: "#7c3aed",
    isPrimary: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+237 693 377 876",
    username: "Call or WhatsApp",
    href: "tel:+237 693 377 876",
    label: "Call Me",
    color: "#10b981",
    isPrimary: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+237 693 377 876",
    username: "Chat anytime",
    href: "https://wa.me/237+237693377876",
    label: "WhatsApp",
    color: "#25D366",
    isPrimary: false,
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@BesongOscar",
    username: "BesongOscar",
    href: "https://github.com/BesongOscar",
    label: "View GitHub",
    color: "#ffffff",
    isPrimary: false,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Besong Oscar-Wilde",
    username: "Connect with me",
    href: "https://www.linkedin.com/in/besong-oscar-wilde-272a6a336/",
    label: "Connect",
    color: "#0077b5",
    isPrimary: false,
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    value: "Book a meeting",
    username: "30-min consultation",
    href: "https://calendly.com/yourusername", // Add your Calendly link
    label: "Book Now",
    color: "#3b82f6",
    isPrimary: false,
  },
];

export default function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.contactInfo} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>All Ways to Reach Me</h2>
          <p className={styles.subtitle}>
            Choose your preferred method of communication. I'm responsive across all channels.
          </p>
          
          {/* Availability Status */}
          <div className={styles.availability}>
            <span className={styles.statusDot} />
            <span>Usually responds within 24 hours</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient background */}
              <div
                className={styles.cardGradient}
                style={{
                  background: `radial-gradient(circle at top, ${method.color}15, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className={styles.iconWrapper}
                style={{
                  background: `${method.color}15`,
                  borderColor: `${method.color}40`,
                }}
              >
                <method.icon size={32} style={{ color: method.color }} />
              </div>

              {/* Content */}
              <h3 className={styles.cardTitle}>{method.title}</h3>
              <p className={styles.value}>{method.value}</p>
              <small className={styles.username}>{method.username}</small>

              {/* CTA */}
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={method.isPrimary ? styles.primary : styles.secondary}
              >
                {method.label}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Badge */}
        <motion.div
          className={styles.locationBadge}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <MapPin size={16} />
          <span>Based in Douala, Cameroon • Available for remote work worldwide</span>
        </motion.div>
      </div>
    </section>
  );
}