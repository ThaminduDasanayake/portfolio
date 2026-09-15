import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { PERSONAL_INFO } from "@/lib/data";

export default function ReadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-xl px-6 py-12 sm:py-20">
        {/* Navigation Bar */}
        <nav className="mb-12 flex items-center justify-between border-b border-border/40 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon size={14} />
            <span>back to index</span>
          </Link>
          <span className="font-mono text-xs text-muted-foreground">
            {PERSONAL_INFO.brand} / reads
          </span>
        </nav>

        {/* Article Body */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t border-border/40 pt-8">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              ← {PERSONAL_INFO.name}
            </Link>
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
