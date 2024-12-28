export interface ContactContent {
  title: string;
  email: {
    label: string;
    value: string;
  };
  location: {
    label: string;
    value: string;
  };
  connect: {
    title: string;
    description: string;
  };
  form: {
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    button: {
      default: string;
      sending: string;
    };
  };
}

export interface SocialLink {
  url: string;
  platform: "github" | "linkedin" | "twitter";
}
