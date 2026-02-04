"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import styles from './Faq.module.css';
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer: "I specialize in web and mobile application development, including e-commerce platforms, business websites, mobile apps (React Native & Flutter), and custom web applications. I work on projects ranging from MVPs to full-scale applications.",
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Absolutely! I work with clients worldwide and am experienced in remote collaboration. I'm comfortable with various time zones and use tools like Zoom, Slack, and project management platforms to ensure smooth communication.",
  },
  {
    question: "What's your development process?",
    answer: "My process includes: 1) Discovery call to understand your needs, 2) Detailed proposal with timeline and pricing, 3) Design mockups and approval, 4) Development with regular updates, 5) Testing and quality assurance, 6) Deployment and training, 7) Ongoing support and maintenance.",
  },
  {
    question: "How do you handle pricing?",
    answer: "Pricing varies based on project scope, complexity, and timeline. I offer both fixed-price projects and hourly rates. After our initial discussion, I'll provide a detailed quote tailored to your specific needs and budget.",
  },
  {
    question: "What technologies do you work with?",
    answer: "I primarily work with Next.js, React, React Native, Flutter, Node.js, and MongoDB. I also have experience with WordPress, various CSS frameworks, and modern deployment platforms like Vercel and AWS.",
  },
  {
    question: "Can you help with an existing project?",
    answer: "Definitely! I'm happy to jump into existing projects for bug fixes, feature additions, optimization, or complete redesigns. I can work with various codebases and technologies.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Find answers to common questions. Don't see yours? Feel free to ask!
          </p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                className={`${styles.faqQuestion} ${openIndex === index ? styles.active : ""}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Send me a message!</p>
          <a href="#contact-form" className={styles.ctaButton}>
            Ask Your Question
          </a>
        </motion.div>
      </div>
    </section>
  );
}