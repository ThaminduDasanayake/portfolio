"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import { PERSONAL_INFO } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  onOpenArchive: () => void;
}

export function Navbar({ onOpenArchive }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex items-center justify-between p-6 sm:p-8">
        <Link href="#home" className="text-xl">
          {PERSONAL_INFO.brand}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            className="hover:text-foreground transition-colors uppercase"
          >
            HOME
          </Link>
          <Link
            href="#works"
            className="hover:text-foreground transition-colors uppercase"
          >
            WORKS
          </Link>
          <Link
            href="#experience"
            className="hover:text-foreground transition-colors uppercase"
          >
            EXPERIENCE
          </Link>
          <button
            type="button"
            onClick={onOpenArchive}
            className="hover:text-foreground transition-colors uppercase cursor-pointer"
          >
            ARCHIVE
          </button>
          <Link
            href="#contact"
            className="hover:text-foreground transition-colors uppercase"
          >
            CONTACT
          </Link>
        </nav>

        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon size={20} /> : <ListIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-4 font-mono text-xs font-medium tracking-wider text-muted-foreground">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-foreground hover:text-primary transition-colors uppercase"
          >
            HOME
          </Link>
          <Link
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-foreground hover:text-primary transition-colors uppercase"
          >
            WORKS
          </Link>
          <Link
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-foreground hover:text-primary transition-colors uppercase"
          >
            EXPERIENCE
          </Link>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenArchive();
            }}
            className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors uppercase cursor-pointer"
          >
            ARCHIVE
          </button>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-foreground hover:text-primary transition-colors uppercase"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
