"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Gamepad2,
  Home,
  Joystick,
  Search,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/controls", label: "Controls", icon: Joystick },
  { href: "/commands", label: "Commands", icon: Search },
  { href: "/trainer", label: "Trainer", icon: Users },
  { href: "/quiz", label: "Quiz", icon: Gamepad2 },
  { href: "/checklist", label: "Checklist", icon: BookOpen },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-card-border bg-background/95 backdrop-blur-sm md:hidden"
      aria-label="Main navigation"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-6">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex min-h-[3.5rem] flex-col items-center justify-center gap-0.5 px-1 py-2 text-[10px] font-semibold transition-colors",
                active ? "text-accent-sky" : "text-foreground/60"
              )}
            >
              <Icon className="h-5 w-5" aria-hidden />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
