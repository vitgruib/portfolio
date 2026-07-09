"use client";

import { useState, useCallback } from "react";
import type { ProjectCategory } from "@/data/projects";
import { projectsInCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { LiquidFill } from "./LiquidFill";

const tabConfig: Record<ProjectCategory, { label: string; tint: string }> = {
  research: { label: "Research", tint: "#f5ebe0" },
  tools: { label: "Tools", tint: "#e8d5c4" },
  funsies: { label: "Funsies", tint: "#e6d9f2" },
};

const tabKeys: ProjectCategory[] = ["research", "tools", "funsies"];

export function ProjectFilter() {
  const [active, setActive] = useState<ProjectCategory>("research");
  const [pouring, setPouring] = useState<ProjectCategory | null>(null);

  const items = projectsInCategory(active);

  function handleSwitch(key: ProjectCategory) {
    if (key === active || pouring) return;
    setPouring(key);
  }

  const onPourComplete = useCallback(() => {
    if (!pouring) return;
    document.body.style.backgroundColor = tabConfig[pouring].tint;
    setActive(pouring);
    setPouring(null);
  }, [pouring]);

  return (
    <section className="space-y-8">
      {pouring && (
        <LiquidFill
          color={tabConfig[pouring].tint}
          onComplete={onPourComplete}
        />
      )}

      <p
        className="animate-fade-up max-w-2xl text-base leading-relaxed text-boba-muted"
        style={{ animationDelay: "0.1s" }}
      >
        Hey! I&apos;m Ethan, an incoming freshman at Berkeley studying EECS.
        Here&apos;s some of the different projects I worked on: formal research
        projects, useful tools I made based on needs I felt or saw, and a bunch
        of fun gimmicky games I made. Explore at your leisure :)
      </p>

      <div
        className="animate-fade-up inline-flex gap-1 rounded-full border border-boba-border bg-boba-cream/60 p-1 shadow-boba-sm"
        style={{ animationDelay: "0.15s" }}
        role="tablist"
        aria-label="Project categories"
      >
        {tabKeys.map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            onClick={() => handleSwitch(key)}
            className={`animate-pop relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              active === key
                ? "bg-boba-accent text-boba-cream shadow-md scale-[1.03]"
                : "text-boba-muted hover:text-boba-espresso hover:bg-boba-latte/40 hover:scale-[1.01]"
            }`}
          >
            {tabConfig[key].label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((project, i) => (
          <div
            key={`${active}-${project.slug}`}
            className="animate-slide-in"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
