import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "The Quiet Power of Plain-Text and Minimalist Interfaces — Thamindu Dasanayake",
  description:
    "Why reducing visual noise and bloated frameworks leads to faster software and clarity of thought.",
};

export default function MinimalInterfacesPage() {
  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="border-border/40 space-y-2 border-b pb-6">
        <div className="text-muted-foreground flex items-center gap-3 font-mono text-xs">
          <time dateTime="2026-08-15">August 2026</time>
          <span>•</span>
          <span>3 min read</span>
          <span>•</span>
          <span className="text-foreground">Design & UX</span>
        </div>
        <h1 className="text-foreground text-2xl font-medium tracking-tight sm:text-3xl">
          The Quiet Power of Plain-Text and Minimalist Interfaces
        </h1>
      </header>

      {/* Content */}
      <div className="text-muted-foreground space-y-6 text-sm leading-relaxed sm:text-base">
        <p>
          We spent a decade decorating web applications with heavy glassmorphic
          gradients, 60fps parallax scroll hijacking, and infinite skeleton
          placeholders. In the process, many modern websites became slower, more
          difficult to navigate, and cognitively exhausting.
        </p>

        <p>
          Minimalism isn&apos;t just an aesthetic choice or a styling trend; it
          is an engineering discipline. It respects the visitor&apos;s time and
          cognitive bandwidth.
        </p>

        <h2 className="text-foreground pt-4 text-lg font-medium sm:text-xl">
          Speed is the Ultimate Feature
        </h2>
        <p>
          When you strip away heavy 3D canvases, oversized video hero banners,
          and bloated tracker scripts, web pages load in under 100 milliseconds.
          Instant typography rendering is the most underrated luxury on the
          modern web.
        </p>

        <h2 className="text-foreground pt-4 text-lg font-medium sm:text-xl">
          Focus on Density and Signal
        </h2>
        <p>
          A single-column layout with high typographic fidelity lets content
          speak for itself. It gives readers the direct answer they came for
          without demanding they scroll through three screen heights of
          decorative fluff.
        </p>

        <div className="border-border/50 bg-muted/20 text-foreground rounded-xl border p-4 font-mono text-xs">
          Good design is as little design as possible. Less, but better. —
          Dieter Rams
        </div>
      </div>
    </article>
  );
}
