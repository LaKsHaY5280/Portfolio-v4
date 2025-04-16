import { JSX } from "react";

export interface Skill {
  name: string;
  proficiency: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface MetricData {
  icon: JSX.Element;
  label: string;
}

export interface ViewOption {
  id: "cards" | "mastery" | "timeline";
  label: string;
  icon: JSX.Element;
}

export interface MasteryLevel {
  id: "expert" | "advanced" | "competent";
  title: string;
  color: string;
  threshold: number;
}

export interface TimelineEntry {
  year: number;
  skills: string[];
}

export interface CategorySkillMap {
  [category: string]: string[];
}

export interface SkillsContent {
  header: {
    title: string;
    description: string;
    label?: string;
  };
  metrics: {
    technologies: MetricData;
    masteryLevel: MetricData;
    expertSkills: MetricData;
    yearsPractice: MetricData;
  };
  metricValues: {
    technologies: number | null; // null means calculate dynamically
    masteryLevel: number | null; // null means calculate dynamically
    expertSkills: number | null; // null means calculate dynamically
    yearsPractice: string;
  };
  viewOptions: ViewOption[];
  categories: string[];
  masteryLevels: MasteryLevel[];
  categoryPriority: {
    [key: string]: number;
  };
  timeline: {
    title: string;
    newTechnologies: string;
    data: TimelineEntry[];
    categorySkillMap: CategorySkillMap;
  };
  expertiseLevels: {
    title: string;
  };
  coreCompetencies: {
    title: string;
  };
  emptyState: {
    title: string;
    description: string;
    buttonText: string;
  };
  filterMessages: {
    timelineNoData: {
      title: string;
      description: string;
      buttonText: string;
    };
    masteryNoData: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
}
