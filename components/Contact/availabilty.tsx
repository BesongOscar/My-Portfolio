"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./availability.module.css";
import { Calendar, Clock, Video, Coffee } from "lucide-react";

const timeSlots = [
  {
    day: "Monday - Friday",
    time: "9:00 AM - 6:00 PM",
    timezone: "WAT (GMT+1)",
    icon: Clock,
  },
  {
    day: "Weekend",
    time: "By Appointment",
    timezone: "Flexible timing",
    icon: Coffee,
  },
];

const meetingTypes = [
  {
    icon: Coffee,
    title: "Quick Chat",
    duration: "15 minutes",
    description: "Perfect for quick questions or initial introductions",
    color: "#10b981",
  },
  {
    icon: Video,
    title: "Discovery Call",
    duration: "30 minutes",
    description: "Discuss your project requirements and goals",
    color: "#3b82f6",
  },
  {
    icon: Calendar,
    title: "Project Planning",
    duration: "60 minutes",
    description: "Deep dive into technical requirements and timeline",
    color: "#8b5cf6",
  },
];

export default function Availability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.availabilitySection} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Let's Schedule a Call</h2>
          <p className={styles.subtitle}>
            Book a free consultation to discuss your project. No commitment required.
          </p>
        </motion.div>

        {/* Meeting Types */}
        <div className={styles.meetingTypes}>
          {meetingTypes.map((meeting, index) => (
            <motion.div
              key={meeting.title}
              className={styles.meetingCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={styles.meetingIcon}
                style={{
                  background: `${meeting.color}15`,
                  borderColor: `${meeting.color}40`,
                }}
              >
                <meeting.icon size={24} style={{ color: meeting.color }} />
              </div>
              <h3>{meeting.title}</h3>
              <span className={styles.duration}>{meeting.duration}</span>
              <p>{meeting.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Availability Times */}
        <motion.div
          className={styles.timeSlotsContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className={styles.sectionTitle}>My Availability</h3>
          <div className={styles.timeSlots}>
            {timeSlots.map((slot, index) => (
              <div key={index} className={styles.timeSlot}>
                <slot.icon size={20} className={styles.slotIcon} />
                <div className={styles.slotContent}>
                  <h4>{slot.day}</h4>
                  <p>{slot.time}</p>
                  <small>{slot.timezone}</small>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="https://calendly.com/yourusername" // Replace with your Calendly link
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookButton}
          >
            <Calendar size={20} />
            Book a Call Now
          </a>
          <p className={styles.note}>
            Or email me at <a href="mailto:wildeo963@gmail.com">wildeo963@gmail.com</a> to schedule
          </p>
        </motion.div>
      </div>
    </section>
  );
}