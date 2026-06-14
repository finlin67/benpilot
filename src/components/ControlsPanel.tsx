"use client";

import { useState } from "react";
import {
  Building2,
  Camera,
  CirclePower,
  Cloud,
  PlaneLanding,
  PlaneTakeoff,
  Signpost,
  Star,
  type LucideIcon,
} from "lucide-react";
import type { FlightPhase } from "@/components/PhaseBadge";
import { ControlCard } from "@/components/ControlCard";
import { PhaseCheatsheet } from "@/components/PhaseCheatsheet";
import { controlsPhases } from "@/lib/controls-data";
import { cn } from "@/lib/utils";

const tabIcons: Record<FlightPhase, LucideIcon> = {
  startup: CirclePower,
  taxi: Signpost,
  takeoff: PlaneTakeoff,
  flight: Cloud,
  landing: PlaneLanding,
  "taxi-to-gate": Building2,
  camera: Camera,
};

export function ControlsPanel() {
  const [activePhase, setActivePhase] = useState<FlightPhase>("startup");
  const phase = controlsPhases.find((p) => p.id === activePhase)!;

  return (
    <div>
      <div className="sticky top-16 z-40 -mx-4 border-b border-card-border bg-background/95 px-4 backdrop-blur-sm sm:-mx-6 sm:px-6">
        <div
          className="flex gap-2 overflow-x-auto py-3"
          role="tablist"
          aria-label="Flight phases"
        >
          {controlsPhases.map((p) => {
            const Icon = tabIcons[p.id];
            const isActive = activePhase === p.id;

            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActivePhase(p.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-xl border px-4 py-3 font-heading text-sm font-semibold transition-all sm:text-base",
                  "min-h-11 active:scale-[0.98]",
                  isActive
                    ? "border-accent-sky bg-accent-sky/15 text-accent-sky shadow-[0_0_16px_rgba(56,189,248,0.2)]"
                    : "border-card-border bg-card text-foreground/80 hover:border-accent-sky/40 hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                <span className="whitespace-nowrap">{p.label}</span>
                {p.tricky && (
                  <span className="rounded-full bg-accent-amber/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-accent-amber">
                    Tricky!
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 lg:hidden">
        <PhaseCheatsheet phase={phase} variant="bar" />
      </div>

      <div
        role="tabpanel"
        aria-label={phase.label}
        className="mt-6 lg:mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-8 xl:grid-cols-[minmax(0,1fr)_20rem]"
      >
        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            {phase.controls.map((control) => (
              <ControlCard key={control.id} control={control} />
            ))}
          </div>

          <div className="mt-8 flex gap-4 rounded-2xl border border-accent-amber/40 bg-accent-amber/10 p-5 sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-amber/20 text-accent-amber">
              <Star className="h-5 w-5 fill-current" aria-hidden />
            </span>
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-accent-amber">
                Captain&apos;s Tip
              </p>
              <p className="mt-1 text-base leading-relaxed text-foreground/90 sm:text-lg">
                {phase.tip}
              </p>
            </div>
          </div>
        </div>

        <PhaseCheatsheet
          phase={phase}
          variant="sidebar"
          className="sticky top-[8.75rem] hidden lg:block"
        />
      </div>
    </div>
  );
}
