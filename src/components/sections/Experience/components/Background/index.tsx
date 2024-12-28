"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingShape } from "./FloatingShape";

export const TimelineBackground = () => {
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    controls.start({
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [controls]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Shapes */}
      {[...Array(6)].map((_, i) => (
        <FloatingShape key={i} delay={i * 2} />
      ))}

      {/* Animated Wave Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={i}
            d={`M0 ${150 + i * 100} C 200 ${100 + i * 80}, 400 ${
              200 + i * 60
            }, 600 ${150 + i * 70}`}
            stroke="rgba(82, 61, 53, 0.3)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={controls}
          />
        ))}
      </svg>

      {/* Dynamic Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-earth-sand/5 via-transparent to-earth-light/10"
        style={{
          filter: "blur(80px)",
        }}
      />
    </div>
  );
};
