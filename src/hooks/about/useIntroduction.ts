import { useAboutContent } from "./useAboutContent";

export const useIntroduction = () => {
  const { introduction } = useAboutContent();
  return introduction;
};
