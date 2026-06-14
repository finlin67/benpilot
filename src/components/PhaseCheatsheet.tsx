"use client";

import { useState } from "react";
import { ChevronDown, ClipboardList } from "lucide-react";
import type { PhaseControls } from "@/lib/controls-data";
import { KeyBadge } from "@/components/KeyBadge";
import { getHardwareConfig } from "@/components/HardwareBadge";
import { formatShortcutText } from "@/components/ControlShortcut";
import { cn } from "@/lib/utils";

interface PhaseCheatsheetProps {
  phase: PhaseControls;
  className?: string;
  variant?: "sidebar" | "bar";
}

export function PhaseCheatsheet({
  phase,
  className,
  variant = "sidebar",
}: PhaseCheatsheetProps) {
  const [expanded, setExpanded] = useState(true);

  const content = (
    <ul className={cn(variant === "sidebar" ? "space-y-2" : "grid gap-2 sm:grid-cols-2")}>
      {phase.controls.map((control) => {
        const { icon: DeviceIcon, iconBg } = getHardwareConfig(control.source);
        const hasKey = control.inputs.some((input) => input.type === "key");

        return (
          <li
            key={control.id}
            className={cn(
              "flex items-center gap-3 rounded-xl border border-card-border bg-background/60 p-3",
              variant === "bar" && "min-h-[3.5rem]"
            )}
          >
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                iconBg
              )}
            >
              <DeviceIcon className="h-4 w-4" aria-hidden />
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate font-heading text-sm font-bold text-foreground">
                {control.action}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-1.5">
                {hasKey ? (
                  control.inputs
                    .filter((input) => input.type === "key")
                    .map((input, index) => (
                      <span key={index} className="inline-flex items-center gap-1">
                        {index > 0 && control.inputJoiner && (
                          <span className="text-xs text-foreground/40">
                            {control.inputJoiner}
                          </span>
                        )}
                        <KeyBadge size="sm">{input.label}</KeyBadge>
                      </span>
                    ))
                ) : (
                  <span className="text-xs font-semibold text-foreground/70">
                    {formatShortcutText(control.inputs, control.inputJoiner)}
                  </span>
                )}
                {hasKey &&
                  control.inputs.some((input) => input.type === "text") && (
                    <span className="text-xs text-foreground/40">or</span>
                  )}
                {control.inputs
                  .filter((input) => input.type === "text")
                  .map((input, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-foreground/10 px-2 py-0.5 text-xs font-bold text-foreground/80"
                    >
                      {input.label}
                    </span>
                  ))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  if (variant === "bar") {
    return (
      <div
        className={cn(
          "rounded-2xl border-2 border-accent-sky/30 bg-card/95",
          className
        )}
      >
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          className="flex min-h-11 w-full items-center justify-between gap-3 px-4 py-3 text-left sm:px-5"
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} quick cheatsheet`}
        >
          <span className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-sky/40 bg-accent-sky/15 text-accent-sky">
              <ClipboardList className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block font-heading text-base font-bold text-accent-sky">
                Quick Cheatsheet
              </span>
              <span className="text-sm text-foreground/60">
                {phase.label} — all shortcuts at a glance
              </span>
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-accent-sky transition-transform",
              expanded && "rotate-180"
            )}
            aria-hidden
          />
        </button>
        {expanded && <div className="border-t border-card-border px-4 pb-4 pt-3 sm:px-5">{content}</div>}
      </div>
    );
  }

  return (
    <aside
      className={cn(
        "rounded-2xl border-2 border-accent-sky/30 bg-card p-4 sm:p-5",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-sky/40 bg-accent-sky/15 text-accent-sky">
          <ClipboardList className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h2 className="font-heading text-lg font-bold text-accent-sky">
            Quick Cheatsheet
          </h2>
          <p className="text-sm text-foreground/60">{phase.label}</p>
        </div>
      </div>
      {content}
    </aside>
  );
}
