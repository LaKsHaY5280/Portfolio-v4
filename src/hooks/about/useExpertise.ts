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

  // Data is intentionally unranked — no proficiency sorting
  return [
    {
      category: "Web Development",
      items: frontendSkills?.items.slice(0, 7) || [],
    },
    {
      category: "App Development",
      items: mobileSkills?.items.slice(0, 4) || [],
    },
  ];
};
