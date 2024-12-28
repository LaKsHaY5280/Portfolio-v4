import { useAboutContent } from "./useAboutContent";

export const useProfile = () => {
  const { profile } = useAboutContent();
  return profile;
};
