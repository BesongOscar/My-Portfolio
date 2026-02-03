'use client'
import styles from "./contact.module.css";
import Hero from "@/components/Contact/hero";
import ContactInfo from "@/components/Contact/contactInfo";

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      {/* Contact Info */}
      <Hero/>
      <ContactInfo/>
    </section>
  );
}
