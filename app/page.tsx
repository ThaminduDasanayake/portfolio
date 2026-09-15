"use client";

import { useState } from "react";
import { ScrollProgress } from "@/components/scroll-progress";
import { MinimalHeader } from "@/components/minimal-header";
import { MinimalStack } from "@/components/minimal-stack";
import { MinimalProjects } from "@/components/minimal-projects";
import { MinimalReads } from "@/components/minimal-reads";
import { MinimalExperience } from "@/components/minimal-experience";
import { MinimalConnect } from "@/components/minimal-connect";
import { ArchiveModal } from "@/components/archive-modal";

export default function HomePage() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Pinned Scroll Progress Indicator */}
      <ScrollProgress className="fixed top-0 z-50 h-0.5 bg-muted-foreground/60" />

      <div className="mx-auto max-w-xl px-6 py-16 sm:py-24 space-y-12 sm:space-y-16">
        <MinimalHeader />
        <MinimalStack />
        <MinimalProjects onOpenArchive={() => setIsArchiveOpen(true)} />
        <MinimalReads />
        <MinimalExperience />
        <MinimalConnect />
      </div>

      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
    </main>
  );
}

