"use client";

import { useState } from "react";
import type { ProjectCategory } from "@/data/projects";
import { projectsInCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const tabs: { key: ProjectCategory; label: string }[] = [
  { key: "projects", label: "Projects" },
  { key: "just-for-fun", label: "Just For Fun" },
];

export function ProjectFilter() {
  const [active, setActive] = useState<ProjectCategory>("projects");
  const items = projectsInCategory(active);

  return (
    <section className="space-y-8">
      <div
        className="inline-flex rounded-full border border-boba-border bg-boba-cream/60 p-1"
        role="tablist"
        aria-label="Project categories"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              active === tab.key
                ? "bg-boba-accent text-boba-cream shadow-sm"
                : "text-boba-muted hover:text-boba-espresso"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
