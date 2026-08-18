"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SelectedWorks } from "@/components/selected-works";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { ArchiveModal } from "@/components/archive-modal";
import { ScrollProgress } from "@/components/scroll-progress";

export default function HomePage() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  return (
    <main className="relative min-h-screen">
      {/* Pinned Scroll Progress Indicator */}
      <ScrollProgress className="bg-muted-foreground fixed top-0 z-50 h-0.5" />
      <Navbar onOpenArchive={() => setIsArchiveOpen(true)} />
      <Hero />
      <SelectedWorks onOpenArchive={() => setIsArchiveOpen(true)} />
      <Experience />
      <Footer />
      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
    </main>
  );
}
