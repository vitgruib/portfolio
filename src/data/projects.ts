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
  paperUrl?: string;
  /** Path under /public, e.g. /projects/foo.svg */
  imageSrc: string;
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
    slug: "metabolomics-pasc",
    title: "Metabolomics-Based ML Diagnostics of PASC",
    description:
      "Machine learning pipeline for diagnosing Post-Acute Sequelae of SARS-CoV-2 Infection (Long COVID) from metabolomics data. First-author paper published in Metabolites (MDPI).",
    stack: ["Python", "Machine Learning", "Bioinformatics"],
    githubUrl:
      "https://github.com/Ethanc143/Metabolomics-Based-Machine-Learning-Diagnostics-of-Post-Acute-Sequelae-of-SARS-CoV-2-Infection",
    paperUrl: "https://www.mdpi.com/2218-1989/15/12/801",
    imageSrc: "/projects/metabolomics-pasc.png",
    category: "projects",
  },
  {
    slug: "attrpred",
    title: "AttrPred: Do Face Embeddings Predict Attractiveness?",
    description:
      "Benchmarked 11 face-embedding families (deep identity CNNs, classical methods, CLIP, DINOv2) against 3 human attractiveness-rating datasets using frozen embeddings + ridge regression probes. Found identity-trained embeddings consistently underperform non-identity ones at predicting attractiveness, revealing a pose-invariance/appearance-information tradeoff.",
    stack: ["Python", "PyTorch", "scikit-learn", "Machine Learning", "Computer Vision"],
    githubUrl: "https://github.com/vitgruib/AttrPred",
    imageSrc: "/projects/attrpred.png",
    category: "projects",
  },
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
    slug: "dads",
    title: "DADS: Distraction-Aware Driving Simulator",
    description:
      "Winning submission to Games for Change Game Jam under the category 'Own the Road.' Teaches about the dangers of distracted driving through a driving game that simulates driving distractions with control restrictions.",
    stack: ["Unity", "C#"],
    githubUrl: "https://github.com/Ethanc143/gamejam",
    liveUrl: "https://kyozen1.itch.io/dads-distraction-aware-driving-simulator",
    imageSrc: "/projects/dads.png",
    category: "projects",
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
