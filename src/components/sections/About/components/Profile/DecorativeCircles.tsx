"use client";
import { motion } from "framer-motion";
import { SpinningText } from "@/components/ui/SpinningText";

export const DecorativeCircles = () => {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 160 160"
      className="z-20 md:w-[160px] md:h-[160px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {/* Translucent Background Effect */}
      <defs>
        <radialGradient
          id="bgGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#E8D9CD" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#BBA58F" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#959D90" stopOpacity="0.55" />
        </radialGradient>
        <filter id="frost">
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 15 -8"
          />
        </filter>
        <filter id="noise" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.08" />
          </feComponentTransfer>
        </filter>
      </defs>

      {/* Frosted Glass Background */}
      <g className="opacity-90">
        <circle
          cx="80"
          cy="80"
          r="78"
          fill="url(#bgGradient)"
          filter="url(#frost)"
        />
        <circle
          cx="80"
          cy="80"
          r="78"
          fill="white"
          className="mix-blend-soft-light opacity-20"
        />
        <circle
          cx="80"
          cy="80"
          r="78"
          fill="black"
          filter="url(#noise)"
          className="mix-blend-overlay opacity-30"
        />
      </g>

      {/* Background Circle */}
      <circle
        cx="80"
        cy="80"
        r="75"
        fill="none"
        stroke="#BBA58F"
        strokeWidth="4"
        className="animate-pulse"
      />

      {/* Decorative Circle */}
      <circle
        cx="80"
        cy="80"
        r="50"
        fill="none"
        stroke="#523D35"
        strokeWidth="3"
        strokeDasharray="6 6"
        className="opacity-40"
      />

      {/* Center Logo Text */}
      <g transform="translate(80, 80)">
        {/* Background circle with subtle gradient */}
        <motion.circle
          cx="0"
          cy="0"
          r="28"
          fill="url(#logoGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="opacity-80"
        />

        {/* Border circle with dash animation */}
        <motion.circle
          cx="0"
          cy="0"
          r="28"
          stroke="#523D35"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="175"
          initial={{ strokeDashoffset: 175 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="opacity-30"
        />

        {/* LG Text */}
        <motion.text
          x="0"
          y="1"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#523D35"
          className="font-gemola text-[20px] md:text-[26px] tracking-tighter text-earth-brown/80 opacity-80"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: "backOut",
          }}
        >
          LG
        </motion.text>

        {/* Subtle shine effect */}
        <motion.circle
          cx="0"
          cy="0"
          r="28"
          stroke="url(#shineGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="opacity-10"
        />

        {/* Updated gradient definitions */}
        <defs>
          <radialGradient id="logoGradient">
            <stop offset="0%" stopColor="#EFEFE9" />
            <stop offset="40%" stopColor="#E8D9CD" />
            <stop offset="100%" stopColor="#BBA58F" stopOpacity="0.3" />
          </radialGradient>
          <linearGradient id="shineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EFEFE9" stopOpacity="0" />
            <stop offset="50%" stopColor="#EFEFE9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EFEFE9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </g>

      {/* Container for spinning text */}
      <foreignObject x="0" y="0" width="160" height="160">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]">
            <SpinningText
              text="WEB/APP DEVELOPER • DESIGNER • "
              fontSize={0.65}
              radius={60}
              className="text-earth-brown font-al text-[10px] md:text-[12px]"
            />
          </div>
        </div>
      </foreignObject>
    </motion.svg>
  );
};
