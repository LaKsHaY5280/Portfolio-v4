/**
 * Master content file for all portfolio data.
 * All site content lives here; the per-section files in
 * src/data/<section>/ re-export from this file for compatibility.
 */
import React from "react";

import {
  AboutContent,
  Achievement,
  BlogPost,
  ContactContent,
  Experience,
  ExperienceContent,
  LayoutContent,
  MyInfo,
  Project,
  ProjectsContent,
  SkillCategory,
  SkillsContent,
} from "./types";

// ============================================
// My Info (personal data)
// ============================================

export const myInfo: MyInfo = {
  name: "Lakshay Goyal",
  role: "Web/App Developer",
  location: "India",
  email: "lakshaygoyal.connect@gmail.com",
  bio: "Expertise in frameworks like Next.js focused on creating scalable, user-centric applications. Proven track record of enhancing performance, boosting user engagement, and delivering impactful solutions in e-commerce, and digital services.",
  resumeUrl: "/resume",
  initials: "LG",
  socialLinks: {
    github: "https://github.com/LaKsHaY5280",
    linkedin: "https://linkedin.com/in/lakshaygoyal-lg",
    instagram: "https://www.instagram.com/akuma._.lakshay/",
  },
  buttons: {
    contact: "Get in Touch",
    projects: "View My Work",
  },
};

// ============================================
// Layout (navigation, footer, buttons)
// ============================================

export const layoutContent: LayoutContent = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  footer: {
    tagline: "Let's work together!",
    sections: ["Quick Links", "Connect"],
    copyright: `© ${new Date().getFullYear()} ${
      myInfo.name
    }. All rights reserved.`,
    links: [
      { label: "GitHub", href: myInfo.socialLinks.github },
      { label: "LinkedIn", href: myInfo.socialLinks.linkedin },
      { label: "Instagram", href: myInfo.socialLinks.instagram },
    ],
    buttons: [
      { label: "Download Resume", href: myInfo.resumeUrl },
      {
        label: "View Source",
        href: "https://github.com/LaKsHaY5280/Portfolio-v4",
      },
    ],
  },
  button: {
    label: "Get in Touch",
    href: "#contact",
  },
};

// ============================================
// About
// ============================================

export const aboutContent: AboutContent = {
  introduction: {
    title: `I'm Lakshay. A web developer, problem-solver, and technology enthusiast.`,
    bio: [
      "I specialize in designing and developing scalable web solutions that prioritize performance and user engagement. My technical expertise includes frameworks and tools like Next.js, React.js, and TailwindCSS, enabling me to deliver solutions that are efficient, secure, and visually appealing.",
      "Through diverse projects in education, e-commerce, and digital services, I've created platforms that drive measurable results, such as increasing user satisfaction by 96.73% and boosting e-commerce sales by 92%. Based in India, I am passionate about leveraging modern technologies to craft impactful digital experiences and solve complex challenges effectively.",
    ],
  },
  profile: {
    initials: myInfo.initials,
    spinningText: "WEB/APP DEVELOPER • DESIGNER • TECH ENTHUSIAST • ",
  },
  stats: [
    {
      years: "4+",
      area: "Years of Web Development",
      details: "Specialized in React, Next.js, and full-stack solutions.",
    },
    {
      years: "3+",
      area: "Years of Project Experience",
      details:
        "Including e-commerce platforms, social media applications, and agency websites.",
    },
    {
      years: "5+",
      area: "Years Working with Technologies",
      details:
        "Expertise in frameworks like Next.js, TailwindCSS, and tools like Figma and Git.",
    },
  ],
  cta: {
    title: "Let's Build Something Together",
    description:
      "Open to discussing innovative projects, collaborating on challenges, or sharing insights. Let's connect and create impactful solutions.",
    resumeUrl: myInfo.resumeUrl,
    buttons: {
      resume: "View My Resume",
      connect: "Connect Now",
    },
  },
};

// ============================================
// Experience
// ============================================

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

