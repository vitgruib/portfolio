import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsInCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Funsies",
  description:
    "Playful experiments, toys, and things that do not need a business case.",
};

export default function FunsiesPage() {
  const items = projectsInCategory("funsies");

  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Funsies
        </h1>
        <p className="text-zinc-400">
          Side quests and joy projects. Use{" "}
          <code className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-sm text-zinc-300">
            category: &quot;funsies&quot;
          </code>{" "}
          in{" "}
          <code className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-sm text-zinc-300">
            src/data/projects.ts
          </code>{" "}
          so they show up here—not buried in &quot;serious&quot; work.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
