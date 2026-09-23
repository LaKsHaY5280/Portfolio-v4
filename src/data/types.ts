/**
 * Master types file for all portfolio data.
 * All content types are defined here; the per-section files in
 * src/data/<section>/types.ts re-export from this file for compatibility.
 */
import { JSX, ReactNode } from "react";

// ============================================
// My Info (personal data)
// ============================================

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
}

export interface ButtonLabels {
  contact: string;
  projects: string;
}

export interface MyInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  resumeUrl: string;
  initials: string;
  socialLinks: SocialLinks;
  buttons: ButtonLabels;
}

// ============================================
// Layout (navigation, footer, buttons)
// ============================================

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterContent {
  tagline: string;
  sections: string[];
  copyright: string;
  links: {
    label: string;
    href?: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

export interface ButtonContent {
  label: string;
  href: string;
}

export interface LayoutContent {
  navigation: NavItem[];
  footer: FooterContent;
  button: ButtonContent;
}

// ============================================
// About
// ============================================

export interface AboutContent {
  introduction: {
    title: string;
    bio: string[];
  };
  profile: {
    initials: string;
    spinningText: string;
  };
  stats: Array<{
    years: string;
    area: string;
    details: string;
  }>;
  cta: {
    title: string;
    description: string;
    resumeUrl: string;
    buttons: {
      resume: string;
      connect: string;
    };
  };
}

// ============================================
// Experience
// ============================================

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

export interface Metric {
  value: string | number;
  label: string;
  icon: ReactNode;
}

export interface ExperienceContent {
  header: {
    title: string;
    subtitle: string;
    description: string;
    label?: string;
  };
  metrics: Metric[];
  technicalProficiency?: {
    title: string;
  };
  technicalSummary?: {
    title: string;
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

// ============================================
// Projects
// ============================================

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  images?: string[];
  featured: boolean;
}

export interface ProjectsContent {
  header: {
    title: string;
    description: string;
  };
  buttons: {
    github?: string;
    live: string;
    viewAll: string;
    showLess: string;
  };
}

// ============================================
// Skills
// ============================================

export interface Skill {
  name: string;
  proficiency?: number;
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

// ============================================
// Contact
// ============================================

export interface ContactContent {
  title: string;
  email: {
    label: string;
    value: string;
  };
  location: {
    label: string;
    value: string;
  };
  connect: {
    title: string;
    description: string;
  };
  form: {
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    button: {
      default: string;
      sending: string;
    };
  };
}

export interface SocialLink {
  url: string;
  platform: "github" | "linkedin" | "twitter";
}

// ============================================
// Blog
// ============================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  url: string;
}
