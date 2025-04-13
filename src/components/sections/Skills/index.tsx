"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useSkills, useSkillsContent } from "@/hooks/skills";
import { SkillCategory } from "@/data/skills/types";
import SkillCard from "./components/SkillCard";
import MasteryRing from "./components/MasteryRing";

const Skills = () => {
  const skills = useSkills();
  const { header, categories } = useSkillsContent();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeView, setActiveView] = useState<
    "cards" | "mastery" | "timeline"
  >("cards");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.6]);

  useEffect(() => {
    // Add event listener for the "View All Skills" button
    const handleSetFilter = (event: any) => {
      setActiveFilter(event.detail);
    };

    window.addEventListener("setSkillsFilter", handleSetFilter);

    return () => {
      window.removeEventListener("setSkillsFilter", handleSetFilter);
    };
  }, []);

  // Calculate total skills count and mastery level
  const totalSkills = skills.reduce(
    (acc, category) => acc + category.items.length,
    0
  );
  const avgMastery = Math.round(
    skills.reduce(
      (acc, category) =>
        acc +
        category.items.reduce((sum, skill) => sum + skill.proficiency, 0) /
          category.items.length,
      0
    ) / skills.length
  );

  // For recruiters: Top skills across all categories
  const topSkills = skills
    .flatMap((category) => category.items)
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, 6);

  // For peer developers: Skills grouped by mastery level
  const masteryLevels = {
    expert: skills.flatMap((category) =>
      category.items.filter((skill) => skill.proficiency >= 85)
    ),
    advanced: skills.flatMap((category) =>
      category.items.filter(
        (skill) => skill.proficiency >= 70 && skill.proficiency < 85
      )
    ),
    competent: skills.flatMap((category) =>
      category.items.filter((skill) => skill.proficiency < 70)
    ),
  };

  // Ensure competent has at least some skills (fallback if all skills are high proficiency)
  if (masteryLevels.competent.length === 0) {
    // Take some skills from advanced if competent is empty
    if (masteryLevels.advanced.length > 3) {
      // Move a few skills from advanced to competent for better distribution
      const skillsToMove = masteryLevels.advanced.slice(-5);
      masteryLevels.competent = skillsToMove;
      masteryLevels.advanced = masteryLevels.advanced.slice(0, -5);
    } else {
      // Fallback to lowest proficiency skills from the expert category
      const allSkills = skills
        .flatMap((category) => category.items)
        .sort((a, b) => a.proficiency - b.proficiency);
      masteryLevels.competent = allSkills.slice(0, 3);
    }
  }

  // For clients: Simplified skill categories with visual impact
  const clientFocusedSkills = [
    {
      name: "Frontend",
      count:
        skills.find((c) => c.category === "Frontend Development")?.items
          .length || 0,
    },
    {
      name: "Backend",
      count:
        skills.find((c) => c.category === "Backend Development")?.items
          .length || 0,
    },
    {
      name: "Mobile",
      count:
        skills.find((c) => c.category === "Mobile Development")?.items.length ||
        0,
    },
    {
      name: "DevOps",
      count:
        skills.find((c) => c.category === "DevOps & Tools")?.items.length || 0,
    },
  ];

  // Filter skills based on active filter
  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((category) => category.category === activeFilter);

  // Filter mastery levels based on active filter
  const filterMasteryLevels = (levels: any) => {
    if (activeFilter === "all") return levels;

    return {
      expert: levels.expert.filter((skill: any) =>
        skills
          .find((c) => c.category === activeFilter)
          ?.items.some((item) => item.name === skill.name)
      ),
      advanced: levels.advanced.filter((skill: any) =>
        skills
          .find((c) => c.category === activeFilter)
          ?.items.some((item) => item.name === skill.name)
      ),
      competent: levels.competent.filter((skill: any) =>
        skills
          .find((c) => c.category === activeFilter)
          ?.items.some((item) => item.name === skill.name)
      ),
    };
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-earth-cream to-earth-light -z-10" />

      <motion.div
        className="absolute inset-0 bg-[url('/patterns/grid-pattern.svg')] bg-repeat opacity-5"
        style={{ opacity: backgroundOpacity }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with skill metrics for immediate impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-earth-sand/10 text-earth-brown rounded-full text-sm font-al mb-4">
              TECHNICAL PROFICIENCY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-gemola text-earth-dark mb-4">
              {header.title}
            </h2>
            <p className="text-base sm:text-lg font-al text-earth-brown/80 max-w-2xl mx-auto">
              {header.description}
            </p>
          </div>

          {/* Key metrics strip - For recruiters and clients */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8"
          >
            {/* Metric cards */}
            <MetricCard
              value={totalSkills}
              label="Technologies"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              }
            />
            <MetricCard
              value={`${avgMastery}%`}
              label="Mastery Level"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                  <path d="m4.93 4.93 14.14 14.14" />
                  <path d="m19.07 4.93-14.14 14.14" />
                </svg>
              }
            />
            <MetricCard
              value={masteryLevels.expert.length}
              label="Expert Skills"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              }
            />
            <MetricCard
              value="5+"
              label="Years Practice"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              }
            />
          </motion.div>
        </motion.div>

        {/* View toggle - For different audience preferences */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-earth-light/50 backdrop-blur-sm p-1 rounded-xl">
            <ViewToggleButton
              active={activeView === "cards"}
              onClick={() => setActiveView("cards")}
              label="Detailed"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              }
            />
            <ViewToggleButton
              active={activeView === "mastery"}
              onClick={() => setActiveView("mastery")}
              label="Mastery"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                </svg>
              }
            />
            <ViewToggleButton
              active={activeView === "timeline"}
              onClick={() => setActiveView("timeline")}
              label="Journey"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Category Filters - For recruiters to quickly find relevant skills */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <FilterButton
            active={activeFilter === "all"}
            onClick={() => setActiveFilter("all")}
          >
            All Skills
          </FilterButton>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category.replace(" Development", "")}
            </FilterButton>
          ))}
        </div>

        {/* Different views based on audience selection */}
        {activeView === "cards" && (
          <>
            {filteredSkills.length === 0 ? (
              <div className="max-w-lg mx-auto text-center py-12">
                <h3 className="text-xl font-gemola text-earth-dark mb-4">
                  No Skills Found
                </h3>
                <p className="text-earth-brown/80 font-al mb-6">
                  No skills found for this filter category.
                </p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="px-4 py-2 bg-earth-sand/10 hover:bg-earth-sand/20 rounded-lg text-earth-brown transition-all"
                >
                  View All Skills
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Improved layout strategy */}
                {activeFilter === "all" ? (
                  // Better balanced multi-column approach using priorty-sorted categories
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pre-sort all categories */}
                    {(() => {
                      // Sort all categories by priority first
                      const sortedCategories = [...filteredSkills].sort(
                        (a, b) => {
                          const orderPriority: Record<string, number> = {
                            "Frontend Development": 1,
                            "DevOps & Tools": 2,
                            "Backend Development": 3,
                            "Programming Languages": 4,
                            "Soft Skills": 5,
                            "Mobile Development": 6,
                          };

                          const priorityA = orderPriority[a.category] || 99;
                          const priorityB = orderPriority[b.category] || 99;
                          return priorityA - priorityB;
                        }
                      );

                      // Now handle the column distribution - evens to left, odds to right for better balance
                      const leftColumnCategories = sortedCategories.filter(
                        (_, i) => i % 2 === 0
                      );
                      const rightColumnCategories = sortedCategories.filter(
                        (_, i) => i % 2 === 1
                      );

                      return (
                        <>
                          <SkillCategoryColumn
                            categories={leftColumnCategories}
                          />
                          <SkillCategoryColumn
                            categories={rightColumnCategories}
                          />
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  // Single category view - no need to balance
                  <div className="max-w-3xl mx-auto">
                    {filteredSkills.map((skillCategory, categoryIndex) => (
                      <motion.div
                        key={skillCategory.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-earth-light/20 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-earth-dark/5
                        hover:bg-earth-light/30 transition-all duration-300"
                      >
                        <h3 className="text-xl sm:text-2xl font-gemola text-earth-dark mb-4 sm:mb-6 relative">
                          {skillCategory.category}
                          <motion.div
                            className="absolute -bottom-2 left-0 h-0.5 bg-earth-sand/20"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {skillCategory.items.map((skill, index) => (
                            <SkillCard
                              key={skill.name}
                              skill={skill}
                              index={index}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </>
        )}

        {activeView === "mastery" && (
          <MasteryView masteryLevels={filterMasteryLevels(masteryLevels)} />
        )}

        {activeView === "timeline" && (
          <TimelineView skills={filteredSkills} activeFilter={activeFilter} />
        )}

        {/* Skills summary for HR/recruiters - Quick reference for core competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-earth-light/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-earth-sand/10"
        >
          <h3 className="text-xl sm:text-2xl font-gemola text-earth-dark mb-4">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative bg-earth-sand/10 rounded-lg px-3 py-1.5 text-earth-brown font-al"
              >
                <div className="flex items-center gap-2">
                  <span>{skill.name}</span>
                  <span className="text-xs bg-earth-sand/20 px-2 py-0.5 rounded-full">
                    {skill.proficiency}%
                  </span>
                </div>
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-earth-sand/30"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Single metric card - For showcasing impressive numbers (for recruiters)
const MetricCard = ({
  value,
  label,
  icon,
}: {
  value: string | number;
  label: string;
  icon: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 400 }}
    className="bg-earth-light/30 backdrop-blur-sm rounded-xl border border-earth-dark/5 p-4 flex items-center gap-4"
  >
    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-earth-sand/10 text-earth-brown">
      {icon}
    </div>
    <div>
      <p className="text-2xl sm:text-3xl font-gemola text-earth-dark">
        {value}
      </p>
      <p className="text-sm text-earth-brown/80 font-al">{label}</p>
    </div>
  </motion.div>
);

// Filter button component
const FilterButton = ({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
      active
        ? "bg-earth-sand text-earth-light font-semibold"
        : "bg-earth-light/40 text-earth-brown hover:bg-earth-light/70"
    }`}
  >
    {children}
  </button>
);

// View toggle button
const ViewToggleButton = ({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
      active
        ? "bg-earth-dark text-earth-light"
        : "text-earth-dark hover:bg-earth-light/80"
    }`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </button>
);

// Mastery view - For peer developers who appreciate craftsmanship
const MasteryView = ({ masteryLevels }: { masteryLevels: any }) => {
  // Check if any of the mastery levels have skills
  const hasExpertSkills = masteryLevels.expert.length > 0;
  const hasAdvancedSkills = masteryLevels.advanced.length > 0;
  const hasCompetentSkills = masteryLevels.competent.length > 0;

  // If all levels are empty, show a message
  if (!hasExpertSkills && !hasAdvancedSkills && !hasCompetentSkills) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <h3 className="text-xl font-gemola text-earth-dark mb-4">
          No Skills Found
        </h3>
        <p className="text-earth-brown/80 font-al mb-6">
          No skills found for this filter category in mastery view.
        </p>
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("setSkillsFilter", { detail: "all" })
            )
          }
          className="px-4 py-2 bg-earth-sand/10 hover:bg-earth-sand/20 rounded-lg text-earth-brown transition-all"
        >
          View All Skills
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Expert Skills with special visuals */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-gemola text-earth-dark text-center mb-6">
          Expertise Levels
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasExpertSkills && (
            <MasteryCategory
              title="Expert"
              skills={masteryLevels.expert}
              color="#BBA58F"
            />
          )}
          {hasAdvancedSkills && (
            <MasteryCategory
              title="Advanced"
              skills={masteryLevels.advanced}
              color="#959D90"
            />
          )}
          {hasCompetentSkills && (
            <MasteryCategory
              title="Competent"
              skills={masteryLevels.competent}
              color="#E8D9CD"
            />
          )}
        </div>
      </div>

      {/* Visual mastery rings - only show if there are expert skills */}
      {hasExpertSkills && (
        <div className="flex justify-center py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {masteryLevels.expert
              .slice(0, 6)
              .map((skill: any, index: number) => (
                <MasteryRing key={skill.name} skill={skill} index={index} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Mastery category component
const MasteryCategory = ({
  title,
  skills,
  color,
}: {
  title: string;
  skills: any[];
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-earth-light/30 backdrop-blur-sm rounded-xl p-6 border border-earth-dark/5"
    style={{ borderLeft: `4px solid ${color}` }}
  >
    <h4 className="text-lg sm:text-xl font-gemola text-earth-dark mb-4 flex items-center gap-2">
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      {title}
      <span className="text-earth-brown/60 text-sm font-al ml-auto">
        {skills.length}
      </span>
    </h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="bg-earth-dark/5 px-2 py-1 rounded text-sm text-earth-brown font-al"
        >
          {skill.name}
        </span>
      ))}
    </div>
  </motion.div>
);

// Timeline view - For clients who want to understand growth journey
const TimelineView = ({
  skills,
  activeFilter,
}: {
  skills: any[];
  activeFilter: string;
}) => {
  // Mock learning timeline data
  const timelineData = [
    { year: 2018, skills: ["HTML", "CSS", "JavaScript", "React.js"] },
    { year: 2019, skills: ["Node.js", "Express.js", "MongoDB"] },
    { year: 2020, skills: ["TypeScript", "Next.js", "PostgreSQL"] },
    { year: 2021, skills: ["Flutter", "React Native", "AWS"] },
    { year: 2022, skills: ["GSAP", "Framer Motion", "TailwindCSS", "Docker"] },
    { year: 2023, skills: ["Shadcn", "Django", "CI/CD"] },
  ];

  // Apply filtering based on the activeFilter
  const filteredTimelineData = (() => {
    if (activeFilter === "all") return timelineData;

    // Map skill categories to timeline skills (add more mappings as needed)
    const categoryToSkills: Record<string, string[]> = {
      "Frontend Development": [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "GSAP",
        "Framer Motion",
        "TailwindCSS",
        "Next.js",
        "Shadcn",
      ],
      "Backend Development": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Django",
      ],
      "Mobile Development": ["Flutter", "React Native"],
      "DevOps & Tools": ["AWS", "Docker", "CI/CD"],
      "Programming Languages": ["JavaScript", "TypeScript"],
      "Soft Skills": [], // Add any soft skills if needed
    };

    const relevantSkills = categoryToSkills[activeFilter] || [];

    // Filter timeline periods to only include those with relevant skills
    return timelineData
      .map((period) => ({
        ...period,
        skills: period.skills.filter((skill) =>
          relevantSkills.some((relevantSkill) =>
            skill.toLowerCase().includes(relevantSkill.toLowerCase())
          )
        ),
      }))
      .filter((period) => period.skills.length > 0);
  })();

  // If no matching skills for this filter
  if (filteredTimelineData.length === 0) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <h3 className="text-xl font-gemola text-earth-dark mb-4">
          No Timeline Data
        </h3>
        <p className="text-earth-brown/80 font-al mb-6">
          No timeline data available for this filter category.
        </p>
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("setSkillsFilter", { detail: "all" })
            )
          }
          className="px-4 py-2 bg-earth-sand/10 hover:bg-earth-sand/20 rounded-lg text-earth-brown transition-all"
        >
          View All Skills
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-xl sm:text-2xl font-gemola text-earth-dark text-center mb-8">
        Skill Acquisition Journey
        {activeFilter !== "all" && (
          <span className="text-earth-brown/70 text-lg block mt-1">
            Filter: {activeFilter.replace(" Development", "")}
          </span>
        )}
      </h3>

      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-earth-sand/30 transform sm:-translate-x-1/2"></div>

        {filteredTimelineData.map((period, index) => (
          <motion.div
            key={period.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col sm:flex-row items-start gap-4 mb-12 relative ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline node */}
            <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-earth-sand rounded-full transform -translate-x-1/2 sm:-translate-x-1/2 mt-1.5"></div>

            {/* Year */}
            <div className="sm:w-1/2 pl-12 sm:pl-0 sm:pr-8 sm:text-right flex-shrink-0">
              <h4 className="text-xl font-gemola text-earth-dark">
                {period.year}
              </h4>
            </div>

            {/* Content */}
            <div
              className={`sm:w-1/2 pl-12 sm:pl-8 ${
                index % 2 === 0 ? "sm:text-right sm:pr-8" : ""
              }`}
            >
              <motion.div
                className="bg-earth-light/30 backdrop-blur-sm p-4 rounded-lg border border-earth-dark/5"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h5 className="text-lg font-al text-earth-brown mb-2">
                  New Technologies
                </h5>
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "sm:justify-end" : ""
                  }`}
                >
                  {period.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-earth-sand/10 px-2 py-1 rounded text-sm text-earth-brown"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Update the SkillCategoryColumn component

const SkillCategoryColumn = ({
  categories,
}: {
  categories: SkillCategory[];
}) => {
  // Create a manually reorganized copy based on category names
  const reorderedCategories = [...categories].sort((a, b) => {
    // Custom sort function to ensure specific ordering
    const orderPriority: Record<string, number> = {
      "Frontend Development": 1,
      "DevOps & Tools": 2,
      "Backend Development": 3,
      "Programming Languages": 4,
      "Soft Skills": 5,
      "Mobile Development": 6,
    };

    // Get priority or default to a high number
    const priorityA = orderPriority[a.category] || 99;
    const priorityB = orderPriority[b.category] || 99;

    // Sort by priority
    return priorityA - priorityB;
  });


  return (
    <div className="flex flex-col gap-8">
      {reorderedCategories.map((skillCategory, categoryIndex) => (
        <motion.div
          key={skillCategory.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className="bg-earth-light/20 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-earth-dark/5
                  hover:bg-earth-light/30 transition-all duration-300 h-full"
        >
          <h3 className="text-xl sm:text-2xl font-gemola text-earth-dark mb-4 sm:mb-6 relative">
            {skillCategory.category}
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-earth-sand/20"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h3>
          <div className="grid gap-4">
            {skillCategory.items.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
