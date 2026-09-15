"use client";

import { EXPERIENCE_MILESTONES } from "@/lib/data";

export function MinimalExperience() {
  return (
    <section className="space-y-4">
      <h2 className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
        Journey & Experience
      </h2>

      <div className="divide-border/40 divide-y">
        {EXPERIENCE_MILESTONES.map((item) => (
          <div
            key={item.role + item.year}
            className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <div>
              <span className="text-foreground font-medium">{item.role}</span>
              <p className="text-muted-foreground text-xs sm:text-sm">
                {item.organization}
              </p>
            </div>

            <span className="text-muted-foreground shrink-0 font-mono text-xs">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
