"use client";

import { TECH_STACK } from "@/lib/data";

export function MinimalStack() {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        Stack
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {TECH_STACK.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border/50 bg-muted/10 p-3.5 transition-colors hover:border-border"
          >
            <span className="font-mono text-xs font-medium text-foreground">
              {group.category}
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border/40 bg-background/60 px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
