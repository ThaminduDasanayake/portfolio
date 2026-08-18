"use client";

import * as React from "react";
import Image from "next/image";
import { SELECTED_PROJECTS, ARCHIVE_PROJECTS } from "@/lib/data";

interface SelectedWorksProps {
  onOpenArchive: () => void;
}

export function SelectedWorks({ onOpenArchive }: SelectedWorksProps) {
  return (
    <section id="works" className="py-16 sm:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex items-baseline gap-6 sm:mb-14 sm:gap-8">
          <h2 className="text-foreground text-xl font-normal tracking-tight sm:text-2xl">
            Selected Works
          </h2>
          <span className="font-mono text-xl tracking-wide uppercase">
            2024 — 2026
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:gap-x-10">
          {SELECTED_PROJECTS.map((project) => {
            const cardContent = (
              <>
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-[5px] shadow-sm">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
                    />
                  ) : (
                    <div className="bg-muted/40 flex h-full w-full items-center justify-center">
                      No Image
                    </div>
                  )}
                </div>

                {/* Card Info Below Media */}
                <div className="mt-4 space-y-1 sm:mt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="group-hover:text-primary text-base font-normal transition-colors sm:text-lg">
                      {project.title}
                    </h3>
                    <span className="shrink-0 font-mono text-base font-normal tabular-nums sm:text-lg">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-base font-normal sm:text-lg">
                    {project.category}
                  </p>
                </div>
              </>
            );

            const linkHref = project.demoUrl || project.repoUrl;

            return linkHref ? (
              <a
                key={project.title}
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group focus-visible:ring-ring block cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2"
              >
                {cardContent}
              </a>
            ) : (
              <article key={project.title} className="group block">
                {cardContent}
              </article>
            );
          })}
        </div>

        {/* View Full Archive Footer CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 pt-8 sm:mt-20 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={onOpenArchive}
            className="group font-heading inline-flex cursor-pointer items-center gap-2 font-semibold tracking-wider"
          >
            <span>
              VIEW FULL PROJECT ARCHIVE ({ARCHIVE_PROJECTS.length || "20+"})
            </span>
            <span className="transition-transform group-hover:translate-x-1.5">
              →
            </span>
          </button>
          <span className="font-mono text-xs tracking-wider uppercase">
            AI • WEB • MOBILE • SYSTEMS
          </span>
        </div>
      </div>
    </section>
  );
}
