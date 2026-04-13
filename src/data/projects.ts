export type ProjectCategory = "featured" | "tools" | "funsies";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  /** Path under /public, e.g. /projects/foo.svg */
  imageSrc: string;
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
    slug: "analytics-dashboard",
    title: "Analytics dashboard",
    description:
      "A responsive dashboard for exploring metrics, cohorts, and exports—built to stay fast with large datasets.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://vercel.com",
    imageSrc: "/projects/dashboard.svg",
    category: "featured",
  },
  {
    slug: "task-api",
    title: "Task API",
    description:
      "REST-style API with validation, auth-ready routes, and OpenAPI docs for a task management backend.",
    stack: ["Node.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com",
    imageSrc: "/projects/api.svg",
    category: "tools",
  },
  {
    slug: "dev-cli",
    title: "Dev workflow CLI",
    description:
      "A small CLI that scaffolds projects and runs checks locally—fewer copy-paste steps between repos.",
    stack: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://npmjs.com",
    imageSrc: "/projects/cli.svg",
    category: "tools",
  },
  {
    slug: "pixel-doodle",
    title: "Pixel doodle pad",
    description:
      "A tiny canvas toy—draw with the keyboard, export a PNG, and share gloriously unserious art.",
    stack: ["Canvas API", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://vercel.com",
    imageSrc: "/projects/funsies.svg",
    category: "funsies",
  },
];

export function projectsInCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
