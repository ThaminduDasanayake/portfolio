import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { PERSONAL_INFO } from "@/lib/data";

export default function ReadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="mx-auto max-w-xl px-6 py-12 sm:py-20">
        {/* Navigation Bar */}
        <nav className="border-border/40 mb-12 flex items-center justify-between border-b pb-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
          >
            <ArrowLeftIcon size={14} />
            <span>back to index</span>
          </Link>
          <span className="text-muted-foreground font-mono text-xs">
            {PERSONAL_INFO.brand} / reads
          </span>
        </nav>

        {/* Article Body */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-border/40 mt-16 border-t pt-8">
          <div className="text-muted-foreground flex items-center justify-between font-mono text-xs">
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
