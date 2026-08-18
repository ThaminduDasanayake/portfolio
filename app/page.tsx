"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SelectedWorks } from "@/components/selected-works";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { ArchiveModal } from "@/components/archive-modal";
import { useState } from "react";

export default function HomePage() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  return (
    <main className="min-h-screen">
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
