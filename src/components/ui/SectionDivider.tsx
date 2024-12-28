"use client";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const SectionDivider = () => {
  return (
    <div className="relative h-12 bg-earth-dark flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-divider"
      />
    </div>
  );
};

export default SectionDivider;
