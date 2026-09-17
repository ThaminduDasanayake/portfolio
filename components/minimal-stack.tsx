import Image from "next/image";
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
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="border-border/40 bg-background/70 text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors"
                >
                  {skill.icon && (
                    <span className="relative flex h-3.5 w-3.5 items-center justify-center shrink-0">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={14}
                        height={14}
                        className={`h-3.5 w-3.5 object-contain ${
                          skill.invertInDark ? "dark:invert" : ""
                        }`}
                      />
                    </span>
                  )}
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
