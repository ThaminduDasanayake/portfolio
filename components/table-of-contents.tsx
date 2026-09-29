"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUDownLeftIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  title: string;
  number?: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  postIndex?: string;
  className?: string;
}

export function TableOfContents({
  items,
  postIndex = "002",
  className = "",
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const current = items.findLast(
        (item) =>
          (document.getElementById(item.id)?.getBoundingClientRect().top ??
            1) <= 160
      );
      if (current) setActiveId(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <nav
      className={cn(
        "fixed top-49 bottom-auto left-16 z-5 flex w-auto max-w-50 flex-col gap-3.5",
        className
      )}
      aria-label="Table of contents"
    >
      <h2 className="flex items-center gap-1.5 font-mono text-xs leading-4.5 opacity-60">
        <Link
          href="/posts"
          className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-100"
          title="Back to posts"
        >
          <ArrowUDownLeftIcon />
        </Link>
        <span>{postIndex}</span>
      </h2>

      <ol className="flex list-none flex-col gap-px">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className={cn(
                "cursor-pointer text-left text-xs transition-all duration-200",
                isActive
                  ? "font-medium opacity-100"
                  : "opacity-40 hover:opacity-100"
              )}
            >
              <a
                href={`#${item.id}`}
                className="relative inline-block leading-5.5"
              >
                <span className="leading-snug">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
