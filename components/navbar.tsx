"use client";

import * as React from "react";
import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { PERSONAL_INFO } from "@/lib/data";
import Link from "next/link";

interface NavbarProps {
  onOpenArchive: () => void;
}

export function Navbar({ onOpenArchive }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-border/40 bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors">
      <div className="mx-auto flex items-center justify-between p-6 sm:p-8">
        <Link href="/" onClick={scrollToTop} className="text-xl">
          {PERSONAL_INFO.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            onClick={scrollToTop}
            className="hover:text-foreground uppercase transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/#works"
            className="hover:text-foreground uppercase transition-colors"
          >
            WORKS
          </Link>
          <Link
            href="/#experience"
            className="hover:text-foreground uppercase transition-colors"
          >
            EXPERIENCE
          </Link>
          <button
            type="button"
            onClick={onOpenArchive}
            className="hover:text-foreground cursor-pointer uppercase transition-colors"
          >
            ARCHIVE
          </button>
          <Link
            href="/#contact"
            className="hover:text-foreground uppercase transition-colors"
          >
            CONTACT
          </Link>
        </nav>

        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="border-border text-foreground hover:bg-muted inline-flex h-9 w-9 items-center justify-center rounded-lg border md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon size={20} /> : <ListIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="border-border bg-background/95 text-muted-foreground space-y-4 border-b px-4 pt-3 pb-6 font-mono text-xs font-medium tracking-wider backdrop-blur-lg md:hidden">
          <Link
            href="/"
            onClick={scrollToTop}
            className="text-foreground hover:text-primary block py-2 uppercase transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/#works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-foreground hover:text-primary block py-2 uppercase transition-colors"
          >
            WORKS
          </Link>
          <Link
            href="/#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-foreground hover:text-primary block py-2 uppercase transition-colors"
          >
            EXPERIENCE
          </Link>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenArchive();
            }}
            className="text-foreground hover:text-primary block w-full cursor-pointer py-2 text-left uppercase transition-colors"
          >
            ARCHIVE
          </button>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-foreground hover:text-primary block py-2 uppercase transition-colors"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
