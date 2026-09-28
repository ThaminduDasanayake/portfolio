"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ChatCircleDotsIcon,
  CheckCircleIcon,
  CompassIcon,
  FlameIcon,
  FolderIcon,
  HeartIcon,
  LightningIcon,
  MusicNotesIcon,
  PlanetIcon,
  ShieldCheckIcon,
  SlidersIcon,
  SparkleIcon,
  StarIcon,
  TerminalWindowIcon,
} from "@phosphor-icons/react";
import { CodeBlock } from "@/components/code-block";
import { ColorToggle } from "@/components/color-toggle";
import ChapterScrubber, { Chapter } from "@/components/ruixen/chapter-scrubber";
import { cn } from "@/lib/utils";

type PhosphorWeight =
  "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

const WEIGHT_OPTIONS: { id: PhosphorWeight; label: string }[] = [
  { id: "thin", label: "Thin" },
  { id: "light", label: "Light" },
  { id: "regular", label: "Regular" },
  { id: "bold", label: "Bold" },
  { id: "fill", label: "Fill" },
  { id: "duotone", label: "Duotone" },
];

const chapters: Chapter[] = [
  {
    id: "vibe-code",
    title: "1. The AI Vibe-Coding Monoculture",
    // description: "Mapped the workspace.",
    // meta: "00:00",
  },
  {
    id: "weights",
    title: "2. The 6-Weight Superpower",
    // description: "Confirmed the flicker.",
    // meta: "00:14",
  },
  {
    id: "parity",
    title: "3. Typographic Parity & Visual Hierarchy",
    // description: "Raised-cosine wave, no seams.",
    // meta: "00:52",
  },
  {
    id: "ship",
    title: "open the PR",
    // description: "Opened #11148 and requested review.",
    // meta: "02:55",
  },
];

