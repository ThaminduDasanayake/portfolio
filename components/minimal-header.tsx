"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/data";

export function MinimalHeader() {
  return (
    <header className="space-y-6">
      <div className="flex items-center justify-between">
        {/* Avatar */}
        <div className="border-border/80 relative h-14 w-14 overflow-hidden rounded-full border shadow-sm sm:h-16 sm:w-16">
          <Image
            src="/pic.webp"
            alt={PERSONAL_INFO.name}
            fill
            sizes="64px"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Live Status indicator */}
        <div className="border-border/60 bg-muted/30 text-muted-foreground flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-mono">{PERSONAL_INFO.location}</span>
        </div>
      </div>

      {/* Name and Bio */}
      <div className="space-y-3">
        <div>
          <h1 className="text-foreground text-xl font-medium tracking-tight sm:text-2xl">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-muted-foreground font-mono text-xs sm:text-sm">
            {PERSONAL_INFO.roleTitle}
          </p>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
          {PERSONAL_INFO.bio}
        </p>
      </div>
    </header>
  );
}
