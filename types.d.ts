export interface IProject {
  project: {
    title: string;
    description: string;
    images: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  index: number;
}

export interface IDetails {
  project: {
    title: string;
    description: string;
    images: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    skills: string[];
    technologies: string[];
    staticImgs: {
      mobile1: string;
      mobile2: string;
      mobile3: string;
      tablet1: string;
      tablet2: string;
      tablet3: string;
      desktop1: string;
      desktop2: string;
      desktop3: string;
    };
    background: string;
  };
  index: number;
}

export interface IProjects {
  projects: {
    title: string;
    description: string;
    images: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    skills: string[];
    technologies: string[];
    staticImgs: {
      mobile1: string;
      mobile2: string;
      mobile3: string;
      tablet1: string;
      tablet2: string;
      tablet3: string;
      desktop1: string;
      desktop2: string;
      desktop3: string;
    };
    background: string;
  }[];
}
