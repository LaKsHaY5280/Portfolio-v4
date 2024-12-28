import { myInfo } from "@/data/_myInfo";

export const aboutContent = {
  introduction: {
    title: `I'm ${myInfo.name.split(" ")[0]}. A full-stack developer, innovator, and tech enthusiast.`,
    bio: [
      "I specialize in designing and developing web and mobile solutions that are both functional and aesthetically pleasing. My expertise spans across frontend and backend technologies, with a strong focus on delivering high-quality user experiences.",
      "With over 5 years of experience in the tech industry, I've worked on diverse projects, from building scalable platforms to creating custom applications that address unique business needs.",
      `Based in ${myInfo.location}, I thrive at the intersection of creativity and logic, leveraging cutting-edge technologies to solve complex problems effectively.`,
    ],
  },
  profile: {
    initials: myInfo.initials,
    spinningText: "WEB/APP DEVELOPER • DESIGNER • TECH ENTHUSIAST • ",
  },
  stats: [
    {
      years: "5+",
      area: "Years Full Stack Development",
      details: "Expert in React, Node.js, and scalable cloud solutions.",
    },
    {
      years: "10+",
      area: "Projects Delivered",
      details: "Ranging from e-commerce platforms to real-time applications.",
    },
    {
      years: "10+",
      area: "Technologies Mastered",
      details: "Constantly evolving skill set to meet modern standards.",
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
