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
    title: "Sardarji Masale",
    description:
      "Architected and launched an eCommerce platform for Sardarji Masale products, enhancing online purchases and brand visibility.",
    longDescription:
      "Developed using Next.js and Shopify, the platform led to a 62% increase in sales across India. Implemented advanced SEO strategies, including keyword optimization and backlinking, resulting in over 500 daily impressions and a significant increase in site traffic.",
    technologies: [
      "Next.js",
      "Shopify",
      "RazorPay",
      "ShipRocket",
      "TailwindCSS",
      "Framer Motion",
      "Vercel",
      "AWS",
    ],
    category: "E-Commerce",
    year: "2024",
    liveUrl: "https://sardarjimasale.com",
    image: "/images/projects/sardarjimasale.png", // Make sure to add this image
    featured: true,
  },
  {
    id: 3,
    title: "IITM Alumni Platform",
    description:
      "Developed a Next.js-based alumni portal with a modern UI, enhancing community engagement among graduates.",
    longDescription:
      "Built with Next.js and integrated with Google Sheets API for real-time data management and automated updates. Implemented a secure login/registration system to foster community engagement and networking opportunities among alumni.",
    technologies: ["Next.js", "Google Sheets API", "TailwindCSS", "Vercel"],
    category: "Educational Platform",
    year: "2025",
    liveUrl: "https://alumniiitmjanakpuri.com",
    image: "/images/projects/iitmalumni.png", // Make sure to add this image
    featured: true,
  },
  {
    id: 4,
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
  {
    id: 5,
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
];
