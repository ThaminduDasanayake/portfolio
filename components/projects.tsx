"use client";

import { ArrowUpRightIcon, FolderOpenIcon } from "@phosphor-icons/react";
import { SELECTED_PROJECTS, ARCHIVE_PROJECTS } from "@/lib/data";
import AnimatedUnderline from "@/components/ui/animated-underline";

interface MinimalProjectsProps {
  onOpenArchive: () => void;
}

export function Projects({ onOpenArchive }: MinimalProjectsProps) {
  return (
    <section className="mb-6 w-full gap-3.5">
      <div className="flex items-center justify-between">
        <h2 className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
          Projects
        </h2>
        <button
          type="button"
          onClick={onOpenArchive}
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
        >
          <FolderOpenIcon weight="duotone" size={14} />
          <span>Archive ({ARCHIVE_PROJECTS.length})</span>
        </button>
      </div>

      <div className="space-y-1.5">
        {SELECTED_PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex items-baseline justify-between gap-4 py-1"
          >
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-w-0 items-center gap-1.5"
            >
              <AnimatedUnderline as="h2" showTrack className="text-sm">
                <span>{project.title}</span>
              </AnimatedUnderline>
              <ArrowUpRightIcon
                size={14}
                className="text-muted-foreground group-hover:text-foreground shrink-0 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </a>

            <span className="text-muted-foreground shrink-0 text-xs tabular-nums sm:text-sm">
              {project.timeline}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
