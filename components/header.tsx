"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/data";

export function Header() {
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
