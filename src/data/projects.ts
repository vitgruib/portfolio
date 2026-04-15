export type ProjectCategory = "projects" | "just-for-fun";
export type ProjectStatus = "WIP" | "Fork";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  status?: ProjectStatus;
  githubUrl?: string;
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
      "A smart todo list extension for Chrome/Edge with drag-and-drop, deadlines, and a Gemma-backed AI chat companion.",
    stack: ["TypeScript", "React", "Vite", "Gemma AI", "Node.js"],
    status: "WIP",
    githubUrl: "https://github.com/vitgruib/todo",
    imageSrc: "/projects/api.svg",
    category: "projects",
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
    category: "projects",
  },
  {
    slug: "human-benchmark-3d",
    title: "Human Benchmark 3D",
    description:
      "VR adaptation of classic block tapping memory tests built in Unity with XR hand tracking in immersive 3D.",
    stack: ["Unity", "C#", "XR Hands", "Meta Quest"],
    githubUrl: "https://github.com/Ethanc143/Human-Benchmark-3D",
    liveUrl: "https://sidequestvr.com/app/45060/vr-memory-test",
    imageSrc: "/projects/api.svg",
    category: "projects",
  },
  {
    slug: "sat0ru",
    title: "SAT0RU",
    description:
      "Fork of reinesana/SAT0RU — a real-time Jujutsu Kaisen cursed technique visualizer reading hand gestures via MediaPipe to trigger Hollow Purple, Infinite Void, and more in 3D. Added flick detection, background track, and hand-tracking debug UI.",
    stack: ["Three.js", "MediaPipe", "Gemini", "JavaScript"],
    status: "Fork",
    githubUrl: "https://github.com/vitgruib/SAT0RU",
    imageSrc: "/projects/funsies.svg",
    category: "just-for-fun",
  },
  {
    slug: "simple-boss-fights",
    title: "Simple Boss Fights",
    description:
      "Action boss-fight game built in Unity—dash, attack, and dodge through exciting multi-phase encounters.",
    stack: ["Unity", "C#"],
    githubUrl: "https://github.com/vitgruib/The-Hunt-Begins",
    liveUrl: "https://play.unity.com/en/games/cf737ef2-ad5d-42c0-bf45-ff624616acf0/simple-boss-fights",
    imageSrc: "/projects/funsies.svg",
    category: "just-for-fun",
  },
  {
    slug: "party-box",
    title: "Charades & Imposter: Party Box",
    description:
      "Most 'free' party games are ruined by forced ads and paywalled categories. Party Box is different: this app was built as a clean, high-performance alternative where everything—every category, every mode, and every feature—is unlocked from the moment you hit download.",
    stack: ["Android", "Kotlin"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.vitgrub.passandplaypartygames",
    imageSrc: "/projects/funsies.svg",
    category: "just-for-fun",
  },
];

export function projectsInCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
