"use client";

import { EXPERIENCE_MILESTONES } from "@/lib/data";

export function Experience() {
  return (
    <section className="w-full space-y-4">
      <h2 className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
        Journey & Experience
      </h2>

      <div className="divide-border/40 w-full divide-y">
        {EXPERIENCE_MILESTONES.map((item) => (
          <div
            key={item.role + item.year}
            className="flex items-baseline justify-between gap-4 py-3"
          >
            <div>
              <span className="text-foreground font-medium">{item.role}</span>
              <p className="text-muted-foreground text-xs sm:text-sm">
                {item.organization}
              </p>
            </div>

            <span className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums sm:text-sm">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
