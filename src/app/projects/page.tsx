import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work: web apps, APIs, and tools—with stack tags and links to source and demos.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Projects
        </h1>
        <p className="text-zinc-400">
          A curated list you can extend or swap for case studies later. Each
          card pulls from shared data so updates stay in one place.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
