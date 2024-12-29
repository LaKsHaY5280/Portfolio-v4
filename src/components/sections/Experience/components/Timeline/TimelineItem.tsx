"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { Experience } from "@/data/experience/types";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogContainer,
  MorphingDialogClose,
  useMorphingDialog,
} from "@/components/core/morphing-dialog";
import { formatDuration, calculateGridPosition } from "../../utils";
import { useExperienceContent } from "@/hooks/experience";
import useClickOutside from "@/hooks/useClickOutside";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  total: number;
  allExperiences: Experience[];
}

export const TimelineItem = ({
  experience,
  index,
  total,
  allExperiences,
}: TimelineItemProps) => {
  const { sections } = useExperienceContent();
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const { startColumn, columnSpan } = calculateGridPosition(
    experience,
    allExperiences
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="timeline-item relative isolate w-full z-10"
      style={{
        gridArea: `${index + 1} / ${startColumn} / ${
          index + 1
        } / span ${columnSpan}`,
      }}
    >
      <MorphingDialog
        transition={{
          type: "spring",
          bounce: 0.05,
          duration: 0.25,
        }}
      >
        {({ setIsOpen }) => {
          const handleClickOutside = useCallback(() => {
            setIsOpen(false);
          }, [setIsOpen]);

          useClickOutside(dialogRef, handleClickOutside);

          return (
            <>
              <MorphingDialogTrigger className="relative cursor-pointer w-full">
                <motion.div
                  className="bg-earth-dark text-earth-light p-6 rounded-[2rem] group relative overflow-hidden w-full"
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

                {/* Timeline Dot */}
                <motion.div
                  className={`absolute ${
                    index % 2 === 0 ? "-right-2" : "-left-2"
                  } top-1/2 w-4 h-4 bg-earth-dark rounded-full border-4 border-earth-cream transform -translate-y-1/2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                />
              </MorphingDialogTrigger>

              <MorphingDialogContainer>
                <MorphingDialogContent
                  ref={dialogRef}
                  className="w-[500px] pointer-events-auto"
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

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <h5 className="text-earth-sand font-al text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-earth-sand rounded-full"></span>
                          {sections.details.responsibilities}
                        </h5>
                        <ul className="space-y-2 bg-earth-sand/5 p-4 rounded-xl">
                          {experience.responsibilities?.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-earth-sage pl-4 relative flex items-start gap-2"
                            >
                              <span className="absolute left-0 top-2 w-1 h-1 bg-earth-sand/50 rounded-full"></span>
                              <span className="leading-relaxed font-al">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Decorative gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-earth-sand/5 via-transparent to-earth-sand/5 rounded-[2rem]" />

                    <MorphingDialogClose className="text-earth-sand hover:text-earth-light transition-colors" />
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </>
          );
        }}
      </MorphingDialog>
    </motion.div>
  );
};
