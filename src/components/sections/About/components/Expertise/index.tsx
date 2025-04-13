"use client";
import { motion } from "framer-motion";
import { useExpertise } from "@/hooks/about";
import { ExpertiseCard } from "./ExpertiseCard";

export const Expertise = () => {
  const expertise = useExpertise();
  const yearsExperience = 5;

  return (
    <div className="space-y-6">
      {/* Minimal header with font sizes matching other components */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl sm:text-4xl font-gemola text-earth-dark mb-3">
          Technical Expertise
        </h3>
        <p className="text-base font-al text-earth-brown/80 max-w-md mx-auto">
          {yearsExperience}+ years of development experience
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {expertise.map((category, index) => (
          <ExpertiseCard
            key={category.category}
            category={category.category}
            items={category.items}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};
