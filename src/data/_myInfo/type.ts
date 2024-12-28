export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface ButtonLabels {
  contact: string;
  projects: string;
}

export interface MyInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  resumeUrl: string;
  initials: string;
  socialLinks: SocialLinks;
  buttons: ButtonLabels;
}
