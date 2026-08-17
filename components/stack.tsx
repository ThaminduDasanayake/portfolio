"use client"

import * as React from "react"
import { CAPABILITIES } from "@/lib/data"

export function Stack() {
  return (
    <section id="stack" className="py-20 sm:py-28 border-t border-border/60">
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1560px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 sm:mb-16 gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Core Stack & Capabilities
          </h2>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            Engineering Tooling
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CAPABILITIES.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border/60 bg-card/40 hover:bg-card hover:border-border transition-all duration-300 flex flex-col justify-between"
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-mono font-medium text-foreground tracking-wide hover:border-foreground/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
