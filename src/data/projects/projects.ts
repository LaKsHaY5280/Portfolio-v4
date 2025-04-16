import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Laung Laachi",
    description:
      "Architected and launched an e-commerce platform, enabling seamless online purchases for Laung Laachi products.",
    longDescription:
      "Developed using Next.js and Shopify, the platform resulted in a 92% increase in sales across India. Integrated advanced SEO strategies such as keyword optimization and backlinking, achieving over 1,000 daily impressions and substantial traffic growth.",
    technologies: ["Next.js", "Shopify", "TailwindCSS", "SEO"],
    category: "E-Commerce",
    year: "2023",
    // githubUrl: "https://github.com/LaKsHaY5280/project", // Replace with actual URL
    liveUrl: "https://launglaachi.co", // Replace with actual URL if available
    image: "/images/projects/launglaachi.png", // Replace with actual image path
    featured: true,
  },
  {
    id: 2,
    title: "Lens Echo",
    description:
      "Developed a secure social media platform with Next.js and Appwrite, focusing on user engagement and content interaction.",
    longDescription:
      "Features include image publishing, user verification, and engagement metrics (likes, followers). Enhanced user retention by 40% and integrated post-saving and sharing features to boost interaction.",
    technologies: [
      "Next.js",
      "Appwrite",
      "React Query",
      "TailwindCSS",
      "Shadcn",
    ],
    category: "Social Media",
    year: "2023",
    githubUrl: "https://github.com/LaKsHaY5280/Lens-Echo", // Replace with actual URL
    liveUrl: "https://lensecholg.vercel.app",
    image: "/images/projects/lensecho.png", // Replace with actual image path
    featured: true,
  },
  {
    id: 3,
    title: "Byte & Kilo",
    description:
      "A digital agency platform providing web development, SEO optimization, and tailored client solutions.",
    longDescription:
      "Built with Next.js and Django, this platform secured 15+ clients in its first quarter, achieving 20% revenue growth and expanding the client base by 46%.",
    technologies: [
      "Next.js",
      "Django",
      "TailwindCSS",
      "Framer Motion",
      "AWS",
      "Shadcn",
    ],
    category: "Agency Platform",
    year: "2024",
    githubUrl: "https://github.com/Byte-Brains-Ai/Byte-and-Kilo", // Replace with actual URL
    liveUrl: "https://byte-and-kilo.vercel.app",
    image: "/images/projects/bytekilo.png", // Replace with actual image path
    featured: true,
  },
  // {
  //   id: 4,
  //   title: "Hello Study Global",
  //   description:
  //     "Developed a platform for students to curate university preferences, enhancing the client onboarding process.",
  //   longDescription:
  //     "Engineered using Next.js and Python, the platform achieved a 96.73% user satisfaction rate. Implemented A/B testing and UI/UX improvements, resulting in a 250% increase in successful client deals.",
  //   technologies: ["Next.js", "Python", "UI/UX", "A/B Testing"],
  //   category: "Education",
  //   year: "2023",
  //   // githubUrl: "https://github.com/LaKsHaY5280/hellostudy", // Replace with actual URL
  //   // liveUrl: "https://hellostudyglobal.vercel.app", // Replace with actual URL if available
  //   // image: "/images/projects/hellostudy.jpg", // Replace with actual image path
  //   featured: false,
  // },
];
