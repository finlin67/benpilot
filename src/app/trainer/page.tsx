"use client";

import { useCallback, useMemo, useState } from "react";
import { KeyComboBadges } from "@/components/KeyComboBadges";
import {
  CATEGORIES,
  CATEGORY_COLORS,
  MSFS2024_COMMANDS,
  type Command,
  type CommandCategory,
} from "@/lib/msfs2024-commands";
import { cn } from "@/lib/utils";

type Direction = "key-to-action" | "action-to-key";

const RECENT_HISTORY_SIZE = 5;
const CARD_TRANSITION_MS = 300;

function pickRandomCard(
  pool: Command[],
  recent: string[]
): Command | null {
  if (pool.length === 0) return null;

  const recentSet = new Set(recent);
  const candidates =
    pool.length > RECENT_HISTORY_SIZE
      ? pool.filter((command) => !recentSet.has(command.action))
      : pool;

  const source = candidates.length > 0 ? candidates : pool;
  return source[Math.floor(Math.random() * source.length)];
}

export default function TrainerPage() {
  const [category, setCategory] = useState<CommandCategory | "all">("all");
  const [direction, setDirection] = useState<Direction>("key-to-action");
  const [currentCard, setCurrentCard] = useState<Command | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [recentActions, setRecentActions] = useState<string[]>([]);
  const [correct, setCorrect] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const pool = useMemo(() => {
    if (category === "all") return MSFS2024_COMMANDS;
    return MSFS2024_COMMANDS.filter((command) => command.category === category);
  }, [category]);

  const loadNewCard = useCallback(
    (recentOverride?: string[]) => {
      const card = pickRandomCard(pool, recentOverride ?? recentActions);
      if (!card) return;

      setFadeIn(false);
      setTimeout(() => {
        setCurrentCard(card);
        setRevealed(false);
        setRecentActions((prev) => {
          const next = [card.action, ...prev.filter((a) => a !== card.action)];
          return next.slice(0, RECENT_HISTORY_SIZE);
        });
        setFadeIn(true);
      }, CARD_TRANSITION_MS);
    },
    [pool, recentActions]
  );

  const handleNewCard = () => {
    const card = pickRandomCard(pool, recentActions);
    if (!card) return;

    setCurrentCard(card);
    setRevealed(false);
    setRecentActions((prev) => {
      const next = [card.action, ...prev.filter((a) => a !== card.action)];
      return next.slice(0, RECENT_HISTORY_SIZE);
    });
    setFadeIn(true);
  };

  const handleReveal = () => setRevealed(true);

  const handleResult = (gotIt: boolean) => {
    setAttempts((a) => a + 1);
    if (gotIt) setCorrect((c) => c + 1);

    setTimeout(() => {
      loadNewCard();
    }, CARD_TRANSITION_MS);
  };

  const resetScore = () => {
    setCorrect(0);
    setAttempts(0);
  };

  const scorePercent = attempts > 0 ? (correct / attempts) * 100 : 0;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Teach Your Friends
        </h1>
        <p className="mt-2 text-base text-foreground/70 sm:text-lg">
          Flashcard trainer — quiz a friend on the controls
        </p>
      </header>

      <div className="mb-6 flex flex-wrap items-end gap-3">
        <label className="flex min-w-[10rem] flex-1 flex-col gap-1.5">
          <span className="font-heading text-xs font-semibold uppercase tracking-wide text-foreground/60">
            Category
          </span>
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as CommandCategory | "all")
            }
            className="min-h-[3rem] rounded-xl border-2 border-card-border bg-card px-3 font-sans text-base text-foreground focus:border-accent-sky focus:outline-none"
          >
            <option value="all">All categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label className="flex min-w-[12rem] flex-1 flex-col gap-1.5">
          <span className="font-heading text-xs font-semibold uppercase tracking-wide text-foreground/60">
            Direction
          </span>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value as Direction)}
            className="min-h-[3rem] rounded-xl border-2 border-card-border bg-card px-3 font-sans text-base text-foreground focus:border-accent-sky focus:outline-none"
          >
            <option value="key-to-action">Key → What does it do?</option>
            <option value="action-to-key">Action → What key?</option>
          </select>
        </label>

        <button
          type="button"
          onClick={handleNewCard}
          className="min-h-[3rem] rounded-xl border-2 border-accent-sky bg-accent-sky/20 px-6 font-heading font-bold text-accent-sky transition-all hover:bg-accent-sky/30 active:scale-[0.98]"
        >
          New Card
        </button>
      </div>

      <div className="mb-6 rounded-2xl border border-card-border bg-card p-4">
        <div className="mb-2 flex items-center justify-between gap-4">
          <span className="font-heading text-sm font-semibold text-foreground/80">
            Score: {correct} / {attempts}
          </span>
          <button
            type="button"
            onClick={resetScore}
            className="text-sm font-semibold text-accent-sky hover:underline"
          >
            Reset
          </button>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-background">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-300"
            style={{ width: `${scorePercent}%` }}
          />
        </div>
      </div>

      <div
        className={cn(
          "min-h-[200px] rounded-3xl border-2 border-card-border bg-card p-6 transition-opacity duration-300 sm:p-8",
          fadeIn ? "opacity-100" : "opacity-0"
        )}
      >
        {!currentCard ? (
          <div className="flex min-h-[200px] flex-col items-center justify-center text-center">
            <p className="font-heading text-xl text-foreground/70">
              Tap &quot;New Card&quot; to start quizzing your friend!
            </p>
            <button
              type="button"
              onClick={handleNewCard}
              className="mt-6 min-h-[3rem] rounded-xl border-2 border-accent-sky bg-accent-sky/20 px-8 font-heading font-bold text-accent-sky transition-all hover:bg-accent-sky/30 active:scale-[0.98]"
            >
              New Card
            </button>
          </div>
        ) : (
          <>
            <span
              className={cn(
                "inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold",
                CATEGORY_COLORS[currentCard.category as CommandCategory]
              )}
            >
              {currentCard.category}
            </span>

            <div className="mt-6 text-center">
              {direction === "key-to-action" ? (
                <>
                  <p className="mb-4 font-heading text-xl text-foreground sm:text-2xl">
                    What does this do?
                  </p>
                  <div className="flex justify-center">
                    <KeyComboBadges keys={currentCard.keys} size="lg" />
                  </div>
                </>
              ) : (
                <>
                  <p className="mb-4 font-heading text-xl text-foreground sm:text-2xl">
                    What key(s) do this?
                  </p>
                  <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    &quot;{currentCard.action}&quot;
                  </p>
                </>
              )}
            </div>

            {!revealed ? (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleReveal}
                  className="min-h-[3rem] rounded-xl border-2 border-accent-sky bg-accent-sky/20 px-8 font-heading text-lg font-bold text-accent-sky transition-all hover:bg-accent-sky/30 active:scale-[0.98]"
                >
                  Show Answer
                </button>
              </div>
            ) : (
              <div className="mt-8">
                <div className="rounded-2xl border border-card-border bg-background/50 p-5 text-center">
                  <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-foreground/50">
                    Answer
                  </p>
                  {direction === "key-to-action" ? (
                    <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                      {currentCard.action}
                    </p>
                  ) : (
                    <div className="flex justify-center">
                      <KeyComboBadges keys={currentCard.keys} size="lg" />
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={() => handleResult(true)}
                    className="min-h-[3rem] flex-1 rounded-xl border-2 border-green-500 bg-green-500/20 px-6 font-heading text-lg font-bold text-green-400 transition-all hover:bg-green-500/30 active:scale-[0.98] sm:max-w-[12rem]"
                  >
                    Got it ✓
                  </button>
                  <button
                    type="button"
                    onClick={() => handleResult(false)}
                    className="min-h-[3rem] flex-1 rounded-xl border-2 border-red-500 bg-red-500/20 px-6 font-heading text-lg font-bold text-red-400 transition-all hover:bg-red-500/30 active:scale-[0.98] sm:max-w-[12rem]"
                  >
                    Missed it ✗
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <p className="mt-6 text-center text-sm text-foreground/60">
        Read the question out loud to your friend, then tap &quot;Show Answer&quot;
        to check.
      </p>
    </div>
  );
}
