import Link from "next/link";
import { Plane } from "lucide-react";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-5xl items-center gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-card"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-sky/15 ring-2 ring-accent-sky/40">
            <Plane className="h-5 w-5 text-accent-sky" aria-hidden />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            PilotBen
          </span>
        </Link>
      </nav>
    </header>
  );
}
