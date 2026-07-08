import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-boba-border/90 bg-boba-cream shadow-boba-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-boba-wood/50 hover:shadow-boba hover:rotate-[0.3deg]">
      <div className="relative aspect-[2/1] w-full overflow-hidden bg-boba-latte">
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={600}
          height={300}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <h2 className="font-serif text-lg font-medium text-boba-espresso transition-colors duration-200 group-hover:text-boba-accent">
            {project.title}
          </h2>
          {project.status && (
            <span className="animate-wiggle rounded-full bg-violet-100 px-2 py-px font-mono text-[9px] font-semibold uppercase tracking-wide text-violet-700 transition-transform duration-300 group-hover:scale-110">
              {project.status}
            </span>
          )}
        </div>
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-boba-muted">
            {project.description}
          </p>
        </div>
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.map((tag) => (
            <li key={tag}>
              <span className="animate-bob rounded-full bg-boba-latte/90 px-2.5 py-px font-mono text-[10px] text-boba-mocha transition-all duration-200 hover:bg-boba-wood/25 hover:text-boba-espresso hover:shadow-sm cursor-default">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4 border-t border-boba-border/50 pt-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              className="animate-bob animate-pop text-xs font-semibold text-boba-accent transition-colors duration-200 hover:text-boba-accent-hover focus-visible:focus-ring rounded-sm"
              rel="noopener noreferrer"
              target="_blank"
            >
              Source
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="animate-bob animate-pop text-xs font-semibold text-boba-mocha transition-colors duration-200 hover:text-boba-espresso focus-visible:focus-ring rounded-sm"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          ) : null}
          {project.paperUrl ? (
            <a
              href={project.paperUrl}
              className="animate-bob animate-pop text-xs font-semibold text-boba-mocha transition-colors duration-200 hover:text-boba-espresso focus-visible:focus-ring rounded-sm"
              rel="noopener noreferrer"
              target="_blank"
            >
              Paper
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
