"use client";

import { ArrowUpRight, FolderOpen } from "@phosphor-icons/react";
import { SELECTED_PROJECTS, ARCHIVE_PROJECTS } from "@/lib/data";

interface MinimalProjectsProps {
  onOpenArchive: () => void;
}

export function MinimalProjects({ onOpenArchive }: MinimalProjectsProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Projects
        </h2>
        <button
          type="button"
          onClick={onOpenArchive}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground"
        >
          <FolderOpen size={14} />
          <span>Archive ({ARCHIVE_PROJECTS.length})</span>
        </button>
      </div>

      <div className="divide-y divide-border/40">
        {SELECTED_PROJECTS.map((project) => {
          const mainUrl = project.demoUrl || project.repoUrl;

          return (
            <div
              key={project.title}
              className="group flex flex-col justify-between gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <div className="flex flex-col gap-0.5 sm:max-w-[75%]">
                <div className="flex items-center gap-2">
                  {mainUrl ? (
                    <a
                      href={mainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:underline hover:underline-offset-4"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight
                        size={14}
                        className="text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      />
                    </a>
                  ) : (
                    <span className="font-medium text-foreground">
                      {project.title}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1 sm:pt-0">
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
                {project.repoUrl && project.demoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
                  >
                    code
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
