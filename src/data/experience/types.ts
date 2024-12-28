import { ReactNode } from "react";

export interface Achievement {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ExperienceContent {
  header: {
    title: string;
    subtitle: string;
    description: string;
  };
  sections: {
    timeline: {
      title: string;
      description: string;
      hoverIndicator: string;
    };
    achievements: {
      title: string;
    };
    details: {
      techStack: string;
      responsibilities: string;
    };
  };
  timelineConfig: {
    lineColor: string;
    dotColor: string;
    dotSize: number;
    lineWidth: number;
  };
  cardConfig: {
    width: string;
    padding: string;
    borderRadius: string;
    background: string;
    shadow: string;
  };
}