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
      // 1. If at the bottom of the page, highlight the last section
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveId(items[items.length - 1].id);
        return;
      }

      // 2. Continuous 35% trigger point matching the Phosphor post standard
      const sectionEls = items
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);

      if (sectionEls.length === 0) return;

      const triggerPoint = window.scrollY + window.innerHeight * 0.35;
      const offsets = sectionEls.map((el) => {
        const rect = el.getBoundingClientRect();
        return window.scrollY + rect.top;
      });

      if (triggerPoint <= offsets[0]) {
        setActiveId(items[0].id);
      } else if (triggerPoint >= offsets[offsets.length - 1]) {
        setActiveId(items[items.length - 1].id);
      } else {
        for (let i = 0; i < offsets.length - 1; i++) {
          if (triggerPoint >= offsets[i] && triggerPoint < offsets[i + 1]) {
            setActiveId(items[i].id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items]);

  return (
    <nav
      className={cn(
        "fixed top-49 bottom-auto left-8 xl:left-16 z-5 hidden w-auto max-w-44 xl:max-w-50 flex-col gap-3.5 lg:flex",
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
