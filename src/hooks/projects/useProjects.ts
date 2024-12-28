import { projects } from "@/data/projects/projects";
import { Project } from "@/data/projects/types";

export const useProjects = (): Project[] => {
  return projects;
};
