"use client";

import { useState } from "react";
import { ScrollProgress } from "@/components/scroll-progress";
import { Header } from "@/components/header";
import { Stack } from "@/components/stack";
import { Projects } from "@/components/projects";
import { Posts } from "@/components/posts";
import { Experience } from "@/components/experience";
import { Connect } from "@/components/connect";
import { ArchiveModal } from "@/components/archive-modal";

export default function HomePage() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  return (
    <main className="bg-background text-foreground relative min-h-screen">
      {/* Pinned Scroll Progress Indicator */}
      <ScrollProgress className="bg-muted-foreground/60 fixed top-0 z-50 h-0.5" />

      <div className="mx-auto max-w-xl space-y-12 px-6 py-16 sm:space-y-16 sm:py-24">
        <Header />
        <Projects onOpenArchive={() => setIsArchiveOpen(true)} />
        <Stack />
        <Experience />
        <Posts />
        <Connect />
      </div>

      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
    </main>
  );
}