export function PhosphorVsLucideArticle() {
  const [selectedWeight, setSelectedWeight] =
    useState<PhosphorWeight>("duotone");
  const [isInverted, setIsInverted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync overscroll rubber-band bounce with the active background
  useEffect(() => {
    const bg = isInverted ? "var(--moss)" : "var(--sand)";
    const fg = isInverted ? "var(--sand)" : "var(--moss)";

    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
    document.documentElement.style.color = fg;
    document.body.style.color = fg;

    return () => {
      document.documentElement.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
      document.documentElement.style.color = "";
      document.body.style.color = "";
    };
  }, [isInverted]);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main
      data-inverted={isInverted ? "true" : "false"}
      className={cn(
        "group relative min-h-svh",
        isInverted
          ? "bg-moss text-sand selection:bg-acid selection:text-moss"
          : "bg-sand text-moss selection:bg-acid selection:text-moss"
      )}
    >
      <header className="relative z-4 h-11">
        <p className="fixed top-5 left-5 z-2 leading-3">
          <Link
            href="/posts"
            className="group/btn inline-flex items-center gap-1.5 font-mono text-xs tracking-tight"
            title="Back to all posts"
          >
            <ArrowLeftIcon className="transition-transform group-hover/btn:-translate-x-0.5" />
            <span>posts</span>
          </Link>
        </p>

        <div className="fixed top-5 right-5 flex items-center gap-4">
          <ColorToggle
            isInverted={isInverted}
            onToggle={() => setIsInverted((prev) => !prev)}
          />
        </div>
      </header>

      <p className="absolute top-5 left-1/2 w-3xl -translate-1/2 text-xs leading-3 whitespace-nowrap tabular-nums">
        published <time dateTime="2026-09-26">26 Sep 2026</time>
      </p>

      <ChapterScrubber
        chapters={chapters}
        className="fixed top-1/2 right-6 z-10"
      />

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="back to top"
        className={cn(
          "fixed right-5 bottom-5 z-2 cursor-pointer text-right text-xs transition-opacity duration-400",
          showScrollTop
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <span className="relative inline-block text-inherit">to top</span>
      </button>

      <article className="relative z-1 mx-auto mt-[clamp(100px,22svh,240px)] mb-0 flex w-3xl flex-col gap-25 break-normal">
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs sm:justify-start">
          <span>6 min read</span>
        </div>

        <h1 className="text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
          Why I Pick Phosphor Over Lucide
        </h1>

        <div className="flex w-full flex-col gap-12">
          <p className="text-base leading-relaxed sm:text-lg">
            In an era where AI vibe-coding has turned standard Lucide icons into
            a ubiquitous visual monoculture, Phosphor’s 6 weight variations
            bring craft, typographic harmony, and tactile depth back to modern
            UIs.
          </p>

          <section id="vibe-code" className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              1. The AI Vibe-Coding Monoculture
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              Open any recently launched AI wrapper, prompt-generated SaaS, or
              vibe-coded landing page built with v0, Bolt, or Cursor in the past
              year. You will notice an undeniable visual pattern: the identical
              24px, 2px uniform stroke Lucide icon set bundled by default with
              shadcn/ui.
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              Lucide is an admirable, well-engineered icon system. But when
              every dashboard, navbar, card footer, and confirmation dialog
              across the entire internet relies on the exact same stroke
              profile, software starts to feel homogenized. It creates an
              instant subconscious signal to users:{" "}
              <em className="italic">
                this product was generated by an LLM in 30 seconds.
              </em>
            </p>

            <div className="flex items-center gap-2 font-mono text-xs font-medium">
              <FlameIcon size={16} weight="duotone" />
              <span>The Uniformity Dilemma</span>
            </div>
            <p className="text-xs leading-relaxed sm:text-sm">
              When UI building blocks become push-button commodities, genuine
              craft is found in the subtleties: custom easing curves,
              intentional whitespace, typographic rhythm, and iconography that
              adapts to the personality of the interface rather than copying the
              default template.
            </p>
          </section>

          <section id="weights" className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              2. The 6-Weight Superpower
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              Phosphor’s killer feature is that every single icon in its 1,200+
              catalog is individually drawn in{" "}
              <span className="font-semibold">6 consistent weights</span>:{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                thin
              </code>
              ,{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                light
              </code>
              ,{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                regular
              </code>
              ,{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                bold
              </code>
              ,{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                fill
              </code>
              , and{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                duotone
              </code>
              .
            </p>

            {/* Interactive Weight Switcher Playground */}
            <div className="space-y-6 rounded-xl border border-current/20 p-5 shadow-sm sm:p-6">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <SlidersIcon size={15} weight="duotone" />
                  <span className="font-semibold tracking-wider uppercase">
                    Interactive Weight Switcher
                  </span>
                </div>
              </div>

              {/* Weight Pill Buttons */}
              <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
                {WEIGHT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedWeight(opt.id)}
                    className={cn(
                      "cursor-pointer rounded-md border px-1 py-2 text-center font-mono text-xs transition-all",
                      selectedWeight === opt.id
                        ? "bg-acid text-moss border-current"
                        : "border-current/40 hover:border-current/60"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Live Interactive Icon Showcase */}
              <div className="grid grid-cols-4 gap-4 py-4 sm:grid-cols-6 sm:gap-6">
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <SparkleIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Sparkle</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <HeartIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Heart</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <LightningIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Lightning</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <CompassIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Compass</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <TerminalWindowIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Terminal</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <ShieldCheckIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Shield</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <FolderIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Folder</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <ChatCircleDotsIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Chat</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <MusicNotesIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Music</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <PlanetIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Planet</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <CheckCircleIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Check</span>
                </div>
                <div className="bg-acid text-moss flex flex-col items-center justify-center gap-2 rounded-lg p-3">
                  <StarIcon size={32} weight={selectedWeight} />
                  <span className="font-mono text-[10px]">Star</span>
                </div>
              </div>
            </div>
          </section>

          <section id="parity" className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              3. Typographic Parity
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              In graphic and typography design, visual weight balance is
              fundamental. When you render a delicate 48px display heading with{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                font-light
              </code>
              , placing a heavy 2px outline icon next to it clashes
              aggressively. The icon draws all the eye&apos;s gravity away from
              the typography.
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              Phosphor allows you to match your font weight directly to your
              icon weight:
            </p>

            <div className="space-y-3 rounded-lg border border-current/15 p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-current/10 pb-2">
                <span>Typography Weight</span>
                <span>Phosphor Weight</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-thin">font-thin (100)</span>
                <span className="inline-flex items-center gap-2">
                  <SparkleIcon size={18} weight="thin" />{" "}
                  weight=&quot;thin&quot;
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-light">font-light (300)</span>
                <span className="inline-flex items-center gap-2">
                  <SparkleIcon size={18} weight="light" />{" "}
                  weight=&quot;light&quot;
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-normal">font-normal (400)</span>
                <span className="inline-flex items-center gap-2">
                  <SparkleIcon size={18} weight="regular" />{" "}
                  weight=&quot;regular&quot;
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold">font-bold (700)</span>
                <span className="inline-flex items-center gap-2">
                  <SparkleIcon size={18} weight="bold" />{" "}
                  weight=&quot;bold&quot;
                </span>
              </div>
            </div>
          </section>

          {/* 4. Duotone & Fill as Native UI States */}
          <section className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              4. Duotone &amp; Fill for Expressive States
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              With most icon libraries, creating an &quot;active&quot; state or
              an elevated card requires swapping entire icon assets or hacking
              custom CSS SVG fills. With Phosphor, state transition is a
              first-class React property:
            </p>

            <CodeBlock
              filename="components/nav-item.tsx"
              language="tsx"
              code={`import { HeartIcon, BookmarkIcon } from "@phosphor-icons/react";

export function FavoriteButton({ isFavorited }: { isFavorited: boolean }) {
  return (
    <button className="flex items-center gap-2 text-sm">
      {/* Seamless transition from outline to solid fill */}
      <HeartIcon
        size={20}
        weight={isFavorited ? "fill" : "regular"}
        className={isFavorited ? "text-rose-500" : "text-current opacity-70"}
      />
      <span>{isFavorited ? "Favorited" : "Favorite"}</span>
    </button>
  );
}`}
            />

            <p className="text-sm leading-relaxed sm:text-base">
              Furthermore, the{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                duotone
              </code>{" "}
              weight features a secondary path rendered with 0.2 opacity in the
              current text color. This gives badges, empty states, and system
              notifications instant depth and dimensionality without adding a
              single line of CSS.
            </p>
          </section>

          {/* 5. Global Theming with IconContext */}
          <section className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              5. Zero-Boilerplate Global Theming
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              Instead of manually passing{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                size={20}
              </code>{" "}
              and{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                weight=&quot;duotone&quot;
              </code>{" "}
              to every single icon instance in your codebase, Phosphor provides
              an{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                IconContext.Provider
              </code>{" "}
              that configures default dimensions, weights, and colors across
              entire subtrees:
            </p>

            <CodeBlock
              filename="app/layout.tsx"
              language="tsx"
              code={`import { IconContext } from "@phosphor-icons/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <IconContext.Provider
      value={{
        size: 18,
        weight: "duotone",
        mirrored: false,
      }}
    >
      {children}
    </IconContext.Provider>
  );
}`}
            />
          </section>

          {/* 6. The Verdict */}
          <section className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              6. The Verdict
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              Lucide is reliable and works out of the box. But if you want your
              interfaces to feel bespoke, handcrafted, and distinctly personal
              rather than another AI template clone, give Phosphor a try. The
              6-weight spectrum alone will transform how you think about icon
              hierarchy in your design system.
            </p>
          </section>
        </div>
      </article>

      <footer className="relative mx-auto mt-25 mb-0 items-center justify-between pb-30">
        <div className="fixed bottom-5 left-5 z-2 flex items-center gap-4">
          <button
            type="button"
            onClick={handleShare}
            className="cursor-pointer text-xs"
          >
            {copiedLink ? "link copied" : "share"}
          </button>
        </div>
      </footer>
    </main>
  );
}
