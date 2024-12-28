"use client";
import { motion } from "framer-motion";

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

    {/* Profile Placeholder */}
    <path
      d="M150 200c-33.137 0-60-26.863-60-60s26.863-60 60-60 60 26.863 60 60-26.863 60-60 60zm0 40c40.077 0 120 20.039 120 60-.744 39.961-79.923 60-120 60s-119.256-20.039-120-60c-.744-39.961 79.923-60 120-60z"
      fill="#959D90"
      className="opacity-40"
    />

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
