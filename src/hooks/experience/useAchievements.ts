import { achievements } from "@/data/experience/achievements";
import { Achievement } from "@/data/experience/types";

export const useAchievements = (): Achievement[] => {
  return achievements;
};
