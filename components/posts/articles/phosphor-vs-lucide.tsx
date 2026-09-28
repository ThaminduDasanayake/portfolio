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
    title: "1. Why every site looks the same",
    description: "How default icon setups made modern apps feel identical.",
    meta: "01",
  },
  {
    id: "weights",
    title: "2. 6 weights for every icon",
    description: "Switch from thin to bold, fill, and duotone easily.",
    meta: "02",
  },
  {
    id: "parity",
    title: "3. Matching icons with fonts",
    description: "Fixing thick icons clashing with light typography.",
    meta: "03",
  },
  {
    id: "duotone-fill",
    title: "4. Easy active & hover states",
    description: "Switching between regular, fill, and duotone on the fly.",
    meta: "04",
  },
  {
    id: "theming",
    title: "5. Setting global defaults",
    description: "Configuring size and weight once for your whole app.",
    meta: "05",
  },
  {
    id: "verdict",
    title: "6. Wrap up",
    description: "Why switching to Phosphor is worth it.",
    meta: "06",
  },
];

export function PhosphorVsLucideArticle() {
  const [selectedWeight, setSelectedWeight] =
    useState<PhosphorWeight>("duotone");
  const [isInverted, setIsInverted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scrollspy & Continuous Progress Calculation
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 280);

      const sectionEls = chapters
        .map((c) => document.getElementById(c.id))
        .filter((el): el is HTMLElement => el !== null);

      if (sectionEls.length === 0) return;

      const triggerPoint = window.scrollY + window.innerHeight * 0.35;
      const offsets = sectionEls.map((el) => {
        const rect = el.getBoundingClientRect();
        return window.scrollY + rect.top;
      });

      let progress = 0;
      let activeIdx = 0;

      if (triggerPoint <= offsets[0]) {
        progress = 0;
        activeIdx = 0;
      } else if (triggerPoint >= offsets[offsets.length - 1]) {
        progress = offsets.length - 1;
        activeIdx = offsets.length - 1;
      } else {
        for (let i = 0; i < offsets.length - 1; i++) {
          if (triggerPoint >= offsets[i] && triggerPoint < offsets[i + 1]) {
            const range = offsets[i + 1] - offsets[i];
            const dist = triggerPoint - offsets[i];
            progress = i + (range > 0 ? dist / range : 0);
            activeIdx = Math.round(progress);
            break;
          }
        }
      }

      setScrollProgress(progress);
      setCurrentChapterIndex(activeIdx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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

  const handleChapterSelect = (chapter: Chapter) => {
    const el = document.getElementById(chapter.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
        currentIndex={currentChapterIndex}
        scrollProgress={scrollProgress}
        onSelect={handleChapterSelect}
        side="left"
        rowHeight={10}
        radius={2.5}
        peakLength={52}
        restLength={12}
        className="fixed top-1/2 right-6 z-20 -translate-y-1/2"
        cardClassName={cn(
          "backdrop-blur-md shadow-2xl",
          isInverted
            ? "bg-sand/95 text-moss border-sand/30"
            : "bg-moss/95 text-sand border-moss/30"
        )}
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
            If you look at most new web apps or landing pages built recently,
            you will notice they almost all look identical. Lucide is a great
            default, but Phosphor gives you 6 different weights for every single
            icon, making it so much easier to match your fonts and build cleaner
            interfaces.
          </p>

          <section id="vibe-code" className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              1. Why every new app looks the same
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              Over the past year, AI made building apps faster than ever. Almost
              all of them start with shadcn/ui, which installs Lucide icons by
              default.
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              There is nothing wrong with Lucide, it works really well and the
              icons look clean. But because everyone leaves the defaults as-is,
              every navbar, card, button, and settings menu on the internet now
              uses the exact same 24px line icons.
            </p>

            <div className="flex items-center gap-2 font-medium">
              <FlameIcon size={16} weight="duotone" />
              <span>Standing out from the crowd</span>
            </div>
            <p className="text-xs leading-relaxed sm:text-sm">
              Changing your icon pack is one of the easiest ways to give your
              project its own feel without having to redesign everything from
              scratch.
            </p>
          </section>

          <section id="weights" className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              2. 6 weights for every icon
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              The main reason I use Phosphor is that every icon in its library
              (over 1,200 of them) comes in{" "}
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
              3. Matching icons with font weights
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              If you have ever built a big display heading with a light font
              like{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                font-light
              </code>{" "}
              or{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                font-thin
              </code>
              , putting a standard 2px outline icon next to it usually looks out
              of place. The icon feels way too heavy and pulls all the attention
              away from your text.
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              With Phosphor, you can just match the icon weight directly with
              the font weight you are using:
            </p>

            <div className="space-y-3 rounded-lg border border-current/15 p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-current/10 pb-2">
                <span>Font Weight</span>
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
          <section id="duotone-fill" className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              4. Easy active &amp; hover states
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              In most apps, when someone favorites an item, saves a bookmark, or
              switches tabs, you want the icon to change from an outline to a
              solid fill.
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              With most icon packs, you have to import two separate icons or
              hack custom SVG fill styles in CSS. With Phosphor, you can just
              switch the weight prop:
            </p>

            <CodeBlock
              filename="components/nav-item.tsx"
              language="tsx"
              code={`import { HeartIcon } from "@phosphor-icons/react";

export function FavoriteButton({ isFavorited }: { isFavorited: boolean }) {
  return (
    <button className="flex items-center gap-2 text-sm">
      {/* Switch smoothly between outline and solid fill */}
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
              The{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                duotone
              </code>{" "}
              weight is also super handy for notifications, badges, and empty
              states. It uses a softer background tint on the secondary shape
              using your current text color, giving icons some nice depth
              without any extra CSS.
            </p>
          </section>

          {/* 5. Global Theming with IconContext */}
          <section id="theming" className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              5. Setting global defaults
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              Instead of manually writing{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                size={20}
              </code>{" "}
              and{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                weight=&quot;duotone&quot;
              </code>{" "}
              on every single icon in your code, Phosphor comes with an{" "}
              <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                IconContext.Provider
              </code>
              .
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              You can set your default size and weight once in your root layout,
              and all icons throughout your app will automatically use them:
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
          <section id="verdict" className="space-y-6 pt-4">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              6. Wrap up
            </h2>
            <p className="text-sm leading-relaxed sm:text-base">
              Lucide is still a solid choice if you just want something quick
              that works. But if you want your interfaces to feel a little more
              unique and polished, Phosphor is definitely worth a shot. Having 6
              weights right at your fingertips makes building UIs feel so much
              more flexible.
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
