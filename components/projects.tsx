"use client";

import { ArrowUpRightIcon, FolderOpenIcon } from "@phosphor-icons/react";
import { SELECTED_PROJECTS, ARCHIVE_PROJECTS } from "@/lib/data";
import Link from "next/link";
import AnimatedUnderline from "@/components/ui/animated-underline";

interface MinimalProjectsProps {
  onOpenArchive: () => void;
}

export function Projects({ onOpenArchive }: MinimalProjectsProps) {
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
          <FolderOpenIcon weight="duotone" size={14} />
          <span>Archive ({ARCHIVE_PROJECTS.length})</span>
        </button>
      </div>

      <div className="divide-border/40 divide-y">
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
          // const mainUrl = project.demoUrl || project.repoUrl;
          //
          // return (
          //   <div
          //     key={project.title}
          //     className="group flex flex-col justify-between gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-4"
          //   >
          //     <div className="flex flex-col gap-0.5 sm:max-w-[75%]">
          //       <div className="flex items-center gap-2">
          //         {mainUrl ? (
          //           <a
          //             href={mainUrl}
          //             target="_blank"
          //             rel="noopener noreferrer"
          //             className="text-foreground inline-flex items-center gap-1 font-medium transition-colors hover:underline hover:underline-offset-4"
          //           >
          //             <span>{project.title}</span>
          //             <ArrowUpRightIcon
          //               size={14}
          //               className="text-muted-foreground group-hover:text-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          //             />
          //           </a>
          //         ) : (
          //           <span className="text-foreground font-medium">
          //             {project.title}
          //           </span>
          //         }
          //       </div>
          //     </div>
          //
          //     <div className="flex items-center gap-3 pt-1 sm:pt-0">
          //       <span className="text-muted-foreground shrink-0 font-mono text-xs">
          //         {project.year}
          //       </span>
          //     </div>
          //   </div>
          // );
          // })
        ))}
      </div>
    </section>
  );
}
