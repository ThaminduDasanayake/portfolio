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
    <main className="bg-background text-foreground relative min-h-screen">
      {/* Pinned Scroll Progress Indicator */}
      <ScrollProgress className="bg-muted-foreground/60 fixed top-0 z-50 h-0.5" />

      <div className="mx-auto max-w-xl space-y-12 px-6 py-16 sm:space-y-16 sm:py-24">
        <MinimalHeader />
        <MinimalProjects onOpenArchive={() => setIsArchiveOpen(true)} />
        <MinimalStack />
        <MinimalExperience />
        <MinimalReads />
        <MinimalConnect />
      </div>

      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
    </main>
  );
}
