export type ProjectCategory = "projects" | "just-for-fun";
export type ProjectStatus = "Fork";

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
    githubUrl: "https://github.com/vitgruib/todo",
    imageSrc: "/projects/todo-wip.svg",
    category: "projects",
  },
  {
    slug: "shambo",
    title: "Shambo",
    description:
      "Chromium extension that blocks distracting sites, auto-closes tabs, and optionally shames you with TTS, pincering loafing with hard restrictions and psychological pressure.",
    stack: ["JavaScript", "Chrome MV3"],
    liveUrl:
      "https://chromewebstore.google.com/detail/shambo-%E2%80%94-website-blocker/nnjocfponpkmpkldmkfalljmacbbjkao",
    imageSrc: "/projects/shambo.png",
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
    imageSrc: "/projects/human-benchmark-3d.png",
    category: "projects",
  },
  {
    slug: "sat0ru",
    title: "SAT0RU",
    description:
      "Fork of reinesana/SAT0RU — a real-time Jujutsu Kaisen cursed technique visualizer reading hand gestures via MediaPipe. Added robust gesture smoothing, flick detection, and a thorough hand-tracking debug menu.",
    stack: ["Three.js", "MediaPipe", "JavaScript"],
    status: "Fork",
    githubUrl: "https://github.com/vitgruib/SAT0RU",
    imageSrc: "/projects/sat0ru.png",
    category: "just-for-fun",
  },
  {
    slug: "spider-party",
    title: "Spider-Party",
    description:
      "The web alternative to Party Box: free party games—Charades, Imposter, Spin the Wheel, and Wavelength—that run in any browser on phones or laptops. No install, no signup, no ads, and no paywalled categories. Share a link and everyone's in.",
    stack: ["JavaScript", "Web", "GitHub Pages"],
    githubUrl: "https://github.com/vitgruib/spider-party",
    liveUrl: "https://vitgruib.github.io/spider-party/",
    imageSrc: "/projects/spider-party.png",
    category: "just-for-fun",
  },
  {
    slug: "party-box",
    title: "Charades & Imposter: Party Box",
    description:
      "Most 'free' party games are ruined by forced ads and paywalled categories. Party Box is different: this app was built as a clean, high-performance alternative where everything—every category, every mode, and every feature—is unlocked from the moment you hit download.",
    stack: ["Android", "Kotlin"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.vitgrub.passandplaypartygames",
    imageSrc: "/projects/party-box.png",
    category: "just-for-fun",
  },
];

export function projectsInCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
