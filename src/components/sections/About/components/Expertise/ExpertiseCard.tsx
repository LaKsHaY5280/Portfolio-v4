"use client";
import { motion } from "framer-motion";
import { Skill } from "@/data/skills/types";

interface ExpertiseCardProps {
  category: string;
  items: Skill[];
  index: number;
}

export const ExpertiseCard = ({
  category,
  items,
  index,
}: ExpertiseCardProps) => {
  // Sort skills by proficiency for visual hierarchy
  const sortedItems = [...items].sort((a, b) => b.proficiency - a.proficiency);

  // Only show top 3 skills to reduce card size
  const topSkills = sortedItems.slice(0, 3);

  return (
    <motion.div
      className="relative p-6 rounded-xl border border-earth-dark/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        boxShadow: "0 6px 20px rgba(34, 48, 48, 0.05)",
        borderColor: "rgba(34, 48, 48, 0.15)",
        y: -3,
      }}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-earth-light/20 z-[-1] rounded-xl" />

      {/* Concise header */}
      <h3 className="text-responsive-xl font-gemola text-earth-dark mb-3">
        {category}
      </h3>

      {/* Minimal skills list */}
      <div className="space-y-4">
        {topSkills.map((item) => (
          <div key={item.name} className="group">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-responsive-sm font-al text-earth-dark font-medium">
                {item.name}
              </span>
              <span className="text-responsive-xs font-al text-earth-brown/70">
                {item.proficiency >= 85
                  ? "Expert"
                  : item.proficiency >= 75
                  ? "Advanced"
                  : "Proficient"}
              </span>
            </div>

            {/* Thinner progress bar */}
            <div className="h-1 w-full bg-earth-light/40 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-earth-sand/70 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Minimalist footer - just a single line */}
      <p className="mt-4 pt-3 border-t border-earth-dark/5 text-responsive-xs text-earth-brown/70 italic">
        {index === 0
          ? "Performance-focused web experiences"
          : "User-centric mobile applications"}
      </p>
    </motion.div>
  );
};
