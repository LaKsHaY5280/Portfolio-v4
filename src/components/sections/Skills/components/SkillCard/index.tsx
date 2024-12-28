"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Skill } from "@/data/skills/types";
import SkillLevel from "./SkillLevel";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative group rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex flex-col gap-2 p-4 bg-earth-dark/5 rounded-xl border border-earth-dark/10
                   hover:bg-earth-dark/10 transition-all duration-300 relative overflow-hidden"
        whileHover={{
          y: -4,
          boxShadow: "0 10px 30px -10px rgba(34, 48, 48, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Magic Card Effect - Gradient Border */}
        <motion.div
          className="absolute inset-px rounded-[11px] pointer-events-none"
          style={{
            background: `linear-gradient(130deg, rgba(187, 165, 143, 0) 50%, rgba(187, 165, 143, 0.3))`,
            opacity: 0,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Content */}
        <div className="flex items-center justify-between relative">
          <motion.span
            className="font-al text-earth-dark/90 group-hover:text-earth-dark transition-colors"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {skill.name}
          </motion.span>
          <motion.span
            className="text-sm text-earth-dark/60 group-hover:text-earth-dark/80 transition-colors font-al"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {skill.proficiency}%
          </motion.span>
        </div>

        {/* Progress Bar */}
        <SkillLevel level={skill.proficiency} isHovered={isHovered} />
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
