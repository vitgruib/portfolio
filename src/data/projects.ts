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
      "Machine learning pipeline for diagnosing Post-Acute Sequelae of SARS-CoV-2 Infection (Long COVID) using metabolomic data. A proof of concept that molecular descriptors calculated using E-Dragon can work to build assay-agnostic diagnostic algorithms with disease differentiating power. First-author paper published in Metabolites.",
    stack: ["Python", "Machine Learning", "Bioinformatics"],
    githubUrl:
      "https://github.com/Ethanc143/Metabolomics-Based-Machine-Learning-Diagnostics-of-Post-Acute-Sequelae-of-SARS-CoV-2-Infection",
    paperUrl: "https://www.mdpi.com/2218-1989/15/12/801",
    imageSrc: "/projects/metabolomics-pasc.png",
    category: "research",
  },
  {
    slug: "sipacl",
    title: "Prioritized Level Replay in RL Driving Environments",
    description:
      "Prioritized level replay modifications to standard PPO reinforcement learning algorithms using autonomous driving agents. Prioritized level replay trained RL agents beat those trained without it with p < 0.05 and win in 21 of 30 tested training seeds.",
    stack: ["Python", "Reinforcement Learning", "PPO", "Autonomous Driving"],
    imageSrc: "/projects/sipacl.png",
    category: "research",
  },
  {
    slug: "attrpred",
    title: "Do Face Embeddings Predict Attractiveness?",
    description:
      "Benchmarked 11 face-embedding families (deep identity CNNs, classical methods, CLIP, DINOv2) against 3 human attractiveness-rating datasets using frozen embeddings and ridge regression. Found that embeddings trained to capture identity did consistently worse at predicting attractiveness than those that were not, pointing to a tradeoff between pose invariance and attractiveness predictivity.",
    stack: ["Python", "PyTorch", "scikit-learn", "Computer Vision"],
    githubUrl: "https://github.com/vitgruib/AttrPred",
    imageSrc: "/projects/attrpred.png",
    category: "research",
  },

  // Tools
  {
    slug: "human-benchmark-3d",
    title: "Human Benchmark 3D",
    description:
      "Virtual reality edition of classic block-tapping memory tests utilizing blocks of various heights. Uses Firebase to record user performance and provide comparative feedback to other users of the same age bracket. Downloaded over 1,800 times on SideQuest.",
    stack: ["C#", "Unity", "VR", "Firebase"],
    githubUrl: "https://github.com/Ethanc143/Human-Benchmark-3D",
    liveUrl: "https://sidequestvr.com/app/45060/vr-memory-test",
    imageSrc: "/projects/human-benchmark-3d.png",
    category: "tools",
  },
  {
    slug: "shambo",
    title: "Shambo",
    description:
      "Featured five-star extension on the Chrome Web Store. Blocks distracting sites and auto-closes tabs, with support for custom subpaths. Utilizes psychology (optionally) to fight procrastination by leaving snarky comments each time users try to open unproductive sites on their custom blocklist.",
    stack: ["JavaScript", "Chrome MV3"],
    githubUrl: "https://github.com/vitgruib/shambo",
    liveUrl:
      "https://chromewebstore.google.com/detail/shambo-%E2%80%94-website-blocker/nnjocfponpkmpkldmkfalljmacbbjkao",
    imageSrc: "/projects/shambo.png",
    category: "tools",
  },
  {
    slug: "todo",
    title: "Toto Simple",
    description:
      "Five-star Chrome Web Store extension designed around minimizing friction, with proactive reminders, one-click snoozing, urgent-task flags, and cloud sync. Originally built around AI task organization, but it made everything cluttered. An important lesson that AI doesn't belong in everything.",
    stack: ["TypeScript", "React", "Chrome MV3"],
    githubUrl: "https://github.com/vitgruib/todo",
    liveUrl:
      "https://chromewebstore.google.com/detail/toto-simple-todo-due-remi/glnmgmemmaedcgmnbbipllpfikpnmbjl",
    imageSrc: "/projects/toto-simple.png",
    category: "tools",
  },

  // Funsies
  {
    slug: "dads",
    title: "DADS: Distraction-Aware Driving Simulator",
    description:
      "Winning submission to the Games for Change Game Jam in the 'Own the Road' category. A driving game that warns about the dangers of distracted driving by making users contend with simulated distractions while they try to drive safely on the road. Features summaries of risky driving caused by distracted driving.",
    stack: ["C#", "Unity"],
    githubUrl: "https://github.com/Ethanc143/gamejam",
    liveUrl: "https://kyozen1.itch.io/dads-distraction-aware-driving-simulator",
    imageSrc: "/projects/dads.png",
    category: "funsies",
  },
  {
    slug: "party-box",
    title: "Party Box",
    description:
      "Most party game apps are ruined by forced ads and paywalled categories. Party Box provides multiple party games such as charades and imposter bundled into one offline app without any content restrictions.",
    stack: ["Kotlin", "Android"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.vitgrub.passandplaypartygames",
    imageSrc: "/projects/party-box.png",
    category: "funsies",
  },
  {
    slug: "spider-party",
    title: "Spider Party",
    description:
      "Web version of Party Box (see what I did there). Free party games that run on any browser on mobile or laptop. Minimizing barriers further: no signup, no paywalls, no ads, no install—just a link.",
    stack: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/vitgruib/spider-party",
    liveUrl: "https://vitgruib.github.io/spider-party/",
    imageSrc: "/projects/spider-party.png",
    category: "funsies",
  },
  {
    slug: "sat0ru",
    title: "SAT0RU",
    description:
      "Fork of reinesana/SAT0RU, a real-time Jujutsu Kaisen cursed technique visualizer that reads hand gestures with MediaPipe. Added gesture smoothing for stability, flick detection to detect dynamic hand gestures, and a detailed debug menu.",
    stack: ["JavaScript", "Three.js", "MediaPipe"],
    status: "Fork",
    githubUrl: "https://github.com/vitgruib/SAT0RU",
    imageSrc: "/projects/sat0ru.png",
    category: "funsies",
  },
];

export function projectsInCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
