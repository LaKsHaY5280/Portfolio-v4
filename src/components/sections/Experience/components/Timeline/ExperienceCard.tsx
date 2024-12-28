"use client";
import { motion } from "framer-motion";
import { Experience } from "@/data/experience/types";
import { useExperienceContent } from "@/hooks/experience";
import { formatDuration } from "../../utils";

interface ExperienceCardProps {
  experience: Experience;
  isVisible: boolean;
}

export const ExperienceCard = ({
  experience,
  isVisible,
}: ExperienceCardProps) => {
  const { sections } = useExperienceContent();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={
        isVisible
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.8, y: 20 }
      }
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full mt-[-20px] w-[400px] pointer-events-none z-10"
    >
      <div className="relative bg-gradient-to-br from-earth-dark via-earth-dark to-earth-brown/90 backdrop-blur-lg p-6 rounded-[2rem] shadow-xl">
        {/* Corner Highlights */}
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-earth-sand/20 rounded-tr-2xl" />
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-earth-sand/20 rounded-tl-2xl" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-earth-sand/20 rounded-br-2xl" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-earth-sand/20 rounded-bl-2xl" />

        {/* Header */}
        <div className="relative mb-6">
          <div className="p-4 bg-earth-sand/5 rounded-xl border border-earth-sand/10">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-xl font-gemola text-earth-sand mb-1">
                  {experience.role}
                </h4>
                <p className="text-earth-sage/90 font-al">
                  {experience.company}
                </p>
              </div>
              <span className="px-3 py-1 bg-earth-sand/5 rounded-full text-sm text-earth-sand">
                {formatDuration(experience.duration)}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Responsibilities */}
          <div className="space-y-3">
            <h5 className="text-earth-sand font-al text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-earth-sand rounded-full"></span>
              {sections.details.responsibilities}
            </h5>
            <ul className="space-y-2 bg-earth-sand/5 p-4 rounded-xl">
              {experience.responsibilities?.slice(0, 3).map((resp, idx) => (
                <li
                  key={idx}
                  className="text-sm text-earth-sage pl-4 relative flex items-start gap-2"
                >
                  <span className="absolute left-0 top-2 w-1 h-1 bg-earth-sand/50 rounded-full"></span>
                  <span className="leading-relaxed font-al">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h5 className="text-earth-sand font-al text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-earth-sand rounded-full"></span>
              {sections.details.techStack}
            </h5>
            <div className="flex flex-wrap gap-2 p-3 bg-earth-sand/5 rounded-xl">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-earth-sand/10 rounded-full text-xs text-earth-sage font-al"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-earth-sand/5 via-transparent to-earth-sand/5 rounded-[2rem]" />
      </div>
    </motion.div>
  );
};