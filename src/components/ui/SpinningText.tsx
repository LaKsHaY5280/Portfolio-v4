"use client";
import { motion } from "framer-motion";
import { CSSProperties, useMemo } from "react";

interface SpinningTextProps {
  text: string;
  duration?: number;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  className?: string;
  style?: CSSProperties;
}

export function SpinningText({
  text,
  duration = 20,
  reverse = false,
  fontSize = 0.875,
  radius = 65,
  className = "",
  style = {},
}: SpinningTextProps) {
  const letterPositions = useMemo(() => {
    const letters = text.split("");
    const totalLetters = letters.length;
    
    return letters.map((letter, index) => ({
      letter,
      rotation: Math.round((360 / totalLetters) * index * 1000) / 1000
    }));
  }, [text]);

  return (
    <motion.div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      style={style}
      animate={{ 
        rotate: reverse ? -360 : 360 
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {letterPositions.map(({ letter, rotation }, index) => (
        <span
          key={index}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            fontSize: `${fontSize}rem`,
            transform: `rotate(${rotation}deg) translateY(-${radius}px)`,
            transformOrigin: "center",
          }}
        >
          {letter}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </motion.div>
  );
}
