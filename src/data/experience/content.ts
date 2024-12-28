import { ExperienceContent } from "./types";


export const experienceContent: ExperienceContent = {
  header: {
    title: "Experience",
    subtitle: "Professional Journey",
    description:
      "A timeline of my professional journey, showcasing my growth, expertise, and contributions in the tech industry.",
  },
  sections: {
    timeline: {
      title: "Timeline",
      description: "A detailed look at my career milestones and roles over the years.",
      hoverIndicator: "Hover over each timeline item for more details.",
    },
    achievements: {
      title: "Key Achievements",
    },
    details: {
      techStack: "Technologies Used",
      responsibilities: "Major Responsibilities",
    },
  },
  timelineConfig: {
    lineColor: "bg-earth-sand/30",
    dotColor: "bg-earth-sand",
    dotSize: 16,
    lineWidth: 2,
  },
  cardConfig: {
    width: "max-w-md",
    padding: "p-6",
    borderRadius: "rounded-xl",
    background: "bg-earth-dark/5 backdrop-blur-sm",
    shadow: "shadow-xl",
  },
};
