"use client"

import * as React from "react"
import { EXPERIENCE_MILESTONES } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-border/60">
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1560px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 sm:mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Experiences
            </h2>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-2">
              Career Trajectory & Education
            </p>
          </div>
          <div className="lg:col-span-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              Proven track record engineering enterprise software solutions at
              SLT Mobitel, building high-conversion client web applications,
              and researching algorithmic optimization and distributed systems.
            </p>
          </div>
        </div>

        {/* 4-Column Timeline Grid (Akio/Marya Editorial Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
          {EXPERIENCE_MILESTONES.map((item, index) => (
            <div
              key={index}
              className="flex flex-col space-y-3 p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-border/60 bg-card/40 hover:bg-card hover:border-border transition-all duration-300 shadow-sm"
            >
              <span className="font-mono text-xl sm:text-2xl font-bold text-foreground tracking-wider">
                {item.year}
              </span>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground text-base">
                  {item.role}
                </h3>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
                  {item.organization}
                </p>
              </div>
              {item.details && (
                <p className="text-xs text-muted-foreground leading-relaxed pt-3 border-t border-border/40">
                  {item.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
