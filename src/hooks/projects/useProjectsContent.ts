import { projectsContent } from "@/data/projects/content";
import { ProjectsContent } from "@/data/projects/types";

export const useProjectsContent = (): ProjectsContent => {
  return projectsContent;
};
