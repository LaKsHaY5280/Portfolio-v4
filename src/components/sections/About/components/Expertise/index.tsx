"use client";
import { motion } from "framer-motion";
import { useExpertise } from "@/hooks/about";
import { ExpertiseCard } from "./ExpertiseCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Expertise = () => {
  const expertise = useExpertise();

  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-12">
      <h3 className="text-responsive-2xl sm:text-responsive-3xl font-gemola text-earth-dark text-center mb-6 sm:mb-8">
        Technical Expertise
      </h3>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {expertise.map((category, index) => (
          <motion.div key={index} variants={itemVariants} className="w-full">
            <ExpertiseCard
              category={category.category}
              items={category.items}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
