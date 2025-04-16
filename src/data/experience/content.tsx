import { ExperienceContent } from "./types";

export const experienceContent: ExperienceContent = {
  header: {
    title: "Experience",
    subtitle: "Professional Journey",
    description:
      "A timeline of my professional journey, showcasing my growth, expertise, and contributions in the tech industry.",
    label: "WORK EXPERIENCE",
  },
  metrics: [
    {
      value: "5+",
      label: "Years Experience",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sm:w-6 sm:h-6"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M8 12h8" />
          <path d="M12 16V8" />
        </svg>
      ),
    },
    {
      value: "15+",
      label: "Projects Completed",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sm:w-6 sm:h-6"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      value: "96%",
      label: "Client Satisfaction",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sm:w-6 sm:h-6"
        >
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
      ),
    },
  ],
  technicalProficiency: {
    title: "Technical Proficiency",
  },
  technicalSummary: {
    title: "Technical Summary",
    description:
      "Specialized in modern web development with React.js and Next.js, with additional expertise in mobile application development. Consistently delivers high-quality, scalable solutions with a focus on performance and user experience.",
  },
  sections: {
    timeline: {
      title: "Timeline",
      description:
        "A detailed look at my career milestones and roles over the years.",
      hoverIndicator: "Click on each timeline item for more details.",
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
