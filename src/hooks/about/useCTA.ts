import { useAboutContent } from "./useAboutContent";

export const useCTA = () => {
  const { cta } = useAboutContent();
  return cta;
};
