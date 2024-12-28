import { experience } from "@/data/experience/experience";
import { Experience } from "@/data/experience/types";

export const useExperience = (): Experience[] => {
  return experience;
};
