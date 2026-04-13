import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsInCategory } from "@/data/projects";

const featured = projectsInCategory("featured");

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <section className="max-w-2xl space-y-7">
        <p className="font-mono text-sm font-medium text-cozy-accent">
          Pull up a chair —
        </p>
        <h1 className="text-4xl font-medium leading-[1.15] sm:text-5xl sm:leading-[1.12]">
          I build thoughtful interfaces and reliable systems.
        </h1>
        <p className="text-lg leading-relaxed text-cozy-muted">
          Short version: I ship web apps, APIs, and small tools—browse{" "}
          <Link
            href="/tools"
            className="font-medium text-cozy-espresso underline decoration-cozy-border decoration-2 underline-offset-4 transition hover:decoration-cozy-accent hover:text-cozy-accent focus-visible:focus-ring rounded-sm"
          >
            Tools
          </Link>{" "}
          and{" "}
          <Link
            href="/funsies"
            className="font-medium text-cozy-espresso underline decoration-cozy-border decoration-2 underline-offset-4 transition hover:decoration-cozy-accent hover:text-cozy-accent focus-visible:focus-ring rounded-sm"
          >
            Funsies
          </Link>
          . Edit copy and projects in{" "}
          <code className="rounded-md bg-cozy-latte/80 px-2 py-0.5 font-mono text-sm text-cozy-mocha">
            src/data/projects.ts
          </code>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools"
            className="rounded-full bg-cozy-accent px-6 py-2.5 text-sm font-semibold text-cozy-cream shadow-cozy-sm transition hover:bg-cozy-accent-hover focus-visible:focus-ring"
          >
            Tools
          </Link>
          <Link
            href="/funsies"
            className="rounded-full border-2 border-cozy-border bg-cozy-cream/50 px-6 py-2.5 text-sm font-semibold text-cozy-espresso transition hover:border-cozy-wood/60 hover:bg-cozy-cream focus-visible:focus-ring"
          >
            Funsies
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-2xl font-medium text-cozy-espresso">
            Featured projects
          </h2>
          <p className="text-sm text-cozy-muted">The house favorites.</p>
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
