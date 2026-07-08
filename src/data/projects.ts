export type ProjectCategory = "research" | "tools" | "funsies";
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
  // Research
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
    category: "research",
  },
  {
    slug: "sipacl",
    title: "SIPACL: Prioritized Level Replay for RL Driving Agents",
    description:
      "Reinforcement learning research on autonomous driving agents. The key result: paired by seed, driving policies trained with Prioritized Level Replay (PLR) beat those trained without it at p < 0.05 (paired-t p = 0.033, Wilcoxon p = 0.036, PLR wins 21 of 30 seeds). The code isn't open source.",
    stack: ["Python", "Reinforcement Learning", "Autonomous Driving"],
    imageSrc: "/projects/sipacl.png",
    category: "research",
  },
  {
    slug: "attrpred",
    title: "AttrPred: Do Face Embeddings Predict Attractiveness?",
    description:
      "Benchmarked 11 face-embedding families (deep identity CNNs, classical methods, CLIP, DINOv2) against 3 human attractiveness-rating datasets using frozen embeddings and ridge regression probes. Identity-trained embeddings did consistently worse at predicting attractiveness than non-identity ones, which points to a tradeoff between pose invariance and appearance information.",
    stack: ["Python", "PyTorch", "scikit-learn", "Machine Learning", "Computer Vision"],
    githubUrl: "https://github.com/vitgruib/AttrPred",
    imageSrc: "/projects/attrpred.png",
    category: "research",
  },

  // Tools
  {
    slug: "human-benchmark-3d",
    title: "Human Benchmark 3D",
    description:
      "VR take on the classic block-tapping memory tests, built in Unity with hand tracking for Meta Quest. Published on SideQuest.",
    stack: ["Unity", "C#", "VR", "Meta Quest"],
    githubUrl: "https://github.com/Ethanc143/Human-Benchmark-3D",
    liveUrl: "https://sidequestvr.com/app/45060/vr-memory-test",
    imageSrc: "/projects/human-benchmark-3d.png",
    category: "tools",
  },
  {
    slug: "shambo",
    title: "Shambo",
    description:
      "Chromium extension that blocks distracting sites and auto-closes tabs. If you slip up, it can call you out loud with text-to-speech. The idea is to fight procrastination with both hard blocks and a little psychological pressure.",
    stack: ["JavaScript", "Chrome MV3"],
    githubUrl: "https://github.com/vitgruib/shambo",
    liveUrl:
      "https://chromewebstore.google.com/detail/shambo-%E2%80%94-website-blocker/nnjocfponpkmpkldmkfalljmacbbjkao",
    imageSrc: "/projects/shambo.png",
    category: "tools",
  },
  {
    slug: "todo",
    title: "Todo AI Extension",
    description:
      "A todo list extension for Chrome and Edge with drag-and-drop, deadlines, and a Gemma-backed AI chat companion.",
    stack: ["TypeScript", "React", "Vite", "Gemma AI", "Node.js"],
    githubUrl: "https://github.com/vitgruib/todo",
    imageSrc: "/projects/todo-wip.svg",
    category: "tools",
  },

  // Funsies
  {
    slug: "dads",
    title: "DADS: Distraction-Aware Driving Simulator",
    description:
      "Winning submission to the Games for Change Game Jam in the 'Own the Road' category. A driving game about the dangers of distracted driving, where distractions take over your controls while you try to stay on the road.",
    stack: ["Unity", "C#"],
    githubUrl: "https://github.com/Ethanc143/gamejam",
    liveUrl: "https://kyozen1.itch.io/dads-distraction-aware-driving-simulator",
    imageSrc: "/projects/dads.png",
    category: "funsies",
  },
  {
    slug: "party-box",
    title: "Charades & Imposter: Party Box",
    description:
      "Most 'free' party games get ruined by forced ads and paywalled categories. Party Box is different. Every category, mode, and feature is unlocked from the moment you download it.",
    stack: ["Android", "Kotlin"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.vitgrub.passandplaypartygames",
    imageSrc: "/projects/party-box.png",
    category: "funsies",
  },
  {
    slug: "spider-party",
    title: "Spider-Party",
    description:
      "The web version of Party Box. Free party games (Charades, Imposter, Spin the Wheel, and Wavelength) that run in any browser on a phone or laptop. No install, no signup, no ads, no paywalled categories. Share a link and everyone's in.",
    stack: ["JavaScript", "Web", "GitHub Pages"],
    githubUrl: "https://github.com/vitgruib/spider-party",
    liveUrl: "https://vitgruib.github.io/spider-party/",
    imageSrc: "/projects/spider-party.png",
    category: "funsies",
  },
  {
    slug: "sat0ru",
    title: "SAT0RU",
    description:
      "Fork of reinesana/SAT0RU, a real-time Jujutsu Kaisen cursed technique visualizer that reads hand gestures with MediaPipe. I added gesture smoothing, flick detection, and a detailed hand-tracking debug menu.",
    stack: ["Three.js", "MediaPipe", "JavaScript"],
    status: "Fork",
    githubUrl: "https://github.com/vitgruib/SAT0RU",
    imageSrc: "/projects/sat0ru.png",
    category: "funsies",
  },
];

export function projectsInCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
