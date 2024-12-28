"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingShapeProps {
  delay?: number;
}

export const FloatingShape = ({ delay = 0 }: FloatingShapeProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute w-32 h-32 bg-earth-light/5 backdrop-blur-sm rounded-[2rem]"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 15,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};
