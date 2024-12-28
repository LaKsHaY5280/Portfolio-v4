import { ContactContent } from "./types";
import { myInfo } from "@/data/_myInfo";

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
