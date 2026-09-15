"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/data";

export function MinimalHeader() {
  return (
    <header className="space-y-6">
      <div className="flex items-center justify-between">
        {/* Avatar */}
        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border/80 shadow-sm sm:h-16 sm:w-16">
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
        <div className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs text-muted-foreground">
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
          <h1 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-mono text-xs text-muted-foreground sm:text-sm">
            {PERSONAL_INFO.roleTitle}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {PERSONAL_INFO.bio}
        </p>
      </div>
    </header>
  );
}
