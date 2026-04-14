import { ProjectFilter } from "@/components/ProjectFilter";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <section className="max-w-2xl space-y-7">
        <p className="font-mono text-sm font-medium text-boba-accent">
          Fresh pour, no wait —
        </p>
        <h1 className="text-4xl font-medium leading-[1.15] sm:text-5xl sm:leading-[1.12]">
          I build thoughtful interfaces and reliable systems.
        </h1>
        <p className="text-lg leading-relaxed text-boba-muted">
          Apps, extensions, games, and experiments — browse what I&apos;ve been
          brewing below.
        </p>
      </section>

      <ProjectFilter />
    </div>
  );
}
