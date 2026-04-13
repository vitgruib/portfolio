import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsInCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Featured",
  description:
    "Highlighted work—products and builds worth opening first.",
};

export default function FeaturedPage() {
  const items = projectsInCategory("featured");

  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Featured
        </h1>
        <p className="text-zinc-400">
          Flagship pieces and the work you want people to see first. In{" "}
          <code className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-sm text-zinc-300">
            src/data/projects.ts
          </code>
          , set{" "}
          <code className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-sm text-zinc-300">
            category: &quot;featured&quot;
          </code>{" "}
          on any project.
        </p>
        <Link
          href="/projects"
          className="inline-block text-sm text-accent transition hover:text-accent-hover focus-visible:focus-ring rounded-sm"
        >
          All projects →
        </Link>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
