"use client"

import * as React from "react"
import Image from "next/image"
import {
  ArrowUpRight,
  GithubLogo,
  Sun,
  CloudRain,
  CloudSnow,
  Sparkle,
} from "@phosphor-icons/react"
import { SELECTED_PROJECTS, Project } from "@/lib/data"

interface SelectedWorksProps {
  onOpenArchive: () => void
}

export function SelectedWorks({ onOpenArchive }: SelectedWorksProps) {
  return (
    <section id="works" className="py-20 sm:py-28 border-t border-border/60">
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1560px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 sm:mb-16 gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Selected Works
          </h2>
          <span className="font-mono text-xs sm:text-sm text-muted-foreground tracking-widest uppercase">
            2024 — 2026
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 sm:gap-y-16">
          {SELECTED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`group flex flex-col ${
                project.type === "glodwater" ? "md:col-span-2" : ""
              }`}
            >
              {/* Media Container based on Type */}
              <div
                className={`relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card shadow-sm mb-4 transition-all duration-300 group-hover:border-foreground/40 ${
                  project.type === "glodwater"
                    ? "aspect-[16/9] sm:aspect-[21/9]"
                    : "aspect-[16/10]"
                }`}
              >
                {/* 1. Interactive N1 Widgets Showcase Card (Image 3 Left) */}
                {project.type === "interactive-widget" && (
                  <div className="w-full h-full bg-[#e6e8ec] dark:bg-[#ebecef] text-neutral-900 p-4 sm:p-6 flex flex-col justify-between select-none">
                    {/* Top Dials Row */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2">
                      {/* Dial 1: Compass / Star Dial */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg border border-neutral-800">
                        <div className="absolute top-1 text-[8px] font-mono text-neutral-400">N</div>
                        <div className="absolute bottom-1 text-[8px] font-mono text-rose-500 font-bold">S</div>
                        <div className="absolute left-1 text-[8px] font-mono text-neutral-400">W</div>
                        <div className="absolute right-1 text-[8px] font-mono text-neutral-400">E</div>
                        {/* Needle */}
                        <div className="w-8 h-8 rounded-full border border-dashed border-neutral-600 flex items-center justify-center transform rotate-45 transition-transform group-hover:rotate-90 duration-700">
                          <Sparkle size={14} weight="fill" className="text-white" />
                        </div>
                      </div>

                      {/* Dial 2: Analog Clock Dial */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg border border-neutral-800">
                        {/* Clock Hands */}
                        <div className="absolute w-6 h-0.5 bg-white origin-left rounded-full transform -rotate-30 left-1/2"></div>
                        <div className="absolute w-4 h-1 bg-white origin-left rounded-full transform rotate-45 left-1/2"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 z-10"></div>
                        <div className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                      </div>
                    </div>

                    {/* Bottom Weather Widget Card */}
                    <div className="bg-neutral-900 text-white rounded-2xl p-3 sm:p-4 shadow-xl border border-neutral-800 max-w-sm mx-auto w-full">
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2">
                        <div className="flex items-center gap-2">
                          <CloudRain size={22} weight="fill" className="text-sky-400" />
                          <div>
                            <div className="font-mono text-lg sm:text-xl font-bold leading-none">
                              30°
                            </div>
                            <div className="font-mono text-[9px] text-neutral-400">
                              H 35° L 16°
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-[10px] font-semibold">Toronto / CMB</div>
                          <div className="font-mono text-[8px] text-neutral-400">Partly Cloudy</div>
                        </div>
                      </div>

                      {/* 5-Day Forecast Dots */}
                      <div className="grid grid-cols-6 gap-1 text-center font-mono text-[8px] text-neutral-400">
                        <div>
                          <div>WED</div>
                          <CloudRain size={10} className="mx-auto my-0.5 text-neutral-300" />
                          <div className="text-white">-3°</div>
                        </div>
                        <div>
                          <div>THU</div>
                          <CloudSnow size={10} className="mx-auto my-0.5 text-neutral-300" />
                          <div className="text-white">-1°</div>
                        </div>
                        <div>
                          <div>FRI</div>
                          <CloudSnow size={10} className="mx-auto my-0.5 text-neutral-300" />
                          <div className="text-white">-9°</div>
                        </div>
                        <div>
                          <div>SAT</div>
                          <Sun size={10} className="mx-auto my-0.5 text-amber-400" />
                          <div className="text-white">-4°</div>
                        </div>
                        <div>
                          <div>SUM</div>
                          <Sun size={10} className="mx-auto my-0.5 text-amber-400" />
                          <div className="text-white">-4°</div>
                        </div>
                        <div>
                          <div>MON</div>
                          <CloudRain size={10} className="mx-auto my-0.5 text-neutral-300" />
                          <div className="text-white">-6°</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. MacBook Screen H23' Mockup (Image 3 Right) */}
                {project.type === "macbook" && (
                  <div className="w-full h-full bg-[#18191c] text-white flex items-center justify-center p-4 relative overflow-hidden select-none">
                    {/* Laptop Screen Body */}
                    <div className="relative w-[85%] sm:w-[75%] aspect-[16/10] bg-[#0c0d0f] rounded-t-xl border-t-[3px] border-x-[3px] border-neutral-700 p-2 shadow-2xl flex items-center justify-center">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-b-md"></div>

                      {/* Display content (Orange Pixel Art H23') */}
                      <div className="w-full h-full bg-[#ff3300] rounded-lg flex items-center justify-center shadow-inner transition-transform group-hover:scale-105 duration-500">
                        <div className="font-mono text-3xl sm:text-5xl font-black tracking-widest text-black select-none drop-shadow">
                          H23&apos;
                        </div>
                      </div>
                    </div>
                    {/* Laptop Base Bottom Lip */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[92%] sm:w-[82%] h-2.5 bg-neutral-700 rounded-b-lg border-t border-neutral-600 shadow-md"></div>
                  </div>
                )}

                {/* 3. Glod Water Cans Mockup (Image 3 Bottom Full Width) */}
                {project.type === "glodwater" && (
                  <div className="w-full h-full bg-[#d8dadf] dark:bg-[#e0e2e7] text-neutral-900 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden select-none">
                    {/* Ambient studio backdrop */}
                    <div className="flex items-center justify-center gap-6 sm:gap-12 scale-90 sm:scale-100 transition-transform group-hover:scale-105 duration-700">
                      {/* Can 1: GLOD CAN */}
                      <div className="relative w-24 sm:w-32 h-44 sm:h-56 rounded-[28px] bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 border border-neutral-400/80 shadow-2xl flex flex-col items-center justify-between p-3.5">
                        {/* Can Lid Rim */}
                        <div className="w-16 sm:w-20 h-2 bg-neutral-400 rounded-full border border-neutral-300"></div>

                        {/* Pixel Typography */}
                        <div className="text-center space-y-1">
                          <div className="w-2.5 h-2.5 mx-auto bg-emerald-500 rounded-sm transform rotate-45"></div>
                          <div className="font-mono text-xl sm:text-2xl font-black tracking-widest text-neutral-800 rotate-90 my-6">
                            GLOD
                          </div>
                        </div>

                        {/* Can Bottom */}
                        <div className="w-14 sm:w-16 h-1.5 bg-neutral-400 rounded-full"></div>
                      </div>

                      {/* Can 2: GLOD WAT3R */}
                      <div className="relative w-24 sm:w-32 h-44 sm:h-56 rounded-[28px] bg-gradient-to-r from-neutral-200 via-white to-neutral-300 border border-neutral-400/80 shadow-2xl flex flex-col items-center justify-between p-3.5">
                        {/* Can Lid Rim */}
                        <div className="w-16 sm:w-20 h-2 bg-neutral-300 rounded-full border border-neutral-200"></div>

                        {/* Pixel Typography */}
                        <div className="text-center space-y-1">
                          <div className="font-mono text-xs font-bold tracking-widest text-neutral-700">
                            GLOD
                          </div>
                          <div className="font-mono text-sm font-black tracking-widest text-neutral-900">
                            WAT3R
                          </div>
                        </div>

                        {/* Can Bottom */}
                        <div className="w-14 sm:w-16 h-1.5 bg-neutral-300 rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-6 font-mono text-xs text-neutral-600 uppercase tracking-widest">
                      3D Generative Product System
                    </div>
                  </div>
                )}

                {/* 4. Real Project Images */}
                {project.type === "image" && project.image && (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-mono font-semibold text-black shadow-lg hover:bg-neutral-200 transition-transform active:scale-95"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={14} weight="bold" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900/90 border border-neutral-700 px-4 py-2 text-xs font-mono font-semibold text-white shadow-lg hover:bg-neutral-800 transition-transform active:scale-95"
                    >
                      <GithubLogo size={14} weight="bold" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Card Metadata (Matching Image 3 text styling) */}
              <div className="flex items-baseline justify-between pt-1">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-xs sm:text-sm text-muted-foreground tracking-wider">
                  {project.year}
                </span>
              </div>

              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                {project.category}
              </p>
            </article>
          ))}
        </div>

        {/* View Full Archive Footer CTA */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button
            type="button"
            onClick={onOpenArchive}
            className="group font-mono text-xs sm:text-sm font-semibold tracking-wider text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <span>VIEW FULL PROJECT ARCHIVE (20+)</span>
            <span className="transition-transform group-hover:translate-x-1.5">
              →
            </span>
          </button>
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            AI • WEB • MOBILE • SYSTEMS
          </span>
        </div>
      </div>
    </section>
  )
}
