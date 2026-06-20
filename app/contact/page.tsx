'use client'
import styles from "./contact.module.css";
import Hero from "@/components/Contact/hero";
import Faq from "@/components/Contact/Faq";
import Availability from "@/components/Contact/availabilty";


export default function ContactPage() {
  return (
    <section className={styles.contact}>
      {/* Contact Info */}
      <Hero/>
      <Faq/>
      <Availability/>
    </section>
  );
}
