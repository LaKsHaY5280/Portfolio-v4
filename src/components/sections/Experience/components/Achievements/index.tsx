"use client";
import { motion } from "framer-motion";
import { useAchievements, useExperienceContent } from "@/hooks/experience";
import { AchievementCard } from "./AchievementCard";

export const Achievements = () => {
  const achievements = useAchievements();
  const { sections } = useExperienceContent();

  return (
    <div className="mt-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-gemola text-earth-dark text-center mb-12"
      >
        {sections.achievements.title}
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} index={index} />
        ))}
      </div>
    </div>
  );
};
