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
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://launglaachi.co",
    image: "/images/projects/launglaachi.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Lens Echo",
    description:
      "Developed a secure social media platform with Next.js and Appwrite, focusing on user engagement and content interaction.",
    longDescription:
      "Features include image publishing, user verification, and engagement metrics (likes, followers). Enhanced user retention by 40% and integrated post-saving and sharing features to boost interaction.",
    technologies: ["Next.js", "Appwrite", "React Query", "TailwindCSS"],
    category: "Social Media",
    year: "2023",
    githubUrl: "https://github.com/yourusername/lensecho",
    liveUrl: "https://lensecholg.vercel.app",
    image: "/images/projects/lensecho.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Byte & Kilo",
    description:
      "A digital agency platform providing web development, SEO optimization, and tailored client solutions.",
    longDescription:
      "Built with Next.js and Django, this platform secured 15+ clients in its first quarter, achieving 20% revenue growth and expanding the client base by 46%.",
    technologies: ["Next.js", "Django", "TailwindCSS", "AWS"],
    category: "Agency Platform",
    year: "2024",
    githubUrl: "https://github.com/yourusername/bytekilo",
    liveUrl: "https://byte-and-kilo.vercel.app",
    image: "/images/projects/bytekilo.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform with real-time inventory and seamless payment integration.",
    longDescription:
      "Handled thousands of transactions daily with features like AI-powered recommendations and real-time inventory tracking. Developed with performance and scalability in mind.",
    technologies: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
    category: "E-Commerce",
    year: "2023",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-platform.com",
    image: "/images/projects/ecommerce.jpg",
    featured: false,
  },
];
