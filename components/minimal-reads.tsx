"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { SIMPLE_READS } from "@/lib/data";

export function MinimalReads() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Simple Reads
        </h2>
        <span className="text-xs font-mono text-muted-foreground">
          Essays & Notes
        </span>
      </div>

      <div className="divide-y divide-border/40">
        {SIMPLE_READS.map((read) => (
          <Link
            key={read.slug}
            href={`/reads/${read.slug}`}
            className="group flex flex-col justify-between gap-1 py-3.5 transition-colors sm:flex-row sm:items-baseline sm:gap-4"
          >
            <div className="flex flex-col gap-0.5 sm:max-w-[75%]">
              <span className="inline-flex items-center gap-1 font-medium text-foreground transition-colors group-hover:underline group-hover:underline-offset-4">
                <span>{read.title}</span>
                <ArrowUpRightIcon
                  size={14}
                  className="text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </span>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {read.description}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 pt-1 font-mono text-xs text-muted-foreground sm:pt-0">
              <span>{read.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
