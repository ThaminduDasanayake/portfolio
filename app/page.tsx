"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SelectedWorks } from "@/components/selected-works";
import { Experience } from "@/components/experience";
import { Stack } from "@/components/stack";
import { Footer } from "@/components/footer";
import { ArchiveModal } from "@/components/archive-modal";

export default function HomePage() {
  const [isArchiveOpen, setIsArchiveOpen] = React.useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenArchive={() => setIsArchiveOpen(true)} />
      <Hero />
      <SelectedWorks onOpenArchive={() => setIsArchiveOpen(true)} />
      <Experience />
      <Stack />
      <Footer />
      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
    </main>
  );
}
