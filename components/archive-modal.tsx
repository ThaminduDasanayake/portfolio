"use client"

import * as React from "react"
import {
  ArrowUpRight,
  GithubLogo,
  X,
  MagnifyingGlass,
} from "@phosphor-icons/react"
import { ARCHIVE_PROJECTS } from "@/lib/data"

interface ArchiveModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ArchiveModal({ isOpen, onClose }: ArchiveModalProps) {
  const [searchTerm, setSearchTerm] = React.useState("")

  const filtered = React.useMemo(() => {
    const term = searchTerm.toLowerCase().trim()
    if (!term) return ARCHIVE_PROJECTS
    return ARCHIVE_PROJECTS.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.tags.some((t) => t.toLowerCase().includes(term))
    )
  }, [searchTerm])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[88vh] flex flex-col rounded-3xl border border-border bg-card shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/80 bg-card">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Complete Project Archive
            </h3>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">
              Curated repository of engineering work, systems, and experiments
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close archive modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 sm:px-6 border-b border-border/40 bg-muted/20">
          <div className="relative flex items-center">
            <MagnifyingGlass
              size={18}
              className="absolute left-3.5 text-muted-foreground pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search by title, technology (e.g. Next.js, Python), or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm font-sans focus:outline-none focus:ring-1 focus:ring-foreground"
              autoFocus
            />
          </div>
        </div>

        {/* Projects List */}
        <div className="overflow-y-auto p-4 sm:p-6 divide-y divide-border/40">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-muted/30 -mx-2 px-3 rounded-xl transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-muted-foreground">
                      {item.year}
                    </span>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-muted/50 border border-border/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center pt-2 sm:pt-0">
                  {item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-foreground hover:underline"
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
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
                    >
                      <GithubLogo size={14} weight="bold" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-muted-foreground font-mono text-xs">
              No projects found matching &ldquo;{searchTerm}&rdquo;.
            </div>
          )}
        </div>

        {/* Modal Footer Info */}
        <div className="p-4 border-t border-border/40 bg-muted/10 flex justify-between items-center text-muted-foreground font-mono text-xs">
          <span>Showing {filtered.length} of {ARCHIVE_PROJECTS.length} items</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  )
}
