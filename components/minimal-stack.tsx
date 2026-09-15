"use client";

import { TECH_STACK } from "@/lib/data";

export function MinimalStack() {
  return (
    <section className="space-y-4">
      <h2 className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
        Stack
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {TECH_STACK.map((group) => (
          <div
            key={group.category}
            className="border-border/50 bg-muted/10 hover:border-border rounded-xl border p-3.5 transition-colors"
          >
            <span className="text-foreground font-mono text-xs font-medium">
              {group.category}
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border-border/40 bg-background/60 text-muted-foreground rounded-md border px-2 py-0.5 text-xs"
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
