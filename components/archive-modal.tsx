"use client";

import * as React from "react";
import {
  ArrowUpRight,
  GithubLogo,
  X,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { ARCHIVE_PROJECTS } from "@/lib/data";

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ArchiveModal({ isOpen, onClose }: ArchiveModalProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filtered = React.useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return ARCHIVE_PROJECTS;
    return ARCHIVE_PROJECTS.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.tags.some((t) => t.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="animate-in fade-in fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="border-border bg-card animate-in zoom-in-95 relative z-10 flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border shadow-2xl duration-200">
        {/* Header */}
        <div className="border-border/80 bg-card flex items-center justify-between border-b p-6">
          <div>
            <h3 className="text-foreground text-xl font-bold sm:text-2xl">
              Complete Project Archive
            </h3>
            <p className="text-muted-foreground mt-0.5 font-mono text-xs">
              Curated repository of engineering work, systems, and experiments
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border-border hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer rounded-full border p-2 transition-colors"
            aria-label="Close archive modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Input */}
        <div className="border-border/40 bg-muted/20 border-b p-4 sm:px-6">
          <div className="relative flex items-center">
            <MagnifyingGlass
              size={18}
              className="text-muted-foreground pointer-events-none absolute left-3.5"
            />
            <input
              type="text"
              placeholder="Search by title, technology (e.g. Next.js, Python), or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-foreground w-full rounded-xl border py-2.5 pr-4 pl-10 font-sans text-sm focus:ring-1 focus:outline-none"
              autoFocus
            />
          </div>
        </div>

        {/* Projects List */}
        <div className="divide-border/40 divide-y overflow-y-auto p-4 sm:p-6">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                className="group hover:bg-muted/30 -mx-2 flex flex-col justify-between gap-3 rounded-xl px-3 py-4 transition-colors sm:flex-row sm:items-center"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground font-mono text-xs font-semibold">
                      {item.year}
                    </span>
                    <h4 className="text-foreground text-sm font-semibold sm:text-base">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-muted-foreground bg-muted/50 border-border/40 rounded border px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end pt-2 sm:self-center sm:pt-0">
                  {item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground inline-flex items-center gap-1 font-mono text-xs hover:underline"
                    >
                      <span>Live</span>
                      <ArrowUpRight size={13} weight="bold" />
                    </a>
                  )}
                  {item.repoUrl && (
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 font-mono text-xs"
                    >
                      <GithubLogo size={14} weight="bold" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-muted-foreground py-12 text-center font-mono text-xs">
              No projects found matching &ldquo;{searchTerm}&rdquo;.
            </div>
          )}
        </div>

        {/* Modal Footer Info */}
        <div className="border-border/40 bg-muted/10 text-muted-foreground flex items-center justify-between border-t p-4 font-mono text-xs">
          <span>
            Showing {filtered.length} of {ARCHIVE_PROJECTS.length} items
          </span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
