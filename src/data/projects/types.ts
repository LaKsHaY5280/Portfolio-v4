export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  year: string;
  githubUrl: string;
  liveUrl?: string;
  image: string;
  images?: string[];
  featured: boolean;
}

export interface ProjectsContent {
  header: {
    title: string;
    description: string;
  };
  buttons: {
    github: string;
    live: string;
    viewAll: string;
    showLess: string;
  };
}
