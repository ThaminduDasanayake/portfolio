"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { SIMPLE_POSTS } from "@/lib/data";

export function Posts() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-muted-foreground text-sm font-sans font-normal">
          Notes
        </h2>
      </div>

      <div className="space-y-1.5">
        {SIMPLE_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group flex items-baseline justify-between gap-4 py-0.5 transition-colors"
          >
            <div className="inline-flex items-baseline gap-1 min-w-0">
              <span className="text-foreground text-sm sm:text-base font-normal underline underline-offset-4 decoration-border group-hover:decoration-foreground transition-colors truncate">
                {post.title}
              </span>
              <ArrowUpRightIcon
                size={12}
                className="text-muted-foreground group-hover:text-foreground opacity-0 group-hover:opacity-100 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              />
            </div>

            <span className="text-muted-foreground shrink-0 text-xs sm:text-sm font-sans tabular-nums">
              {post.readTime}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
