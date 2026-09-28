"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

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
    if (items.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      let current = items[0].id;

      for (let i = 0; i < items.length; i++) {
        const el = document.getElementById(items[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          current = items[i].id;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <aside
      className={`font-sans select-none lg:sticky lg:top-24 self-start space-y-6 ${className}`}
      aria-label="Table of contents"
    >
      {/* Index indicator matching reference image (e.g. ↶ 002) */}
      <div className="flex items-center gap-2 font-mono text-xs opacity-60">
        <Link
          href="/posts"
          className="inline-flex items-center gap-1.5 hover:opacity-100 transition-opacity"
          title="Back to posts"
        >
          <span>↶</span>
          <span>{postIndex}</span>
        </Link>
      </div>

      {/* Nav List */}
      <nav className="flex flex-col space-y-2.5 text-sm">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`text-left transition-all duration-200 cursor-pointer flex items-baseline gap-2 py-0.5 ${
                isActive
                  ? "opacity-100 font-medium translate-x-1"
                  : "opacity-40 hover:opacity-80"
              }`}
            >
              {item.number && (
                <span className="font-mono text-xs opacity-60">
                  {item.number}
                </span>
              )}
              <span className="leading-snug">{item.title}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
