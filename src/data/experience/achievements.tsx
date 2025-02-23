import { Achievement } from "./types";

export const achievements: Achievement[] = [
  {
    title: "Web Lead - Google Developer Student Club",
    description:
      "Served as the Web Lead at GDSC IINTM, leading development initiatives and fostering collaboration among team members.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Hackathon Runner-Up",
    description:
      "Achieved 1st runner-up position in the Hackathon Matrix TechFest organized by IINTM.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 5h.01M6 19h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "E-Commerce Success",
    description:
      "Architected and launched an e-commerce platform, increasing sales by 92% and achieving over 1,000 daily impressions.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];
