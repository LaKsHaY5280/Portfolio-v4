export interface Skill {
  name: string;
  proficiency: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface SkillsContent {
  header: {
    title: string;
    description: string;
  };
  categories: string[];
}
