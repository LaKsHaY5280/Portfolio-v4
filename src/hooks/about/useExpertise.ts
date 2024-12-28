import { useSkills } from "@/hooks/skills";
import { SkillCategory } from "@/data/skills/types";

export const useExpertise = (): SkillCategory[] => {
  const skills = useSkills();

  // Find the Frontend and Mobile Development categories
  const frontendSkills = skills.find(
    (category) => category.category === "Frontend Development"
  );
  const mobileSkills = skills.find(
    (category) => category.category === "Mobile Development"
  );

  return [
    {
      category: "Web Development",
      items:
        frontendSkills?.items
          .sort((a, b) => b.proficiency - a.proficiency)
          .slice(0, 4) || [],
    },
    {
      category: "App Development",
      items:
        mobileSkills?.items
          .sort((a, b) => b.proficiency - a.proficiency)
          .slice(0, 4) || [],
    },
  ];
};
