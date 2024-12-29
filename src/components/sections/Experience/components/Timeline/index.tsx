"use client";
import { motion } from "framer-motion";
import { useExperience, useExperienceContent } from "@/hooks/experience";
import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  const experience = useExperience();
  const { sections } = useExperienceContent();

  return (
    <>
      {/* Global Hover Indicator */}
      <div className="flex justify-center mb-8">
        <motion.div
          className="flex items-center gap-3 bg-earth-dark/10 backdrop-blur-sm px-6 py-3 
                     rounded-full border border-earth-dark/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-earth-dark text-sm font-al">
            {sections.timeline.hoverIndicator}
          </span>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-5 h-5 text-earth-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 13l-7 7m0 0l-7-7m7 7V6"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="timeline-grid grid grid-cols-[repeat(14,1fr)] gap-y-12 p-5 min-h-[500px] relative w-full
                   rounded-3xl border border-earth-dark/10 shadow-[0_0_40px_-15px_rgba(0,0,0,0.2)] bg-earth-light/5"
      >
        {/* Base layer with blur */}
        <motion.div
          className="absolute inset-0 backdrop-blur-[4px] bg-earth-light/10 w-full rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />

        {/* Fine grid with subtle animation */}
        <motion.div
          className="absolute inset-0 w-full rounded-3xl
                     [background-image:linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
                     [background-size:30px_30px]"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            backgroundPosition: ["0px 0px", "-30px -30px"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          viewport={{ once: true }}
        />

        {/* Larger grid overlay */}
        <motion.div
          className="absolute inset-0 w-full rounded-3xl
                     [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
                     [background-size:150px_150px]"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            backgroundPosition: ["0px 0px", "-150px -150px"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          viewport={{ once: true }}
        />

        {/* Inner shadow overlay */}
        <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.05)]" />

        {experience.map((exp, index) => (
          <TimelineItem
            key={index}
            experience={exp}
            index={index}
            total={experience.length}
            allExperiences={experience}
          />
        ))}
      </div>
    </>
  );
};
