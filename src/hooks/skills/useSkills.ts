import { skills } from "@/data/skills/skills";
import { SkillCategory } from "@/data/skills/types";

export const useSkills = (): SkillCategory[] => {
  return skills;
};
