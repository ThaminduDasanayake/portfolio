"use client";

import { EXPERIENCE_MILESTONES } from "@/lib/data";

export function MinimalExperience() {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        Journey & Experience
      </h2>

      <div className="divide-y divide-border/40">
        {EXPERIENCE_MILESTONES.map((item) => (
          <div
            key={item.role + item.year}
            className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <div>
              <span className="font-medium text-foreground">{item.role}</span>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {item.organization}
              </p>
            </div>

            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
