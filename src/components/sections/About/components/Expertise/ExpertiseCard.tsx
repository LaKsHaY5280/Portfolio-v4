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
  // Data is intentionally unranked — show all skills as a clean tag list
  const skillNames = items.map((item) => item.name);

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

      {/* Unranked skills list */}
      <div className="flex flex-wrap gap-2">
        {skillNames.map((name) => (
          <span
            key={name}
            className="text-responsive-sm font-al text-earth-dark bg-earth-light/40 border border-earth-dark/5 rounded-lg px-3 py-1.5"
          >
            {name}
          </span>
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
