"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./testimonials.module.css";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "/testimonials/sarah.jpg", // Add your images
    text: "Oscar delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and communication throughout the project was outstanding.",
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    name: "Michael Chen",
    role: "Founder, AppVenture",
    image: "/testimonials/michael.jpg",
    text: "Working with Oscar was a breeze. He transformed our mobile app idea into reality with clean code and beautiful UI. Highly recommend!",
    rating: 5,
    project: "Mobile App Development",
  },
  {
    name: "Emma Williams",
    role: "Marketing Director, BrandCo",
    image: "/testimonials/emma.jpg",
    text: "Our website redesign was completed on time and within budget. Oscar's expertise in Next.js helped us achieve lightning-fast performance.",
    rating: 5,
    project: "Website Redesign",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.testimonialsSection} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Client Testimonials</h2>
          <p className={styles.subtitle}>
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </motion.div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <Quote className={styles.quoteIcon} size={32} />

              {/* Rating */}
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={styles.testimonialText}>{testimonial.text}</p>

              {/* Project */}
              <span className={styles.project}>{testimonial.project}</span>

              {/* Author */}
              <div className={styles.author}>
                <div className={styles.avatarPlaceholder}>
                  {testimonial.name.charAt(0)}
                </div>
                {/* Replace with actual image when you have them:
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                */}
                <div className={styles.authorInfo}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>Want to be my next success story?</h3>
          <p>Let's build something amazing together</p>
          <a href="#contact-form" className={styles.ctaButton}>
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}