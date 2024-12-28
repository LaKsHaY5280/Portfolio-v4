import { LayoutContent } from "./types";
import { myInfo } from "@/data/_myInfo";

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
      { label: "Twitter", href: myInfo.socialLinks.twitter },
    ],
    buttons: [
      { label: "Download Resume", href: myInfo.resumeUrl },
      {
        label: "View Source",
        href: "https://github.com/yourusername/portfolio",
      },
    ],
  },
  button: {
    label: "Get in Touch",
    href: "#contact",
  },
};
