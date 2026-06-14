"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { useSoundPreference } from "@/hooks/useSoundPreference";
import {
  checklists,
  createEmptyChecklistState,
  STORAGE_KEY,
  type ChecklistId,
  type ChecklistState,
} from "@/lib/checklist-data";
import { readLocalStorage, writeLocalStorage } from "@/lib/storage";
import { cn } from "@/lib/utils";

function loadState(): ChecklistState {
  const raw = readLocalStorage(STORAGE_KEY);
  if (!raw) return createEmptyChecklistState();

  try {
    const parsed = JSON.parse(raw) as Partial<ChecklistState>;
    return {
      "before-takeoff": parsed["before-takeoff"] ?? [],
      "after-landing": parsed["after-landing"] ?? [],
    };
  } catch {
    return createEmptyChecklistState();
  }
}

function saveState(state: ChecklistState) {
  writeLocalStorage(STORAGE_KEY, JSON.stringify(state));
}

interface ChecklistRowProps {
  action: string;
  state: string;
  checked: boolean;
  onToggle: () => void;
}

function ChecklistRow({ action, state, checked, onToggle }: ChecklistRowProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      aria-label={`${action}: ${state}${checked ? " — completed" : ""}`}
      className={cn(
        "flex w-full min-h-11 items-center gap-4 rounded-lg px-2 py-3 text-left transition-colors active:scale-[0.99]",
        checked ? "bg-green-50/80" : "hover:bg-stone-100/80"
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200",
          checked
            ? "border-green-600 bg-green-600 shadow-[0_2px_8px_rgba(22,163,74,0.35)]"
            : "border-stone-400 bg-white"
        )}
        aria-hidden
      >
        {checked && (
          <Check
            className="h-7 w-7 animate-check-bounce text-white"
            strokeWidth={3}
          />
        )}
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <span
            className={cn(
              "font-heading text-base font-bold uppercase tracking-wide text-stone-900 sm:text-lg",
              checked && "text-stone-500 line-through decoration-stone-400"
            )}
          >
            {action}
          </span>
          <span
            className="hidden min-w-[1.5rem] flex-1 border-b border-dotted border-stone-300 sm:block"
            aria-hidden
          />
          <span
            className={cn(
              "font-mono text-xs uppercase tracking-wide text-stone-500 sm:ml-auto sm:text-right sm:text-sm",
              checked && "text-stone-400 line-through decoration-stone-300"
            )}
          >
            {state}
          </span>
        </span>
      </span>
    </button>
  );
}

export function ChecklistBoard() {
  const [activeTab, setActiveTab] = useState<ChecklistId>("before-takeoff");
  const [checkedState, setCheckedState] = useState<ChecklistState>(
    createEmptyChecklistState
  );
  const [hydrated, setHydrated] = useState(false);
  const { playClick, playDing } = useSoundPreference();

  const checklist = useMemo(
    () => checklists.find((c) => c.id === activeTab)!,
    [activeTab]
  );

  const checkedIds = useMemo(
    () => new Set(checkedState[activeTab]),
    [checkedState, activeTab]
  );

  const totalCount = checklist.items.length;

  const completedCount = useMemo(
    () => checklist.items.filter((item) => checkedIds.has(item.id)).length,
    [checklist.items, checkedIds]
  );

  const allComplete = completedCount === totalCount;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  useEffect(() => {
    setCheckedState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveState(checkedState);
  }, [checkedState, hydrated]);

  const toggleItem = useCallback(
    (itemId: string) => {
      const current = new Set(checkedState[activeTab]);
      const isChecking = !current.has(itemId);

      if (isChecking) {
        current.add(itemId);
        playClick();
        if (current.size === totalCount) {
          playDing();
        }
      } else {
        current.delete(itemId);
      }

      setCheckedState((prev) => ({
        ...prev,
        [activeTab]: Array.from(current),
      }));
    },
    [activeTab, checkedState, playClick, playDing, totalCount]
  );

  const resetChecklist = useCallback(() => {
    setCheckedState((prev) => ({ ...prev, [activeTab]: [] }));
  }, [activeTab]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="inline-flex rounded-2xl border border-card-border bg-card p-1"
          role="tablist"
          aria-label="Checklist type"
        >
          {checklists.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "min-h-11 rounded-xl px-5 py-2.5 font-heading text-sm font-bold transition-all sm:text-base",
                activeTab === tab.id
                  ? "bg-accent-sky/20 text-accent-sky shadow-[0_0_16px_rgba(56,189,248,0.15)]"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {tab.tabLabel}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={resetChecklist}
          className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-card-border bg-card px-4 py-2 font-heading text-sm font-semibold text-foreground/80 transition-all hover:border-accent-amber/50 hover:text-accent-amber active:scale-[0.98] sm:self-auto"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Reset
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-stone-300 bg-[#f5f2eb] shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        <div className="h-3 bg-red-600" aria-hidden />

        <div className="border-b border-stone-300 bg-[#ebe7de] px-5 py-4 sm:px-8">
          <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-stone-900 sm:text-2xl">
            {checklist.title}
          </h2>
          <div className="mt-3">
            <div className="mb-1.5 flex items-center justify-between text-sm font-semibold text-stone-600">
              <span>
                {completedCount} of {totalCount} complete
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div
              className="h-2.5 overflow-hidden rounded-full bg-stone-300"
              role="progressbar"
              aria-valuenow={completedCount}
              aria-valuemin={0}
              aria-valuemax={totalCount}
              aria-label="Checklist progress"
            >
              <div
                className="h-full rounded-full bg-green-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {allComplete && (
          <div className="border-b border-green-700 bg-green-600 px-5 py-4 text-center sm:px-8">
            <p className="font-heading text-lg font-bold text-white sm:text-xl">
              {checklist.completionMessage}
            </p>
          </div>
        )}

        <div className="divide-y divide-stone-200 px-3 py-2 sm:px-5 sm:py-3">
          {checklist.items.map((item) => (
            <ChecklistRow
              key={item.id}
              action={item.action}
              state={item.state}
              checked={checkedIds.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>

        <div className="border-t border-stone-300 bg-[#ebe7de] px-5 py-3 text-center sm:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
            Tap each item to check it off
          </p>
        </div>
      </div>
    </div>
  );
}
