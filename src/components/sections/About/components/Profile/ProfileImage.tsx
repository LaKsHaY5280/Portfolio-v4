"use client";
import { lakshayGoyal } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProfileImage = () => (
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 300 400"
    preserveAspectRatio="xMidYMid meet"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="relative z-10"
  >
    {/* Background Rectangle */}
    <rect
      x="25"
      y="25"
      width="250"
      height="350"
      rx="12"
      fill="#959D90"
      className="opacity-10"
    />

    <foreignObject x="25" y="25" width="250" height="350">
      <div className="w-full h-full relative">
        <Image
          src={lakshayGoyal}
          alt="Lakshay Goyal"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(215deg, 
              rgba(34, 48, 48, 0.15),
              rgba(82, 61, 53, 0.1),
              rgba(149, 157, 144, 0.15)
            )`,
            backdropFilter: "contrast(1.05) brightness(0.98)",
            mixBlendMode: "color-burn",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              circle at 70% 30%,
              rgba(232, 217, 205, 0.08),
              transparent 60%
            )`,
            mixBlendMode: "soft-light",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.02,
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </foreignObject>

    {/* Corner Triangles */}
    {/* Top Left Corner */}
    <motion.path
      d="M20 20L45 20L20 45Z"
      fill="#959D90"
      className="opacity-80"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    />

    {/* Top Right Corner */}
    <motion.path
      d="M255 20L280 20L280 45Z"
      fill="#959D90"
      className="opacity-80"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    />

    {/* Bottom Left Corner */}
    <motion.path
      d="M20 355L20 380L45 380Z"
      fill="#959D90"
      className="opacity-80"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    />

    {/* Bottom Right Corner */}
    <motion.path
      d="M280 355L280 380L255 380Z"
      fill="#959D90"
      className="opacity-10"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    />
  </motion.svg>
);
