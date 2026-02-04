'use client'
import styles from "./contact.module.css";
import Hero from "@/components/Contact/hero";
import ContactInfo from "@/components/Contact/contactInfo";
import Faq from "@/components/Contact/Faq";
import Availability from "@/components/Contact/availabilty";
import Testimonials from "@/components/Contact/testimonials";

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      {/* Contact Info */}
      <Hero/>
      <Faq/>
      <Availability/>
      <Testimonials/>
    </section>
  );
}
