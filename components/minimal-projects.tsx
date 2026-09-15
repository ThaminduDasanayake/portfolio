"use client";

import { ArrowUpRightIcon, FolderOpenIcon } from "@phosphor-icons/react";
import { SELECTED_PROJECTS, ARCHIVE_PROJECTS } from "@/lib/data";

interface MinimalProjectsProps {
  onOpenArchive: () => void;
}

export function MinimalProjects({ onOpenArchive }: MinimalProjectsProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
          Projects
        </h2>
        <button
          type="button"
          onClick={onOpenArchive}
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
        >
          <FolderOpenIcon size={14} />
          <span>Archive ({ARCHIVE_PROJECTS.length})</span>
        </button>
      </div>

      <div className="divide-border/40 divide-y">
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
                      className="text-foreground inline-flex items-center gap-1 font-medium transition-colors hover:underline hover:underline-offset-4"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRightIcon
                        size={14}
                        className="text-muted-foreground group-hover:text-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">
                      {project.title}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1 sm:pt-0">
                <span className="text-muted-foreground shrink-0 font-mono text-xs">
                  {project.year}
                </span>
                {project.repoUrl && project.demoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground font-mono text-xs underline underline-offset-2 transition-colors"
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
