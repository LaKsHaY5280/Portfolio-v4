"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useExperience } from "@/hooks/experience";
import { useExperienceContent } from "@/hooks/experience";
import { formatDuration } from "./utils";
import { Experience as ExperienceType } from "@/data/experience/types";
import { useAchievements } from "@/hooks/experience";

const Experience = () => {
  const experience = useExperience();
  const { header } = useExperienceContent();
  const achievements = useAchievements();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.8]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
      style={{ zIndex: 5 }}
    >
      {/* Subtle background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-earth-light to-earth-cream/30"
        style={{ opacity: backgroundOpacity, zIndex: -2 }}
      />

      <div
        className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] bg-repeat opacity-5"
        style={{ zIndex: -1 }}
      />

      <div
        className="relative max-w-full sm:max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
        style={{ zIndex: 2 }}
      >
        {/* Header with professional emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-earth-sand/10 text-earth-brown rounded-full text-xs sm:text-sm font-al mb-3 sm:mb-4">
            {header.label || "WORK EXPERIENCE"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-gemola text-earth-dark mb-3 sm:mb-4">
            {header.subtitle}
          </h2>
          <p className="text-base sm:text-lg font-al text-earth-brown/80 max-w-sm sm:max-w-lg md:max-w-2xl mx-auto">
            {header.description}
          </p>
        </motion.div>

        {/* Key metrics section - for recruiters */}
        <MetricsOverviewOptimized />

        {/* Main experience timeline */}
        <ExperienceTimeline experience={experience} />

        {/* Achievement highlights */}
        <AchievementGrid achievements={achievements} />

        {/* Skills exposure section - specifically for recruiters */}
        <SkillExposure experience={experience} />
      </div>
    </section>
  );
};

// Update the MetricsOverviewOptimized component to use metrics from content

