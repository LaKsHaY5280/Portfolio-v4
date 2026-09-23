"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Skill } from "@/data/skills/types";

interface MasteryRingProps {
  skill: Skill;
  index: number;
}

const MasteryRing = ({ skill, index }: MasteryRingProps) => {
  const ringRef = useRef<HTMLDivElement>(null);
  const size = 120;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const proficiency = skill.proficiency ?? 0;
  const progressOffset =
    circumference - (proficiency / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center"
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background ring */}
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#E8D9CD"
            strokeWidth={strokeWidth}
          />

          {/* Progress ring */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#BBA58F"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: progressOffset }}
            transition={{
              duration: 1.5,
              delay: 0.2 + index * 0.1,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* Skill name and percentage in the center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-gemola text-lg text-earth-dark">
            {proficiency}%
          </p>
          <p className="text-xs text-earth-brown/80 font-al text-center px-2">
            {skill.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MasteryRing;