export const experience: Experience[] = [
  {
    company: "Astraum Digital Solutions",
    role: "Full Stack Developer",
    duration: "November 2024 – December 2024",
    responsibilities: [
      "Built a health tech platform using React.js, Node.js, and MongoDB, incorporating real-time tracking and payment integration, resulting in a 40% efficiency boost.",
      "Launched an animated, SEO-optimized website with Next.js and GSAP, increasing traffic by 60% within three months.",
      "Delivered projects 20% ahead of schedule by implementing Agile workflows, enhancing client satisfaction.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Next.js",
      "GSAP",
      "Agile",
    ],
  },
  {
    company: "Laung Laachi",
    role: "Web Developer",
    duration: "December 2023 – Present",
    responsibilities: [
      "Architected and launched an e-commerce platform using Next.js and Shopify, enabling seamless online purchases for Laung Laachi products.",
      "Implemented advanced SEO strategies, resulting in over 1,000 daily impressions and a significant increase in site traffic.",
      "Achieved a 92% increase in sales across India by improving user experience and backend efficiency.",
    ],
    technologies: ["Next.js", "Shopify", "SEO", "Backend Development"],
  },
];

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

// ============================================
// Projects
// ============================================

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
    title: "IELTS 7+ House",
    description:
      "Architected and launched an IELTS preparation platform where students practiced Cambridge mock tests online, resulting in 60K+ total attempts across Academic and General Reading modules.",
    longDescription:
      "Developed using Next.js and Shopify, the platform enabled secure payments via RazorPay, allowing students to seamlessly purchase personalized IELTS writing essay reviews and feedback sessions from expert evaluators. Achieved 60K+ total mock test attempts across Academic and General Reading modules.",
    technologies: [
      "Next.js",
      "Shopify",
      "RazorPay",
      "Google Analytics",
      "TailwindCSS",
      "Framer Motion",
      "Vercel",
      "AWS",
    ],
    category: "Educational Platform",
    year: "2024",
    liveUrl: "https://ielts7plushouse.com",
    image: "/images/projects/ielts7plushouese.png", // Make sure to add this image
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

export const projectsContent: ProjectsContent = {
  header: {
    title: "Featured Projects",
    description:
      "A selection of my top projects, showcasing technical expertise and the ability to solve real-world problems with innovative solutions.",
  },
  buttons: {
    github: "View Code",
    live: "Live Demo",
    viewAll: "View All Projects",
    showLess: "Show Less",
  },
};

// ============================================
// Skills
// ============================================

export const skills: SkillCategory[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", proficiency: 90 },
      { name: "Next.js", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "TailwindCSS", proficiency: 90 },
      { name: "GSAP", proficiency: 85 },
      { name: "Framer Motion", proficiency: 80 },
      { name: "Shadcn", proficiency: 75 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", proficiency: 85 },
      { name: "Django", proficiency: 80 },
      { name: "Express.js", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 70 },
      { name: "SQL", proficiency: 70 },
      { name: "NoSQL", proficiency: 70 },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { name: "React Native", proficiency: 85 },
      { name: "Flutter", proficiency: 75 },
      { name: "Android Development", proficiency: 70 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 75 },
      { name: "AWS", proficiency: 75 },
      { name: "CI/CD", proficiency: 80 },
      { name: "Vercel", proficiency: 85 },
      { name: "Figma", proficiency: 85 },
      { name: "Shopify", proficiency: 75 },
      { name: "Stripe", proficiency: 70 },
      { name: "WordPress", proficiency: 75 },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", proficiency: 90 },
      { name: "HTML", proficiency: 90 },
      { name: "CSS", proficiency: 90 },
      { name: "Python", proficiency: 80 },
      { name: "Java", proficiency: 70 },
      { name: "Dart", proficiency: 70 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem-Solving", proficiency: 90 },
      { name: "Project Management", proficiency: 85 },
      { name: "Mentorship", proficiency: 80 },
      { name: "Collaboration", proficiency: 85 },
      { name: "Team Leadership", proficiency: 80 },
      { name: "Adaptability", proficiency: 85 },
    ],
  },
];

