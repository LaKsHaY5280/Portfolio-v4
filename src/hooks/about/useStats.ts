import { useAboutContent } from "./useAboutContent";

export const useStats = () => {
  const { stats } = useAboutContent();
  return stats;
};
