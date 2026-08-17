"use client";

import * as React from "react";
import {
  AirplaneTakeoff,
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  AsteriskIcon,
  Clock,
  CloudRain,
  Compass,
  Footprints,
  SpotifyLogo,
  Sun,
  TelevisionSimple,
} from "@phosphor-icons/react";
import { PERSONAL_INFO } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto pt-6 sm:pt-10">
        {/* Huge Display Name */}
        <div className="flex flex-col items-center justify-center pb-8 sm:pb-12 w-full overflow-hidden">
          <h1 className="hero-display-title">
            <span className="block">THAMINDU</span>
            <span className="block">DASANAYAKE</span>
          </h1>
        </div>

        {/* Dual Showcase Cards (Bento Row matching Image 1 & 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {/* Card 1 (Left): Light aesthetic interactive UI widgets showcase */}
          <div className="relative aspect-16/11 sm:aspect-16/10 overflow-hidden rounded-3xl border border-border bg-[#e4e6eb] dark:bg-[#ebecef] text-neutral-900 shadow-xl flex items-center justify-center p-4 sm:p-8 transition-transform duration-500 hover:scale-[1.01]"></div>

          {/* Card 2 (Right): Dark device mockup showcasing dark UI widgets */}
          <div className="relative aspect-16/11 sm:aspect-16/10 overflow-hidden rounded-3xl border border-border bg-[#0d0e12] text-white shadow-xl flex items-center justify-center p-4 sm:p-6 transition-transform duration-500 hover:scale-[1.01]"></div>
        </div>

        {/* Editorial Split Bio (matching Image 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-6 border-t border-border/60">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-snug">
              {PERSONAL_INFO.headline}
            </h2>
          </div>
          <div className="lg:col-span-5 text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
            <p>{PERSONAL_INFO.editorialBio}</p>
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs font-semibold tracking-wider text-foreground pt-2">
              <a
                href="#works"
                className="underline underline-offset-4 hover:opacity-75 transition-opacity inline-flex items-center gap-1"
              >
                <span>VIEW SELECTED WORKS</span>
                <ArrowDown size={14} />
              </a>
              <span className="text-border">•</span>
              <a
                href="#contact"
                className="underline underline-offset-4 hover:opacity-75 transition-opacity inline-flex items-center gap-1"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
