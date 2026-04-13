import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsInCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "CLIs, APIs, and utilities that make day-to-day development smoother.",
};

export default function ToolsPage() {
  const items = projectsInCategory("tools");

  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <p className="font-mono text-sm font-medium text-cozy-accent">
          The workbench
        </p>
        <h1 className="text-3xl sm:text-4xl">Tools</h1>
        <p className="text-cozy-muted">
          Developer tooling, backends, and small utilities. Tag projects with{" "}
          <code className="rounded-md bg-cozy-latte/90 px-2 py-0.5 font-mono text-sm text-cozy-mocha">
            category: &quot;tools&quot;
          </code>{" "}
          in{" "}
          <code className="rounded-md bg-cozy-latte/90 px-2 py-0.5 font-mono text-sm text-cozy-mocha">
            src/data/projects.ts
          </code>
          .
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
