"use client";
import { motion } from "framer-motion";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import { useContactContent } from "@/hooks/contact";

export const Contact = () => {
  const { title } = useContactContent();

  return (
    <section
      id="contact"
      className="container mx-auto max-w-7xl py-24 sm:py-32"
    >
      <motion.h2
        className="text-4xl font-gemola text-earth-dark text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-16 relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 blur-3xl -z-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-earth-sand/20 to-earth-sand/5 rounded-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Contact Form */}
        <div className="lg:order-2">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="lg:order-1">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
