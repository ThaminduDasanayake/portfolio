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
        <div className="flex items-baseline gap-6 sm:gap-8 mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-foreground">
            Selected Works
          </h2>
          <span className="font-mono text-xl tracking-wide uppercase">
            2024 — 2026
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-12 sm:gap-y-16">
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
                      className="object-cover transition-transform duration-700 ease-out scale-105 group-hover:scale-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted/40">
                      No Image
                    </div>
                  )}
                </div>

                {/* Card Info Below Media */}
                <div className="mt-4 sm:mt-5 space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-normal group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-base sm:text-lg font-normal font-mono tabular-nums shrink-0">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-normal">
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
                className="group block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
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
        <div className="mt-16 sm:mt-20 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button
            type="button"
            onClick={onOpenArchive}
            className="group font-heading font-semibold tracking-wider inline-flex items-center gap-2 cursor-pointer"
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
