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
    <main className="bg-background text-foreground min-h-screen min-w-80 overflow-x-clip">
      <ScrollProgress className="bg-muted-foreground/60 fixed top-0 z-50 h-0.5" />

      <div className="relative mx-auto flex w-135 flex-col items-start gap-8 px-0 pt-30 pb-28">
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
