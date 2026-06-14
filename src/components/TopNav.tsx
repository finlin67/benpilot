"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Gamepad2,
  Joystick,
  Plane,
  Search,
  Users,
} from "lucide-react";
import { SoundToggle } from "@/components/SoundToggle";
import { cn } from "@/lib/utils";

const desktopLinks = [
  { href: "/controls", label: "Controls", icon: Joystick },
  { href: "/commands", label: "Commands", icon: Search },
  { href: "/trainer", label: "Trainer", icon: Users },
  { href: "/quiz", label: "Quiz", icon: Gamepad2 },
  { href: "/checklist", label: "Checklist", icon: BookOpen },
] as const;

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-card"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-sky/15 ring-2 ring-accent-sky/40">
            <Plane className="h-5 w-5 text-accent-sky" aria-hidden />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            PilotBen
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden flex-1 items-center justify-end gap-1 md:flex">
            {desktopLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-3 py-2 font-heading text-sm font-semibold transition-colors",
                    active
                      ? "bg-accent-sky/15 text-accent-sky"
                      : "text-foreground/70 hover:bg-card hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </Link>
              );
            })}
          </div>
          <SoundToggle />
        </div>
      </nav>
    </header>
  );
}