const MetricsOverviewOptimized = () => {
  const { metrics } = useExperienceContent();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="bg-earth-light/30 backdrop-blur-sm rounded-xl border border-earth-dark/5 p-3 xs:p-4 sm:p-6 flex items-center justify-center gap-5 xs:gap-3 sm:gap-4 relative"
          whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
          style={{ zIndex: 3 }}
        >
          <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl flex items-center justify-center bg-earth-sand/10 text-earth-dark flex-shrink-0">
            <div className="transform scale-75 xs:scale-90 sm:scale-100">
              {metric.icon}
            </div>
          </div>
          <div className="flex justify-center items-center flex-col pt-5">
            <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-gemola text-earth-dark leading-none sm:leading-normal">
              {metric.value}
            </p>
            <p className="text-xs xs:text-sm sm:text-base text-earth-brown/80 font-al mt-0.5 xs:mt-1">
              {metric.label}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Timeline showcasing professional growth - appeals to all audiences
const ExperienceTimeline = ({
  experience,
}: {
  experience: ExperienceType[];
}) => {
  return (
    <div className="relative mb-16 sm:mb-20 md:mb-24">
      {/* Timeline connector */}
      <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-earth-sand/30 hidden sm:block" />

      <div className="space-y-8 sm:space-y-12">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative sm:pl-16 md:pl-20"
          >
            {/* Timeline marker */}
            <motion.div
              className="absolute left-0 top-0 hidden sm:flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: index * 0.2 + 0.3,
              }}
            >
              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-4 border-earth-cream bg-earth-sand flex items-center justify-center">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-earth-dark animate-pulse" />
              </div>
            </motion.div>

            {/* Experience card */}
            <div className="bg-earth-light/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-earth-sand/10 hover:border-earth-sand/20 transition-all shadow-sm hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-gemola text-earth-dark">
                    {exp.company}
                  </h3>
                  <p className="text-lg sm:text-xl font-al text-earth-brown mb-1 sm:mb-2">
                    {exp.role}
                  </p>
                  <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-earth-sand/10 rounded-md text-xs sm:text-sm font-al inline-block">
                    {formatDuration(exp.duration)}
                  </div>
                </div>

                {/* Visual impact indicator - for clients */}
                <div className="flex justify-center flex-col items-end">
                  <ImpactMeter
                    value={index === 0 ? 90 : index === 1 ? 85 : 80}
                    label={
                      index === 0
                        ? "High Impact"
                        : index === 1
                        ? "Significant"
                        : "Valuable"
                    }
                  />
                </div>
              </div>

              {/* Technologies - focused on recruiters' need to understand skill stack */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm uppercase font-al text-earth-dark/60 mb-1.5 sm:mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-earth-sand/10 rounded-md text-xs sm:text-sm font-al text-earth-brown"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities with metrics highlighted - for recruiters and clients */}
              <div>
                <h4 className="text-xs sm:text-sm uppercase font-al text-earth-dark/60 mb-1.5 sm:mb-2">
                  Key Achievements
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex gap-1.5 sm:gap-2 text-sm sm:text-base text-earth-brown/80 font-al"
                    >
                      <span className="text-earth-sand mt-1">•</span>
                      <span>
                        {/* Highlight metrics with regex to make numbers stand out */}
                        {resp
                          .split(/(\d+%|\d+x|\$\d+[kK]|\d+\+)/)
                          .map((part, i) => (
                            <span
                              key={i}
                              className={
                                part.match(/\d+%|\d+x|\$\d+[kK]|\d+\+/)
                                  ? "text-earth-dark font-semibold"
                                  : ""
                              }
                            >
                              {part}
                            </span>
                          ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual code quality indicator - for tech peers */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-earth-dark/5">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-earth-brown/70 font-al">
                    Code Quality
                  </span>
                  <div className="flex gap-0.5 sm:gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        className="sm:w-4 sm:h-4"
                        fill={
                          star <= (index === 0 ? 5 : index === 1 ? 5 : 4)
                            ? "#BBA58F"
                            : "none"
                        }
                        stroke="#BBA58F"
                        strokeWidth="1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Impact meter component for visual representation of project impact
const ImpactMeter = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center sm:items-end mb-2 sm:mb-0 mt-1 sm:mt-0">
      <div className="w-20 xs:w-16 sm:w-20 md:w-24 h-1.5 sm:h-2 bg-earth-light/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-earth-sand rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
      </div>
      <p className="text-2xs sm:text-xs font-al text-earth-brown/70 mt-0.5 sm:mt-1">
        {label}
      </p>
    </div>
  );
};

// Achievement grid that showcases credibility - appeals to clients
const AchievementGrid = ({ achievements }: { achievements: any[] }) => {
  return (
    <div className="mb-16 sm:mb-20 md:mb-24">
      <motion.h3
        className="text-2xl sm:text-3xl font-gemola text-earth-dark text-center mb-6 sm:mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Notable Achievements
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-earth-light/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-earth-sand/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px rgba(82, 61, 53, 0.07)",
              borderColor: "rgba(187, 165, 143, 0.3)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-earth-sand/10 flex items-center justify-center text-earth-brown mb-3 sm:mb-4">
              {achievement.icon}
            </div>
            <h4 className="text-lg sm:text-xl font-gemola text-earth-dark mb-1.5 sm:mb-2">
              {achievement.title}
            </h4>
            <p className="text-sm sm:text-base text-earth-brown/80 font-al">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Update the SkillExposure component to use content from experienceContent

// Technical skill exposure - specifically designed for recruiters
const SkillExposure = ({ experience }: { experience: ExperienceType[] }) => {
  // Get technical proficiency and summary from content file
  const { technicalProficiency, technicalSummary } = useExperienceContent();

  // Extract and count all unique technologies
  const techCount: { [key: string]: number } = {};

  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => {
      techCount[tech] = (techCount[tech] || 0) + 1;
    });
  });

  // Sort by frequency
  const sortedTech = Object.entries(techCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl sm:text-3xl font-gemola text-earth-dark text-center mb-6 sm:mb-10">
        {technicalProficiency?.title || "Technical Proficiency"}
      </h3>

      <div className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-earth-light/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-earth-sand/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {sortedTech.slice(0, 6).map(([tech, count], index) => (
            <motion.div
              key={tech}
              className="group"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                <span className="text-sm sm:text-base text-earth-dark font-al font-medium">
                  {tech}
                </span>
                <span className="text-2xs sm:text-xs text-earth-brown/70 font-al">
                  {count} {count === 1 ? "project" : "projects"}
                </span>
              </div>

              <div className="h-1.5 sm:h-2 w-full bg-earth-light/40 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-earth-sand rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${Math.min(
                      (count / experience.length) * 100,
                      100
                    )}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise summary - meaningful for all audiences */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-earth-dark/5">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:min-w-10 sm:h-10 rounded-full bg-earth-sand/20 flex items-center justify-center text-earth-brown/80 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-gemola text-earth-dark mb-1.5 sm:mb-2">
                {technicalSummary?.title || "Technical Summary"}
              </h4>
              <p className="text-sm sm:text-base text-earth-brown/80 font-al">
                {technicalSummary?.description ||
                  `Specialized in modern web development with ${sortedTech[0]?.[0]} and ${sortedTech[1]?.[0]}, with additional expertise in mobile application development. Consistently delivers high-quality, scalable solutions with a focus on performance and user experience.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;