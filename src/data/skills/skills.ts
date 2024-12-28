import { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 90 },
      { name: "GSAP", proficiency: 80 },
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
      { name: "AWS", proficiency: 70 },
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
      { name: "JavaScript", proficiency: 85 },
      { name: "HTML", proficiency: 90 },
      { name: "CSS", proficiency: 90 },
      { name: "Python", proficiency: 75 },
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
