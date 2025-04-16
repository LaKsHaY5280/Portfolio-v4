import React from "react";
import { SkillsContent } from "./types";

export const skillsContent: SkillsContent = {
  header: {
    title: "Skills & Technologies",
    description:
      "A comprehensive overview of my technical expertise and proficiency in various domains.",
    label: "TECHNICAL PROFICIENCY",
  },
  metrics: {
    technologies: {
      label: "Technologies",
      icon: (
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
      ),
    },
    masteryLevel: {
      label: "Mastery Level",
      icon: (
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
      ),
    },
    expertSkills: {
      label: "Expert Skills",
      icon: (
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
      ),
    },
    yearsPractice: {
      label: "Years Practice",
      icon: (
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
      ),
    },
  },
  metricValues: {
    technologies: null, // Calculate dynamically from skills data
    masteryLevel: null, // Calculate dynamically from skills data
    expertSkills: null, // Calculate dynamically from skills data
    yearsPractice: "5+",
  },
  viewOptions: [
    {
      id: "cards",
      label: "Detailed",
      icon: (
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
      ),
    },
    {
      id: "mastery",
      label: "Mastery",
      icon: (
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
      ),
    },
    {
      id: "timeline",
      label: "Journey",
      icon: (
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
      ),
    },
  ],
  categories: [
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "DevOps & Tools",
    "Programming Languages",
    "Soft Skills",
  ],
  masteryLevels: [
    {
      id: "expert",
      title: "Expert",
      color: "#BBA58F",
      threshold: 85,
    },
    {
      id: "advanced",
      title: "Advanced",
      color: "#959D90",
      threshold: 70,
    },
    {
      id: "competent",
      title: "Competent",
      color: "#E8D9CD",
      threshold: 0, // Any skill below advanced threshold
    },
  ],
  categoryPriority: {
    "Frontend Development": 1,
    "DevOps & Tools": 2,
    "Backend Development": 3,
    "Programming Languages": 4,
    "Soft Skills": 5,
    "Mobile Development": 6,
  },
  timeline: {
    title: "Skill Acquisition Journey",
    newTechnologies: "New Technologies",
    data: [
      { year: 2018, skills: ["HTML", "CSS", "JavaScript", "React.js"] },
      { year: 2019, skills: ["Node.js", "Express.js", "MongoDB"] },
      { year: 2020, skills: ["TypeScript", "Next.js", "PostgreSQL"] },
      { year: 2021, skills: ["Flutter", "React Native", "AWS"] },
      {
        year: 2022,
        skills: ["GSAP", "Framer Motion", "TailwindCSS", "Docker"],
      },
      { year: 2023, skills: ["Shadcn", "Django", "CI/CD"] },
    ],
    categorySkillMap: {
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
      "Soft Skills": [],
    },
  },
  expertiseLevels: {
    title: "Expertise Levels",
  },
  coreCompetencies: {
    title: "Core Competencies",
  },
  emptyState: {
    title: "No Skills Found",
    description: "No skills found for this filter category.",
    buttonText: "View All Skills",
  },
  filterMessages: {
    timelineNoData: {
      title: "No Timeline Data",
      description: "No timeline data available for this filter category.",
      buttonText: "View All Skills",
    },
    masteryNoData: {
      title: "No Skills Found",
      description: "No skills found for this filter category in mastery view.",
      buttonText: "View All Skills",
    },
  },
};
