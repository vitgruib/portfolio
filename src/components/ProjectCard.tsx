import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-cozy-border/90 bg-cozy-cream shadow-cozy-sm transition duration-300 hover:border-cozy-wood/50 hover:shadow-cozy">
      <div className="relative aspect-[8/5] w-full overflow-hidden bg-cozy-latte">
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={800}
          height={500}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <h2 className="font-serif text-xl font-medium text-cozy-espresso">
            {project.title}
          </h2>
          {project.status && (
            <span
              className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${
                project.status === "Fork"
                  ? "bg-violet-100 text-violet-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {project.status}
            </span>
          )}
        </div>
        <p className="flex-1 text-sm leading-relaxed text-cozy-muted">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tag) => (
            <li key={tag}>
              <span className="rounded-full bg-cozy-latte/90 px-3 py-0.5 font-mono text-xs text-cozy-mocha">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-5 border-t border-cozy-border/60 pt-4">
          <a
            href={project.githubUrl}
            className="text-sm font-semibold text-cozy-accent transition hover:text-cozy-accent-hover focus-visible:focus-ring rounded-sm"
            rel="noopener noreferrer"
            target="_blank"
          >
            Source
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="text-sm font-semibold text-cozy-mocha transition hover:text-cozy-espresso focus-visible:focus-ring rounded-sm"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
