"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import styles from "./hero.module.css";
import { 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Github,
  Linkedin,
  MapPin,
  Phone
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "wildeo963@gmail.com",
    href: "mailto:wildeo963@gmail.com",
    color: "#7c3aed",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+237 693 377 876", // Add your phone
    href: "tel:+237893377876",
    color: "#10b981",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Douala, Cameroon",
    href: null,
    color: "#3b82f6",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/BesongOscar",
    color: "#ffffff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/besong-oscar-wilde-272a6a336/",
    color: "#0077b5",
  },
];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormState("loading");
    
    // Simulate API call - Replace with your actual form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormState("idle"), 5000);
    } catch (error) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  return (
    <section className={styles.contactSection} ref={ref}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Let's Connect</h1>
        <p className={styles.subtitle}>
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>
      </motion.div>

      <div className={styles.contentWrapper}>
        {/* Contact Info Sidebar */}
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>Get in Touch</h2>
          <p className={styles.infoText}>
            Feel free to reach out through any of these channels. I typically respond within 24 hours.
          </p>

          {/* Contact Methods */}
          <div className={styles.methods}>
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                className={styles.methodCard}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <div 
                  className={styles.methodIcon}
                  style={{ 
                    background: `${method.color}15`,
                    borderColor: `${method.color}40`
                  }}
                >
                  <method.icon size={20} style={{ color: method.color }} />
                </div>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>{method.label}</span>
                  {method.href ? (
                    <a href={method.href} className={styles.methodValue}>
                      {method.value}
                    </a>
                  ) : (
                    <span className={styles.methodValue}>{method.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className={styles.socialSection}>
            <h3>Follow Me</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className={styles.formContainer}
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? styles.error : ""}
                disabled={formState === "loading"}
              />
              {errors.name && (
                <span className={styles.errorMessage}>
                  <AlertCircle size={14} />
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.error : ""}
                disabled={formState === "loading"}
              />
              {errors.email && (
                <span className={styles.errorMessage}>
                  <AlertCircle size={14} />
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? styles.error : ""}
                disabled={formState === "loading"}
              />
              {errors.message && (
                <span className={styles.errorMessage}>
                  <AlertCircle size={14} />
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={formState === "loading"}
            >
              {formState === "loading" ? (
                <>
                  <Loader2 size={18} className={styles.spinner} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {formState === "success" && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={18} />
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {formState === "error" && (
              <motion.div
                className={styles.errorMessageBox}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={18} />
                Something went wrong. Please try again.
              </motion.div>
            )}

            {/* Privacy Note */}
            <p className={styles.privacyNote}>
              🔒 Your information is secure and will never be shared.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
