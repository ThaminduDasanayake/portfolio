"use client"

import * as React from "react"
import { List, X } from "@phosphor-icons/react"
import { PERSONAL_INFO } from "@/lib/data"

interface NavbarProps {
  onOpenArchive: () => void
}

export function Navbar({ onOpenArchive }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-[1440px] 2xl:max-w-[1560px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Name */}
        <a
          href="#home"
          className="font-mono text-sm font-bold tracking-widest text-foreground hover:opacity-80 transition-opacity"
        >
          {PERSONAL_INFO.brand}
        </a>

        {/* Center/Right: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs font-semibold tracking-wider text-muted-foreground">
          <a
            href="#home"
            className="hover:text-foreground transition-colors uppercase"
          >
            HOME
          </a>
          <a
            href="#works"
            className="hover:text-foreground transition-colors uppercase"
          >
            WORKS
          </a>
          <a
            href="#experience"
            className="hover:text-foreground transition-colors uppercase"
          >
            EXPERIENCE
          </a>
          <button
            type="button"
            onClick={onOpenArchive}
            className="hover:text-foreground transition-colors uppercase cursor-pointer"
          >
            ARCHIVE
          </button>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors uppercase"
          >
            CONTACT
          </a>
        </nav>

        {/* Right: Mobile Menu Toggle */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-4 font-mono text-xs font-medium tracking-wider text-muted-foreground">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-foreground hover:text-primary transition-colors uppercase"
          >
            HOME
          </a>
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-foreground hover:text-primary transition-colors uppercase"
          >
            WORKS
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-foreground hover:text-primary transition-colors uppercase"
          >
            EXPERIENCE
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenArchive()
            }}
            className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors uppercase cursor-pointer"
          >
            ARCHIVE
          </button>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-foreground hover:text-primary transition-colors uppercase"
          >
            CONTACT
          </a>
        </div>
      )}
    </header>
  )
}
