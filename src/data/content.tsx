/**
 * Master content file for all portfolio data.
 * Updated to match Lakshay Goyal's current resume and professional positioning.
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
// My Info
// ============================================

export const myInfo: MyInfo = {
  name: "Lakshay Goyal",
  role: "Software Engineer | Full-Stack Developer",
  location: "New Delhi, India | Open to Relocate",
  email: "lakshaygoyal.connect@gmail.com",
  bio:
    "Full-stack software engineer with production experience across Shopify, Angular, NestJS, Next.js, databases, third-party integrations, and product development.",
  resumeUrl: "/resume",
  initials: "LG",
  socialLinks: {
    github: "https://github.com/LaKsHaY5280",
    linkedin: "https://linkedin.com/in/lakshaygoyal-lg",
    instagram: "https://www.instagram.com/akuma._.lakshay/",
  },
  buttons: {
    contact: "Let's Connect",
    projects: "Explore My Work",
  },
};

// ============================================
// Layout
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
    tagline: "Build things that matter.",
    sections: ["Quick Links", "Connect"],
    copyright: `© ${new Date().getFullYear()} ${myInfo.name}. All rights reserved.`,
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
    title: "I'm Lakshay. A software engineer who likes building things end to end.",
    bio: [
      "I'm a software engineer and MCA student at IIIT Vadodara, focused on building and shipping full-stack products. My work spans frontend, backend, databases, integrations, performance optimization, and production debugging.",
      "I have worked directly with clients and designers, co-delivered a large WordPress-to-Shopify migration, built core Angular/NestJS modules for a live platform, and developed an IELTS practice platform from scratch. I like understanding the problem first, then designing and building the right solution.",
    ],
  },
  profile: {
    initials: myInfo.initials,
    spinningText:
      "SOFTWARE ENGINEER • FULL-STACK DEVELOPER • PRODUCT BUILDER • ",
  },
  stats: [
    {
      years: "1+",
      area: "Years in Production",
      details:
        "Hands-on experience shipping software across eCommerce and EdTech products.",
    },
    {
      years: "20K+",
      area: "Records Migrated",
      details:
        "Co-delivered a WordPress-to-Shopify migration covering blogs, orders, customers, and reviews.",
    },
    {
      years: "41 → 93",
      area: "Mobile Lighthouse",
      details:
        "Improved EarthKind's mobile performance through asset and third-party script optimization.",
    },
  ],
  cta: {
    title: "Let's Build Something Real",
    description:
      "Open to software engineering opportunities, technical collaborations, and interesting products worth building.",
    resumeUrl: myInfo.resumeUrl,
    buttons: {
      resume: "View My Resume",
      connect: "Get in Touch",
    },
  },
};

// ============================================
// Experience
// ============================================

export const experienceContent: ExperienceContent = {
  header: {
    title: "Experience",
    subtitle: "From Requirements to Production",
    description:
      "Production experience across eCommerce, EdTech, Shopify, Angular, NestJS, and full-stack product development.",
    label: "WORK EXPERIENCE",
  },
  metrics: [
    {
      value: "1+",
      label: "Years Production Experience",
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
      value: "20K+",
      label: "Records Migrated",
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
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </svg>
      ),
    },
    {
      value: "41 → 93",
      label: "Mobile Lighthouse",
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
          <path d="M3 12h4l3-8 4 16 3-8h4" />
        </svg>
      ),
    },
  ],
  technicalProficiency: {
    title: "Technical Toolkit",
  },
  technicalSummary: {
    title: "How I Work",
    description:
      "I work across the stack: understanding requirements, designing technical solutions, building frontend and backend systems, integrating external services, and debugging production issues.",
  },
  sections: {
    timeline: {
      title: "Career Timeline",
      description:
        "A progression from web development foundations to production engineering and full-stack product work.",
      hoverIndicator: "Click on each role for more details.",
    },
    achievements: {
      title: "Selected Highlights",
    },
    details: {
      techStack: "Technologies Used",
      responsibilities: "What I Worked On",
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
    company: "Betatest Solutions Pvt Ltd",
    role: "Software Engineer Intern",
    duration: "October 2025 – July 2026",
    responsibilities: [
      "Worked directly with clients and designers to translate requirements into technical solutions and production-ready implementations.",
      "Co-delivered a 2-month WordPress-to-Shopify migration for EarthKind; owned database content extraction and restructuring for 1,000+ blogs, 10,000+ orders, 5,000+ customers, and 5,000+ reviews, mapping legacy data to custom and native Shopify metafields.",
      "Improved EarthKind's mobile Lighthouse performance from 41 to 93 through image and CSS optimization, lazy loading, dynamic resource loading, and third-party script optimization including GA4.",
      "Developed three core YouTuneIn modules—admin dashboard, newsletter and email system with 40+ reusable templates, and client profile management—using Angular and NestJS; implemented role-based permissions, CRUD workflows, file uploads, and automated emails.",
      "Diagnosed and resolved a production issue that prevented billing details from appearing in the YouTuneIn admin dashboard.",
    ],
    technologies: [
      "Shopify",
      "Liquid",
      "Angular",
      "NestJS",
      "JavaScript",
      "GA4",
      "REST APIs",
    ],
  },
  {
    company: "IELTS 7+ House",
    role: "Software Engineer (Freelance)",
    duration: "June 2025 – September 2025",
    responsibilities: [
      "Architected and built a full-stack IELTS practice platform from scratch using Next.js 14, Node.js/Express, Firebase, and Razorpay.",
      "Translated business requirements into production-ready application architecture, data models, and student workflows.",
      "Designed workflows for 30+ IELTS question types across Reading, Listening, and Writing, including split-layout answering and writing submissions.",
      "Built the platform around real student practice workflows and supported 180+ active students.",
    ],
    technologies: [
      "Next.js 14",
      "Node.js",
      "Express.js",
      "Firebase",
      "Razorpay",
      "REST APIs",
    ],
  },
];

// ============================================
// Selected Projects / Work
// ============================================

export const projects: Project[] = [
  {
    id: 1,
    title: "EarthKind",
    description:
      "Production eCommerce migration and performance optimization from WordPress to Shopify.",
    longDescription:
      "Co-delivered a 2-month WordPress-to-Shopify migration covering 1,000+ blogs, 10,000+ orders, 5,000+ customers, and 5,000+ reviews. Owned database content extraction and restructuring, mapped legacy data to custom and native Shopify metafields, and improved mobile Lighthouse performance from 41 to 93 through image/CSS optimization, lazy loading, dynamic resource loading, and third-party script optimization including GA4.",
    technologies: ["Shopify", "Liquid", "GA4", "Performance", "Data Migration"],
    category: "eCommerce",
    year: "2025–2026",
    liveUrl: "https://www.earthkind.com/",
    image: "/images/projects/earthkind.png",
    featured: true,
  },
  {
    id: 2,
    title: "YouTuneIn",
    description:
      "Core product modules for a live sound and meditation platform built with Angular and NestJS.",
    longDescription:
      "Developed and shipped an admin dashboard, newsletter and email system with 40+ reusable templates, and client profile management. Implemented role-based permissions, CRUD workflows, file uploads, automated emails, and production fixes for core platform workflows.",
    technologies: ["Angular", "NestJS", "TypeScript", "REST APIs"],
    category: "Product Platform",
    year: "2025–2026",
    liveUrl: "https://youtunein.com/",
    image: "/images/projects/youtunein.png",
    featured: true,
  },
  {
    id: 3,
    title: "IELTS 7+ House",
    description:
      "Full-stack IELTS practice platform built from scratch for online Reading, Listening, and Writing practice.",
    longDescription:
      "Architected and built a production-ready IELTS practice platform using Next.js 14, Node.js/Express, Firebase, and Razorpay. Designed the data model and workflows for 30+ IELTS question types, split-layout answering, and writing submissions; the platform has been used by 180+ active students.",
    technologies: ["Next.js 14", "Node.js", "Express.js", "Firebase", "Razorpay"],
    category: "EdTech",
    year: "2025",
    liveUrl: "https://ielts7plushouse.com",
    image: "/images/projects/ielts7plushouse.png",
    featured: true,
  },
  {
    id: 4,
    title: "IITM Alumni Platform",
    description:
      "Developed a Next.js-based alumni portal with a modern UI, enhancing community engagement among graduates.",
    longDescription:
      "Built with Next.js and integrated with Google Sheets API for real-time data management and automated updates. Implemented a secure login/registration system to foster community engagement and networking opportunities among alumni.",
    technologies: ["Next.js", "Google Sheets API", "TailwindCSS", "Vercel"],
    category: "EdTech",
    year: "2025",
    liveUrl: "https://alumniiitmjanakpuri.com",
    image: "/images/projects/iitmalumni.png",
    featured: true,
  },
];

export const projectsContent: ProjectsContent = {
  header: {
    title: "Selected Work",
    description:
      "Production products and client work that demonstrate full-stack development, technical ownership, integrations, and problem solving.",
  },
  buttons: {
    github: "View Code",
    live: "Live Project",
    viewAll: "View All Work",
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
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "React Native" },
      { name: "Tailwind CSS" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "NestJS" },
      { name: "REST APIs" },
      { name: "Prisma" },
    ],
  },
  {
    category: "Databases & Data",
    items: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Firebase" },
      { name: "Supabase" },
      { name: "SQL" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "Postman" },
    ],
  },
  {
    category: "Platforms & Integrations",
    items: [
      { name: "Shopify" },
      { name: "Liquid" },
      { name: "Stripe" },
      { name: "Razorpay" },
      { name: "GA4" },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "SQL" },
    ],
  },
];

export const skillsContent: SkillsContent = {
  header: {
    title: "Skills & Technologies",
    description:
      "A practical full-stack toolkit covering modern frontend and backend development, databases, cloud tooling, and third-party integrations.",
    label: "TECHNICAL TOOLKIT",
  },
  metrics: {
    technologies: {
      label: "Core Technologies",
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
      label: "Skill Areas",
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
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      ),
    },
    expertSkills: {
      label: "Work Domains",
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
      label: "Production Experience",
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
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
    },
  },
  metricValues: {
    technologies: null,
    masteryLevel: 6,
    expertSkills: 2,
    yearsPractice: "1+",
  },
  viewOptions: [
    {
      id: "cards",
      label: "Skills",
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
  ],
  categories: [
    "Frontend Development",
    "Backend Development",
    "Databases & Data",
    "Cloud & DevOps",
    "Platforms & Integrations",
    "Programming Languages",
  ],
  masteryLevels: [],
  categoryPriority: {
    "Frontend Development": 1,
    "Backend Development": 2,
    "Databases & Data": 3,
    "Cloud & DevOps": 4,
    "Platforms & Integrations": 5,
    "Programming Languages": 6,
  },
  timeline: {
    title: "Technology Journey",
    newTechnologies: "",
    data: [],
    categorySkillMap: {},
  },
  expertiseLevels: {
    title: "Core Technical Areas",
  },
  coreCompetencies: {
    title: "Full-Stack Toolkit",
  },
  emptyState: {
    title: "No Skills Found",
    description: "No skills found for this filter category.",
    buttonText: "View All Skills",
  },
  filterMessages: {
    timelineNoData: {
      title: "Technology Journey Not Published",
      description:
        "Skills are shown as an unranked technical toolkit rather than a dated learning history.",
      buttonText: "View All Skills",
    },
    masteryNoData: {
      title: "Proficiency Rankings Removed",
      description:
        "Skills are intentionally presented without subjective percentage rankings.",
      buttonText: "View All Skills",
    },
  },
};

// ============================================
// Achievements / Highlights
// ============================================

export const achievements: Achievement[] = [
  {
    title: "Web Lead — Google Developer Student Club",
    description:
      "Led web initiatives for a 40-member developer community, organized 3 workshops and 2 technical talks, and mentored 10 juniors.",
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
          d="M12 2l2.5 7h7l-5.7 4.1 2.2 6.9L12 16l-6 4 2.2-6.9L2.5 9h7z"
        />
      </svg>
    ),
  },
  {
    title: "Runner-Up — Matrix TechFest Inter-College Hackathon",
    description:
      "Built a healthcare discovery and appointment platform and placed 2nd among 30 teams.",
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
          d="M8 21h8M12 17v4M7 4h10v7a5 5 0 0 1-10 0V4Zm-4 0h4v3a4 4 0 0 1-4-3Zm14 0h4a4 4 0 0 1-4 3V4Z"
        />
      </svg>
    ),
  },
];

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
    title: "Have a product, role, or problem worth discussing?",
    description:
      "I'm open to software engineering opportunities, collaborations, and conversations about building useful products.",
  },
  form: {
    placeholders: {
      name: "Your Name",
      email: "Your Email",
      message: "Tell me what you're building...",
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

// No published posts are included until there is current content worth linking.
// Keeping this empty is preferable to surfacing outdated Next.js 13 articles.
export const blogPosts: BlogPost[] = [];
