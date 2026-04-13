import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, focus areas, and how to get in touch—customize this page for your story.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          About
        </h1>
        <p className="text-zinc-400">
          Use this page for your bio, stack, and what you are looking for next.
        </p>
      </header>
      <div className="space-y-4 text-zinc-300 leading-relaxed">
        <p>
          I am a developer who cares about clear UX, maintainable code, and
          shipping iteratively. My recent work spans full-stack web apps and
          small tools that speed up everyday workflows.
        </p>
        <p>
          When I am not coding, I am reading docs, sketching UI ideas, or
          refining deploy pipelines—replace this paragraph with your own
          narrative.
        </p>
      </div>
      <section className="rounded-xl border border-surface-border bg-surface-muted p-6">
        <h2 className="font-mono text-sm font-medium text-accent-hover">
          Contact
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Update the footer links and this block with your GitHub, LinkedIn, or
          preferred channel.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-4 inline-block text-sm font-medium text-accent transition hover:text-accent-hover focus-visible:focus-ring rounded-sm"
        >
          hello@example.com
        </a>
      </section>
    </div>
  );
}
