"use client";

import { useState } from "react";
import Image from "next/image";
import { CopyIcon, CheckIcon } from "@phosphor-icons/react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data";

export function MinimalConnect() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="space-y-4 pt-4 border-t border-border/40">
      <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        Connect
      </h2>

      <p className="text-sm text-muted-foreground">
        {PERSONAL_INFO.availability}. Feel free to reach out directly:
      </p>

      {/* Copy Email Button */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-muted/20 px-3 py-1.5 text-xs font-mono text-foreground transition-all hover:bg-muted/40 hover:border-border cursor-pointer active:scale-95"
        >
          <span>{PERSONAL_INFO.email}</span>
          {copied ? (
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <CheckIcon size={14} />
              <span>Copied</span>
            </span>
          ) : (
            <CopyIcon size={14} className="text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="relative flex h-4 w-4 items-center justify-center">
              <Image
                src={`/socials/${link.name.toLowerCase()}.svg`}
                alt={link.name}
                width={16}
                height={16}
                className="h-4 w-4 object-contain opacity-70 transition-opacity group-hover:opacity-100 dark:invert"
              />
            </span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

