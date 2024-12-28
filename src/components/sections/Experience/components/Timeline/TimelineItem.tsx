"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Experience } from "@/data/experience/types";
import { ExperienceCard } from "./ExperienceCard";
import { formatDuration } from "../../utils";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  total: number;
}

export const TimelineItem = ({
  experience,
  index,
  total,
}: TimelineItemProps) => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="timeline-item relative isolate w-full"
      style={{
        gridArea: `${total - index} / ${index * 4 + 1} / ${
          total - index
        } / span 8`,
      }}
    >
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ExperienceCard experience={experience} isVisible={isHovered} />

        <motion.div
          className="bg-earth-dark text-earth-light p-6 rounded-[2rem] group relative overflow-hidden"
          whileHover={{
            y: -5,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
        >
          {/* Content */}
          <div className="relative flex justify-between items-start gap-4">
            <div>
              <h3 className="text-xl font-al mb-1 group-hover:text-earth-sand transition-colors duration-300">
                {experience.company}
              </h3>
              <p className="text-sm text-earth-light/80 font-al transition-colors duration-300 group-hover:text-earth-light">
                {experience.role}
              </p>
            </div>
            <span className="text-lg font-al text-earth-sand transition-colors duration-300 group-hover:text-earth-light">
              {formatDuration(experience.duration)}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={`absolute ${
          index % 2 === 0 ? "-right-2" : "-left-2"
        } top-1/2 w-4 h-4 bg-earth-dark rounded-full border-4 border-earth-cream transform -translate-y-1/2`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
      />
    </motion.div>
  );
};
