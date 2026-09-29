import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  BooksIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SIMPLE_POSTS } from "@/lib/data";
import { AnimatedUnderline } from "@/components/ui/animated-underline";

export const metadata: Metadata = {
  title: "Notes & Posts — Thamindu Dasanayake",
  description:
    "Long-form essays, practical engineering guides, and architectural notes.",
};

export default function PostsIndexPage() {
  return (
    <div className="bg-background text-foreground selection:bg-accent-foreground selection:text-accent min-h-screen">
      <div className="mx-auto max-w-3xl space-y-12 px-6 py-16 sm:py-24">
        {/* Navigation & Header */}
        <div className="space-y-6">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground group inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
          >
            <ArrowLeftIcon
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            <span>back to portfolio</span>
          </Link>

          <div className="space-y-3">
            <div className="text-muted-foreground inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
              <BooksIcon size={14} />
              <span>Essays & Guides</span>
            </div>
            <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              Notes
            </h1>
            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
              Curated notes, engineering philosophies, and architectural deep
              dives.
            </p>
          </div>
        </div>

        {/* Posts List */}
        <div className="divide-border/40 divide-y">
          {SIMPLE_POSTS.map((post) => {
            return (
              <div
                key={post.slug}
                className="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div className="inline-flex min-w-0 items-center">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="group inline-flex items-center gap-1.5"
                  >
                    <AnimatedUnderline as="h2" showTrack className="text-sm sm:text-base">
                      <span>{post.title}</span>
                    </AnimatedUnderline>
                    <ArrowUpRightIcon
                      size={14}
                      className="text-muted-foreground group-hover:text-foreground shrink-0 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </div>

                <span className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums sm:text-sm">
                  {post.readTime}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
