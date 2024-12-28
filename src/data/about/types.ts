export interface AboutContent {
  introduction: {
    title: string;
    bio: string[];
  };
  profile: {
    initials: string;
    spinningText: string;
  };
  stats: Array<{
    years: string;
    area: string;
    details: string;
  }>;
  cta: {
    title: string;
    description: string;
    resumeUrl: string;
    buttons: {
      resume: string;
      connect: string;
    };
  };
}
