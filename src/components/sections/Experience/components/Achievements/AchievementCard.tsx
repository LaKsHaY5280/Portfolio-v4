"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AchievementCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

export const AchievementCard = ({
  title,
  description,
  icon,
  index,
}: AchievementCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group p-6 bg-earth-dark/5 rounded-2xl backdrop-blur-sm hover:bg-earth-dark/10 
                 transition-all duration-300"
    >
      <div
        className="w-12 h-12 bg-earth-dark/10 rounded-xl flex items-center justify-center 
                   text-earth-dark mb-4 group-hover:scale-110 transition-transform"
      >
        {icon}
      </div>
      <h4 className="text-xl font-gemola text-earth-dark mb-3">{title}</h4>
      <p className="text-earth-brown/80 font-al">{description}</p>
    </motion.div>
  );
};
