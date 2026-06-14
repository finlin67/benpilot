"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, Star } from "lucide-react";
import { KeyComboBadges } from "@/components/KeyComboBadges";
import {
  CATEGORIES,
  CATEGORY_COLORS,
  MSFS2024_COMMANDS,
  MUST_KNOW_ACTIONS,
  type Command,
  type CommandCategory,
} from "@/lib/msfs2024-commands";
import { cn } from "@/lib/utils";

const STARRED_KEY = "msfs_starred";

function loadStarred(): Set<string> {
  if (typeof window === "undefined") return new Set();

  try {
    const raw = localStorage.getItem(STARRED_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as string[];
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

function saveStarred(starred: Set<string>) {
  localStorage.setItem(STARRED_KEY, JSON.stringify(Array.from(starred)));
}

function matchesSearch(command: Command, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  return (
    command.action.toLowerCase().includes(q) ||
    command.keys.toLowerCase().includes(q) ||
    command.category.toLowerCase().includes(q)
  );
}

export default function CommandsPage() {
  const [search, setSearch] = useState("");
  const [activeCategories, setActiveCategories] = useState<Set<CommandCategory>>(
    new Set()
  );
  const [starred, setStarred] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setStarred(loadStarred());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveStarred(starred);
  }, [starred, hydrated]);

  const filtered = useMemo(() => {
    return MSFS2024_COMMANDS.filter((command) => {
      const categoryMatch =
        activeCategories.size === 0 || activeCategories.has(command.category as CommandCategory);
      return categoryMatch && matchesSearch(command, search);
    });
  }, [search, activeCategories]);

  const toggleCategory = (category: CommandCategory) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const clearCategories = () => setActiveCategories(new Set());

  const toggleStar = (action: string) => {
    setStarred((prev) => {
      const next = new Set(prev);
      if (next.has(action)) {
        next.delete(action);
      } else {
        next.add(action);
      }
      return next;
    });
  };

  const isMustKnow = (action: string) =>
    (MUST_KNOW_ACTIONS as readonly string[]).includes(action);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Command Reference
        </h1>
        <p className="mt-2 text-base text-foreground/70 sm:text-lg">
          All MSFS 2024 keyboard shortcuts
        </p>
      </header>

      <div className="sticky top-16 z-40 -mx-4 mb-6 border-b border-card-border bg-background/95 px-4 py-4 backdrop-blur-sm sm:-mx-6 sm:px-6">
        <label className="relative block">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/50"
            aria-hidden
          />
          <input
            ref={searchRef}
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search actions, keys, or categories..."
            className="w-full rounded-2xl border-2 border-card-border bg-card py-3.5 pl-12 pr-4 font-sans text-base text-foreground placeholder:text-foreground/40 focus:border-accent-sky focus:outline-none focus:ring-2 focus:ring-accent-sky/20"
          />
        </label>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={clearCategories}
            className={cn(
              "rounded-full border px-3 py-1.5 font-heading text-sm font-semibold transition-colors",
              activeCategories.size === 0
                ? "border-accent-sky bg-accent-sky/20 text-accent-sky"
                : "border-card-border bg-card text-foreground/70 hover:border-accent-sky/40"
            )}
          >
            All
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => toggleCategory(category)}
              className={cn(
                "rounded-full border px-3 py-1.5 font-heading text-sm font-semibold transition-colors",
                activeCategories.has(category)
                  ? "border-accent-sky bg-accent-sky/20 text-accent-sky"
                  : "border-card-border bg-card text-foreground/70 hover:border-accent-sky/40"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mt-3 text-sm text-foreground/60">
          Showing {filtered.length} of {MSFS2024_COMMANDS.length} commands
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-card-border bg-card px-6 py-12 text-center">
          <p className="font-heading text-lg text-foreground/70">
            No commands found — try a different search or clear the filters.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-card-border bg-card">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-card-border bg-background/50">
                <th className="w-12 px-4 py-3 text-sm font-semibold text-foreground/60">
                  ★
                </th>
                <th className="px-4 py-3 font-heading text-sm font-semibold text-foreground/80">
                  Action
                </th>
                <th className="px-4 py-3 font-heading text-sm font-semibold text-foreground/80">
                  Keys
                </th>
                <th className="px-4 py-3 font-heading text-sm font-semibold text-foreground/80">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((command) => {
                const isStarred = starred.has(command.action);

                return (
                  <tr
                    key={`${command.action}-${command.keys}`}
                    className="border-b border-card-border/60 last:border-b-0 hover:bg-background/30"
                  >
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => toggleStar(command.action)}
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                          isStarred
                            ? "text-accent-amber"
                            : "text-foreground/30 hover:text-foreground/60"
                        )}
                        aria-label={
                          isStarred ? "Unstar command" : "Star command"
                        }
                      >
                        <Star
                          className={cn("h-5 w-5", isStarred && "fill-current")}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-heading text-sm font-bold text-foreground sm:text-base">
                          {command.action}
                        </span>
                        {isMustKnow(command.action) && (
                          <span className="rounded-full border border-accent-amber/40 bg-accent-amber/15 px-2 py-0.5 text-xs font-bold text-accent-amber">
                            ⭐ Must Know
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <KeyComboBadges keys={command.keys} size="sm" />
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={cn(
                          "inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold",
                          CATEGORY_COLORS[command.category as CommandCategory]
                        )}
                      >
                        {command.category}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
