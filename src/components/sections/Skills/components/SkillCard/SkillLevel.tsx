"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SkillLevelProps {
  level: number;
  isHovered: boolean;
}

const SkillLevel = ({ level, isHovered }: SkillLevelProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered && progressRef.current) {
      gsap.to(progressRef.current, {
        keyframes: [
          { boxShadow: "0 0 10px rgba(187, 165, 143, 0.4)" },
          { boxShadow: "0 0 15px rgba(187, 165, 143, 0.6)" },
          { boxShadow: "0 0 10px rgba(187, 165, 143, 0.4)" },
        ],
        duration: 1.5,
        repeat: -1,
      });
    }
  }, [isHovered]);

  return (
    <div className="h-1.5 bg-earth-dark/10 rounded-full overflow-hidden relative">
      <motion.div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-earth-sand/40 to-earth-sand/20"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-earth-sand/30 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
};

export default SkillLevel;