export const skillsContent: SkillsContent = {
  header: {
    title: "Skills & Technologies",
    description:
      "A comprehensive overview of my technical expertise and proficiency in various domains.",
    label: "TECHNICAL PROFICIENCY",
  },
  metrics: {
    technologies: {
      label: "Technologies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
    masteryLevel: {
      label: "Mastery Level",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="m4.93 4.93 14.14 14.14" />
          <path d="m19.07 4.93-14.14 14.14" />
        </svg>
      ),
    },
    expertSkills: {
      label: "Expert Skills",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      ),
    },
    yearsPractice: {
      label: "Years Practice",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
    },
  },
  metricValues: {
    technologies: null, // Calculate dynamically from skills data
    masteryLevel: null, // Calculate dynamically from skills data
    expertSkills: null, // Calculate dynamically from skills data
    yearsPractice: "5+",
  },
  viewOptions: [
    {
      id: "cards",
      label: "Detailed",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      ),
    },
    {
      id: "mastery",
      label: "Mastery",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        </svg>
      ),
    },
    {
      id: "timeline",
      label: "Journey",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
    },
  ],
  categories: [
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "DevOps & Tools",
    "Programming Languages",
    "Soft Skills",
  ],
  masteryLevels: [
    {
      id: "expert",
      title: "Expert",
      color: "#BBA58F",
      threshold: 85,
    },
    {
      id: "advanced",
      title: "Advanced",
      color: "#959D90",
      threshold: 70,
    },
    {
      id: "competent",
      title: "Competent",
      color: "#E8D9CD",
      threshold: 0, // Any skill below advanced threshold
    },
  ],
  categoryPriority: {
    "Frontend Development": 1,
    "DevOps & Tools": 2,
    "Backend Development": 3,
    "Programming Languages": 4,
    "Soft Skills": 5,
    "Mobile Development": 6,
  },
  timeline: {
    title: "Skill Acquisition Journey",
    newTechnologies: "New Technologies",
    data: [
      { year: 2018, skills: ["HTML", "CSS", "JavaScript", "React.js"] },
      { year: 2019, skills: ["Node.js", "Express.js", "MongoDB"] },
      { year: 2020, skills: ["TypeScript", "Next.js", "PostgreSQL"] },
      { year: 2021, skills: ["Flutter", "React Native", "AWS"] },
      {
        year: 2022,
        skills: ["GSAP", "Framer Motion", "TailwindCSS", "Docker"],
      },
      { year: 2023, skills: ["Shadcn", "Django", "CI/CD"] },
    ],
    categorySkillMap: {
      "Frontend Development": [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "GSAP",
        "Framer Motion",
        "TailwindCSS",
        "Next.js",
        "Shadcn",
      ],
      "Backend Development": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Django",
      ],
      "Mobile Development": ["Flutter", "React Native"],
      "DevOps & Tools": ["AWS", "Docker", "CI/CD"],
      "Programming Languages": ["JavaScript", "TypeScript"],
      "Soft Skills": [],
    },
  },
  expertiseLevels: {
    title: "Expertise Levels",
  },
  coreCompetencies: {
    title: "Core Competencies",
  },
  emptyState: {
    title: "No Skills Found",
    description: "No skills found for this filter category.",
    buttonText: "View All Skills",
  },
  filterMessages: {
    timelineNoData: {
      title: "No Timeline Data",
      description: "No timeline data available for this filter category.",
      buttonText: "View All Skills",
    },
    masteryNoData: {
      title: "No Skills Found",
      description: "No skills found for this filter category in mastery view.",
      buttonText: "View All Skills",
    },
  },
};

// ============================================
// Contact
// ============================================

export const contactContent: ContactContent = {
  title: "Let's Connect",
  email: {
    label: "Email",
    value: myInfo.email,
  },
  location: {
    label: "Location",
    value: myInfo.location,
  },
  connect: {
    title: "Get in Touch",
    description:
      "I'm always open to new opportunities and collaborations. Whether you're looking to discuss a project, need consultation, or simply want to connect, feel free to reach out.",
  },
  form: {
    placeholders: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
    },
    button: {
      default: "Send Message",
      sending: "Sending...",
    },
  },
};

// ============================================
// Blog
// ============================================

export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 13",
    excerpt:
      "Learn how to build modern web applications with Next.js 13 and its new app directory structure.",
    date: "2024-03-15",
    tags: ["Next.js", "React", "Web Development"],
    url: "/blog/getting-started-nextjs-13",
  },
  {
    id: 2,
    title: "Mastering TypeScript: Best Practices",
    excerpt:
      "Explore advanced TypeScript concepts and learn best practices for large-scale applications.",
    date: "2024-03-10",
    tags: ["TypeScript", "JavaScript", "Programming"],
    url: "/blog/mastering-typescript",
  },
  // Add more blog posts...
] satisfies BlogPost[];
