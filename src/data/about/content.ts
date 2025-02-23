import { myInfo } from "@/data/_myInfo";

export const aboutContent = {
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
      area: "Projects Delivered",
      details:
        "Including e-commerce platforms, social media applications, and agency websites.",
    },
    {
      years: "5+",
      area: "Technologies Mastered",
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
