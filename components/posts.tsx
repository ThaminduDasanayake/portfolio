"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { SIMPLE_POSTS } from "@/lib/data";
import AnimatedUnderline from "@/components/ui/animated-underline";

export function Posts() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-muted-foreground font-sans text-sm font-normal">
          Notes
        </h2>
      </div>

      <div className="space-y-1.5">
        {SIMPLE_POSTS.map((post) => (
          <div
            key={post.slug}
            className="flex items-baseline justify-between gap-4 py-1"
          >
            <Link
              href={`/posts/${post.slug}`}
              className="group inline-flex min-w-0 items-center gap-1.5"
            >
              <AnimatedUnderline as="h2" showTrack className="text-sm">
                <span>{post.title}</span>
              </AnimatedUnderline>
              <ArrowUpRightIcon
                size={14}
                className="text-muted-foreground group-hover:text-foreground shrink-0 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </Link>

            <span className="text-muted-foreground shrink-0 text-xs tabular-nums sm:text-sm">
              {post.readTime}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
