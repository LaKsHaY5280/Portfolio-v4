"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useSkills, useSkillsContent } from "@/hooks/skills";
import { SkillCategory, MasteryLevel } from "@/data/skills/types";
import SkillCard from "./components/SkillCard";
import MasteryRing from "./components/MasteryRing";

const Skills = () => {
  const skills = useSkills();
  const {
    header,
    categories,
    metrics,
    metricValues,
    viewOptions,
    masteryLevels: masteryLevelConfig = [],
    categoryPriority,
    timeline: timelineConfig,
    coreCompetencies,
    expertiseLevels,
    emptyState,
    filterMessages,
  } = useSkillsContent();
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
  const avgMastery = skills.length
    ? Math.round(
        skills.reduce(
          (acc, category) =>
            acc +
            category.items.reduce(
              (sum, skill) => sum + (skill.proficiency ?? 0),
              0
            ) /
              Math.max(category.items.length, 1),
          0
        ) / skills.length
      )
    : 0;

  // For recruiters: Top skills across all categories
  const topSkills = skills
    .flatMap((category) => category.items)
    .sort((a, b) => (b.proficiency ?? 0) - (a.proficiency ?? 0))
    .slice(0, 6);
  // For peer developers: Skills grouped by mastery level with enhanced algorithm
  const calculateMasteryScore = (skill: any, categoryName: string) => {
    // Get all skills in this category to determine relative ranking
    const categorySkills =
      skills.find((cat) => cat.category === categoryName)?.items || [];
    const categoryRank =
      categorySkills
        .sort((a, b) => (b.proficiency ?? 0) - (a.proficiency ?? 0))
        .findIndex((s) => s.name === skill.name) + 1;

    // Calculate relative rank score (higher for better position in category)
    const rankScore = categorySkills.length
      ? (1 - categoryRank / categorySkills.length) * 20
      : 0;

    // Factor in category importance from priority config (lower number = higher priority)
    const categoryPriorityValue = categoryPriority[categoryName] || 99;
    const categoryImportance = 10 - Math.min(categoryPriorityValue, 9); // Scale to 1-10 score

    // Check if skill is in timeline data to estimate experience duration
    const timelineEntries = timelineConfig.data || [];
    const firstMentionYear =
      timelineEntries.find((entry) => entry.skills.includes(skill.name))
        ?.year || null;

    // Calculate experience score based on first mention (more points for older skills)
    const currentYear = new Date().getFullYear();
    const experienceScore = firstMentionYear
      ? Math.min((currentYear - firstMentionYear) * 2, 15)
      : 0;

    // Calculate the component scores for better transparency
    const proficiencyScore = (skill.proficiency ?? 0) * 0.65;
    const rankFactor = rankScore * 0.15;
    const importanceFactor = categoryImportance * 0.1;
    const experienceFactor = experienceScore * 0.1;

    // Calculate the final weighted score
    return {
      ...skill,
      category: categoryName,
      masteryScore:
        proficiencyScore + rankFactor + importanceFactor + experienceFactor,
      // Add additional metadata for visualization and tooltips
      masteryFactors: {
        proficiencyScore,
        rankFactor,
        importanceFactor,
        experienceFactor,
        categoryRank,
        firstUsedYear: firstMentionYear,
        experienceYears: firstMentionYear ? currentYear - firstMentionYear : 0,
      },
    };
  };

  // Process all skills with the enhanced algorithm
  const processedSkills = skills
    .flatMap((category) =>
      category.items.map((skill) =>
        calculateMasteryScore(skill, category.category)
      )
    )
    .sort((a, b) => b.masteryScore - a.masteryScore);
  // Determine adaptive thresholds based on distribution, ensuring we have expert skills
  const totalSkillCount = processedSkills.length;
  // Use a more generous approach to ensure top skills make it into expert category
  // Get the score of a skill in approximately the top 15% (reduced from 20%)
  const topSkillIndex = Math.min(3, Math.floor(totalSkillCount * 0.15));
  // Ensure we get a reasonable threshold even with small datasets
  const topSkillScore = processedSkills[topSkillIndex]?.masteryScore || 80;

  const expertThreshold = Math.min(
    (masteryLevelConfig[0]?.threshold ?? 85) * 0.85, // More reduction from base config (was 0.9)
    topSkillScore - 1 // Slightly lower than top skill score to ensure inclusion
  );
  // Advanced threshold is positioned to create a good distribution between expert and competent
  const advancedThreshold = Math.min(
    masteryLevelConfig[1]?.threshold ?? 70, // Use the original threshold
    processedSkills[Math.floor(totalSkillCount * 0.4)]?.masteryScore || 70 // Top 40% (was 50%)
  );
  // Ensure balanced distribution across categories with improved algorithm
  const getBalancedSkills = (
    skills: any[],
    maxPerCategory = 3,
    ensureMinResults = 3
  ) => {
    const categories = {} as Record<string, any[]>;
    const result = [];

    // Sort input skills by masteryScore to ensure highest skills are prioritized
    const sortedSkills = [...skills].sort(
      (a, b) => b.masteryScore - a.masteryScore
    );

    // First pass: distribute top skills from each category
    for (const skill of sortedSkills) {
      const category = skill.category;
      if (!categories[category]) categories[category] = [];

      if (categories[category].length < maxPerCategory) {
        categories[category].push(skill);
        result.push(skill);
      }
    }

    // Second pass: add remaining highest-scoring skills regardless of category
    // but maintain the sorted order for best skills first
    for (const skill of sortedSkills) {
      if (!result.includes(skill)) {
        result.push(skill);
      }

      // Ensure we have a good number of skills but not too many
      // Adjusted to be slightly more permissive while keeping result set reasonable
      const targetMaxSize = Math.max(
        ensureMinResults,
        Math.min(skills.length, Math.ceil(totalSkillCount * 0.35)) // Increased from 0.3
      );

      if (result.length >= targetMaxSize) break;
    }

    // Ensure we have at least some results if available
    if (result.length === 0 && skills.length > 0) {
      return sortedSkills.slice(0, Math.min(ensureMinResults, skills.length));
    }

    return result;
  };
  // Create the mastery levels with balanced distribution
  // Ensure we have at least some expert skills by forcing the top skills into expert level
  const forcedExpertSkills =
    processedSkills.length > 0
      ? processedSkills.slice(0, Math.max(2, Math.ceil(totalSkillCount * 0.1)))
      : [];

  // When mastery level config is empty (rankings removed from data),
  // skip bucketing entirely and keep all levels empty.
  const masteryLevels = (() => {
    if (masteryLevelConfig.length === 0) {
      return { expert: [], advanced: [], competent: [] };
    }

    return {
      expert: getBalancedSkills(
        // Force the top N skills to be expert AND include skills that meet the threshold
        [
          ...forcedExpertSkills,
          ...processedSkills.filter(
            (skill) =>
              skill.masteryScore >= expertThreshold &&
              !forcedExpertSkills.includes(skill)
          ),
        ],
        4, // Increased from 3 to show more expert skills
        3 // Minimum of 3 expert skills if available
      ),
      advanced: getBalancedSkills(
        processedSkills.filter(
          (skill) =>
            skill.masteryScore >= advancedThreshold &&
            skill.masteryScore < expertThreshold &&
            !forcedExpertSkills.includes(skill) // Exclude forced expert skills
        ),
        4 // Increased from 3
      ),
      competent: getBalancedSkills(
        processedSkills.filter(
          (skill) =>
            skill.masteryScore < advancedThreshold &&
            !forcedExpertSkills.includes(skill) // Exclude forced expert skills
        ),
        4 // Increased from 3
      ),
    };
  })();
  // Ensure each level has at least some skills for a balanced presentation
  // First check expert level
  if (
    masteryLevelConfig.length > 0 &&
    masteryLevels.expert.length === 0 &&
    processedSkills.length > 0
  ) {
    // Force the top 2-3 skills to be expert level if needed
    masteryLevels.expert = processedSkills.slice(
      0,
      Math.min(3, processedSkills.length)
    );
  }

  // Then check advanced level
  if (
    masteryLevelConfig.length > 0 &&
    masteryLevels.advanced.length === 0 &&
    processedSkills.length > 3
  ) {
    // Take middle skills for advanced if available
    const middleStart = Math.min(masteryLevels.expert.length, 3);
    const middleCount = Math.min(3, processedSkills.length - middleStart);
    masteryLevels.advanced = processedSkills.slice(
      middleStart,
      middleStart + middleCount
    );
  }

  // Finally, check competent level
  if (masteryLevelConfig.length > 0 && masteryLevels.competent.length === 0) {
    // Take lowest skills from advanced if available or use lowest skills
    if (masteryLevels.advanced.length > 4) {
      const skillsToMove = masteryLevels.advanced.slice(-3);
      masteryLevels.competent = skillsToMove;
      masteryLevels.advanced = masteryLevels.advanced.slice(0, -3);
    } else if (
      processedSkills.length >
      masteryLevels.expert.length + masteryLevels.advanced.length
    ) {
      // Fallback to lowest proficiency skills
      const allSkills = [...processedSkills].sort(
        (a, b) => a.masteryScore - b.masteryScore
      );
      // Take skills not already in expert/advanced
      const alreadyUsed = [
        ...masteryLevels.expert,
        ...masteryLevels.advanced,
      ].map((s) => s.name);
      masteryLevels.competent = allSkills
        .filter((skill) => !alreadyUsed.includes(skill.name))
        .slice(0, 3);
    }
  }

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
              {header.label}
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
              value={
                metricValues.technologies === null
                  ? totalSkills
                  : metricValues.technologies
              }
              label={metrics.technologies.label}
              icon={metrics.technologies.icon}
            />
            <MetricCard
              value={
                metricValues.masteryLevel === null
                  ? `${avgMastery}%`
                  : `${metricValues.masteryLevel}%`
              }
              label={metrics.masteryLevel.label}
              icon={metrics.masteryLevel.icon}
            />
            <MetricCard
              value={
                metricValues.expertSkills === null
                  ? masteryLevels.expert.length
                  : metricValues.expertSkills
              }
              label={metrics.expertSkills.label}
              icon={metrics.expertSkills.icon}
            />
            <MetricCard
              value={metricValues.yearsPractice}
              label={metrics.yearsPractice.label}
              icon={metrics.yearsPractice.icon}
            />
          </motion.div>
        </motion.div>

        {/* View toggle - For different audience preferences */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-earth-light/50 backdrop-blur-sm p-1 rounded-xl">
            {viewOptions.map((option) => (
              <ViewToggleButton
                key={option.id}
                active={activeView === option.id}
                onClick={() => setActiveView(option.id)}
                label={option.label}
                icon={option.icon}
              />
            ))}
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
                  {emptyState.title}
                </h3>
                <p className="text-earth-brown/80 font-al mb-6">
                  {emptyState.description}
                </p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="px-4 py-2 bg-earth-sand/10 hover:bg-earth-sand/20 rounded-lg text-earth-brown transition-all"
                >
                  {emptyState.buttonText}
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
                          const priorityA = categoryPriority[a.category] || 99;
                          const priorityB = categoryPriority[b.category] || 99;
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
          <MasteryView
            masteryLevels={filterMasteryLevels(masteryLevels)}
            masteryLevelConfig={masteryLevelConfig}
            expertiseLevels={expertiseLevels}
            noDataMessage={filterMessages.masteryNoData}
          />
        )}

        {activeView === "timeline" && (
          <TimelineView
            skills={filteredSkills}
            activeFilter={activeFilter}
            timelineConfig={timelineConfig}
            noDataMessage={filterMessages.timelineNoData}
          />
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
            {coreCompetencies.title}
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
                  {skill.proficiency !== undefined && (
                    <span className="text-xs bg-earth-sand/20 px-2 py-0.5 rounded-full">
                      {skill.proficiency}%
                    </span>
                  )}
                </div>
                {skill.proficiency !== undefined && (
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-earth-sand/30"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                )}
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
    className={`px-4 py-1.5 rounded-full text-sm font-al transition-all duration-200 ${
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
    className={`px-3 py-1.5 rounded-lg text-sm font-al transition-all duration-200 flex items-center gap-2 ${
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
const MasteryView = ({
  masteryLevels,
  masteryLevelConfig,
  expertiseLevels,
  noDataMessage,
}: {
  masteryLevels: any;
  masteryLevelConfig: MasteryLevel[];
  expertiseLevels: { title: string };
  noDataMessage: { title: string; description: string; buttonText: string };
}) => {
  // Check if any of the mastery levels have skills
  const hasExpertSkills = masteryLevels.expert.length > 0;
  const hasAdvancedSkills = masteryLevels.advanced.length > 0;
  const hasCompetentSkills = masteryLevels.competent.length > 0;

  // If all levels are empty, show a message
  if (!hasExpertSkills && !hasAdvancedSkills && !hasCompetentSkills) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <h3 className="text-xl font-gemola text-earth-dark mb-4">
          {noDataMessage.title}
        </h3>
        <p className="text-earth-brown/80 font-al mb-6">
          {noDataMessage.description}
        </p>
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("setSkillsFilter", { detail: "all" })
            )
          }
          className="px-4 py-2 bg-earth-sand/10 hover:bg-earth-sand/20 rounded-lg text-earth-brown transition-all"
        >
          {noDataMessage.buttonText}
        </button>
      </div>
    );
  }
  return (
    <div className="space-y-12">
      {/* Expert Skills with special visuals */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-gemola text-earth-dark text-center mb-6">
          {expertiseLevels.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasExpertSkills && masteryLevelConfig[0] && (
            <MasteryCategory
              title={masteryLevelConfig[0].title}
              skills={masteryLevels.expert}
              color={masteryLevelConfig[0].color}
            />
          )}
          {hasAdvancedSkills && masteryLevelConfig[1] && (
            <MasteryCategory
              title={masteryLevelConfig[1].title}
              skills={masteryLevels.advanced}
              color={masteryLevelConfig[1].color}
            />
          )}
          {hasCompetentSkills && masteryLevelConfig[2] && (
            <MasteryCategory
              title={masteryLevelConfig[2].title}
              skills={masteryLevels.competent}
              color={masteryLevelConfig[2].color}
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

// Mastery category component with enhanced information display
const MasteryCategory = ({
  title,
  skills,
  color,
}: {
  title: string;
  skills: any[];
  color: string;
}) => {
  // Group skills by category for better organization
  const skillsByCategory: Record<string, any[]> = {};
  skills.forEach((skill) => {
    const category = skill.category || "Other";
    if (!skillsByCategory[category]) {
      skillsByCategory[category] = [];
    }
    skillsByCategory[category].push(skill);
  });

  // Sort categories by priority
  const sortedCategories = Object.keys(skillsByCategory).sort();

  return (
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
      {/* Group skills by category for better organization */}
      {sortedCategories.map((category) => (
        <div key={category} className="mb-4 last:mb-0">
          <p className="text-xs text-earth-brown/50 mb-2 uppercase tracking-wider">
            {category.replace(" Development", "")}
          </p>
          <div className="flex flex-wrap gap-2">
            {skillsByCategory[category].map((skill) => {
              // Calculate opacity based on masteryScore to create visual hierarchy
              const opacity = skill.masteryScore
                ? Math.min(0.9, Math.max(0.5, skill.masteryScore / 100))
                : 0.7;

              return (
                <motion.span
                  key={skill.name}
                  className="bg-earth-dark/5 px-2 py-1 rounded text-sm text-earth-brown font-al flex items-center gap-1 group relative"
                  style={{
                    backgroundColor: `rgba(34, 48, 48, ${opacity * 0.1})`,
                  }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {skill.name}
                  <div className="flex items-center gap-1">
                    {skill.masteryScore !== undefined &&
                      skill.proficiency !== undefined && (
                        <span className="text-2xs bg-earth-sand/20 px-1.5 py-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity">
                          {Math.round(skill.proficiency)}%
                        </span>
                      )}{" "}
                    {/* {skill.masteryFactors?.experienceYears &&
                      skill.masteryFactors.experienceYears > 0 && (
                        <span className="text-2xs bg-earth-light/50 px-1 py-0.5 rounded-full hidden group-hover:inline-block">
                          {skill.masteryFactors.experienceYears}yr
                        </span>
                      )} */}
                  </div>
                </motion.span>
              );
            })}
          </div>
        </div>
      ))}{" "}
    </motion.div>
  );
};

// Timeline view - For clients who want to understand growth journey
const TimelineView = ({
  skills,
  activeFilter,
  timelineConfig,
  noDataMessage,
}: {
  skills: any[];
  activeFilter: string;
  timelineConfig: {
    title: string;
    newTechnologies: string;
    data: { year: number; skills: string[] }[];
    categorySkillMap: { [key: string]: string[] };
  };
  noDataMessage: { title: string; description: string; buttonText: string };
}) => {
  // Apply filtering based on the activeFilter
  const filteredTimelineData = (() => {
    if (activeFilter === "all") return timelineConfig.data;

    // Get relevant skills for the selected category
    const relevantSkills = timelineConfig.categorySkillMap[activeFilter] || [];

    // Filter timeline periods to only include those with relevant skills
    return timelineConfig.data
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
          {noDataMessage.title}
        </h3>
        <p className="text-earth-brown/80 font-al mb-6">
          {noDataMessage.description}
        </p>
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("setSkillsFilter", { detail: "all" })
            )
          }
          className="px-4 py-2 bg-earth-sand/10 hover:bg-earth-sand/20 rounded-lg text-earth-brown transition-all"
        >
          {noDataMessage.buttonText}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-xl sm:text-2xl font-gemola text-earth-dark text-center mb-8">
        {timelineConfig.title}
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
                  {timelineConfig.newTechnologies}
                </h5>
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "sm:justify-end" : ""
                  }`}
                >
                  {period.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-earth-sand/10 font-al px-2 py-1 rounded text-sm text-earth-brown"
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
  // Use the categories directly, they're already sorted by the parent component
  return (
    <div className="flex flex-col gap-8">
      {categories.map((skillCategory, categoryIndex) => (
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
