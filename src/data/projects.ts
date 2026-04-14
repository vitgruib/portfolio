export type ProjectCategory = "featured" | "tools" | "funsies";
export type ProjectStatus = "WIP" | "Fork";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  status?: ProjectStatus;
  githubUrl: string;
  liveUrl?: string;
  /** Path under /public, e.g. /projects/foo.svg */
  imageSrc: string;
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
    slug: "todo",
    title: "Todo AI Extension",
    description:
      "A smart todo list extension for Chrome/Edge with drag-and-drop, sub-steps, deadlines, and a Gemma-backed AI chat companion.",
    stack: ["TypeScript", "React", "Vite", "Gemma AI", "Node.js"],
    status: "WIP",
    githubUrl: "https://github.com/vitgruib/todo",
    imageSrc: "/projects/api.svg",
    category: "tools",
  },
  {
    slug: "shambo",
    title: "Shambo",
    description:
      "Chromium extension that blocks distracting sites, auto-closes tabs, and optionally shames you with TTS—productivity through peer pressure.",
    stack: ["JavaScript", "Chrome MV3"],
    status: "WIP",
    githubUrl: "https://github.com/vitgruib/shambo",
    imageSrc: "/projects/cli.svg",
    category: "tools",
  },
  {
    slug: "human-benchmark-3d",
    title: "Human Benchmark 3D",
    description:
      "VR adaptation of classic Human Benchmark tests built in Unity with XR hand tracking—reaction time, memory, and more in immersive 3D.",
    stack: ["Unity", "C#", "XR Hands", "Meta Quest"],
    githubUrl: "https://github.com/Ethanc143/Human-Benchmark-3D",
    liveUrl: "https://sidequestvr.com/app/45060/vr-memory-test",
    imageSrc: "/projects/api.svg",
    category: "tools",
  },
  {
    slug: "sat0ru",
    title: "SAT0RU",
    description:
      "Fork of reinesana/SAT0RU — a real-time Jujutsu Kaisen cursed technique visualizer. Use hand gestures via MediaPipe to trigger Hollow Purple, Infinite Void, and more in 3D.",
    stack: ["Three.js", "MediaPipe", "Gemini", "JavaScript"],
    status: "Fork",
    githubUrl: "https://github.com/vitgruib/SAT0RU",
    imageSrc: "/projects/funsies.svg",
    category: "funsies",
  },
  {
    slug: "the-hunt-begins",
    title: "The Hunt Begins",
    description:
      "Action boss-fight game built in Unity—dash, attack, and dodge through multi-phase encounters.",
    stack: ["Unity", "C#"],
    githubUrl: "https://github.com/vitgruib/The-Hunt-Begins",
    liveUrl: "https://play.unity.com/en/games/cf737ef2-ad5d-42c0-bf45-ff624616acf0/simple-boss-fights",
    imageSrc: "/projects/funsies.svg",
    category: "funsies",
  },
];

export function projectsInCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
