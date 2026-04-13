import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsInCategory } from "@/data/projects";

const featured = projectsInCategory("featured");

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="max-w-2xl space-y-6">
        <p className="font-mono text-sm text-accent-hover">Hello —</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          I build thoughtful interfaces and reliable systems.
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400">
          This portfolio highlights a few projects: dashboards, APIs, and
          developer tooling. Replace this copy with your story, then update
          links and screenshots in{" "}
          <code className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-sm text-zinc-300">
            src/data/projects.ts
          </code>
          .
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover focus-visible:focus-ring"
          >
            View all projects
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-surface-border px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-surface-muted focus-visible:focus-ring"
          >
            About
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-zinc-100">Featured</h2>
          <Link
            href="/featured"
            className="text-sm text-accent transition hover:text-accent-hover focus-visible:focus-ring rounded-sm"
          >
            Featured page
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
