"use client";

import { ArrowUpRightIcon, GithubLogoIcon, XIcon } from "@phosphor-icons/react";
import { ARCHIVE_PROJECTS } from "@/lib/data";
import { useEffect } from "react";

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ArchiveModal({ isOpen, onClose }: ArchiveModalProps) {
  useEffect(() => {
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
      <div className="border-border bg-background animate-in zoom-in-95 relative z-10 flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border shadow-2xl duration-200">
        {/* Header */}
        <div className="border-border/80 bg-background flex items-center justify-between border-b p-6">
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
            <XIcon size={20} />
          </button>
        </div>

        {/* Projects List */}
        <div className="divide-border/40 divide-y overflow-y-auto p-4 sm:p-6">
          {ARCHIVE_PROJECTS.map((item) => (
            <div
              key={item.title}
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
                    <ArrowUpRightIcon size={13} weight="bold" />
                  </a>
                )}
                {item.repoUrl && (
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 font-mono text-xs"
                  >
                    <GithubLogoIcon size={14} weight="bold" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
