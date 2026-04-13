import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface-muted transition hover:border-zinc-600">
      <div className="relative aspect-[8/5] w-full overflow-hidden bg-surface">
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={800}
          height={500}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-50">
          {project.title}
        </h2>
        <p className="flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tag) => (
            <li key={tag}>
              <span className="rounded-md bg-surface px-2 py-0.5 font-mono text-xs text-accent-hover">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4 pt-1">
          <a
            href={project.githubUrl}
            className="text-sm font-medium text-accent transition hover:text-accent-hover focus-visible:focus-ring rounded-sm"
            rel="noopener noreferrer"
            target="_blank"
          >
            Source
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="text-sm font-medium text-zinc-300 transition hover:text-white focus-visible:focus-ring rounded-sm"
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
