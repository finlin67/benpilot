import {
  Camera,
  CirclePower,
  Footprints,
  PlaneLanding,
  PlaneTakeoff,
  Route,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type FlightPhase =
  | "startup"
  | "taxi"
  | "takeoff"
  | "flight"
  | "landing"
  | "taxi-to-gate"
  | "camera";

const phaseConfig: Record<
  FlightPhase,
  { label: string; icon: LucideIcon; color: string }
> = {
  startup: { label: "Startup", icon: CirclePower, color: "text-accent-amber" },
  taxi: { label: "Taxi", icon: Footprints, color: "text-accent-sky" },
  takeoff: { label: "Takeoff", icon: PlaneTakeoff, color: "text-accent-sky" },
  flight: { label: "Flight", icon: Route, color: "text-accent-sky" },
  landing: { label: "Landing", icon: PlaneLanding, color: "text-accent-amber" },
  "taxi-to-gate": {
    label: "Taxi to Gate",
    icon: Footprints,
    color: "text-accent-sky",
  },
  camera: { label: "Camera", icon: Camera, color: "text-accent-amber" },
};

interface PhaseBadgeProps {
  phase: FlightPhase;
  className?: string;
  size?: "sm" | "md";
}

export function PhaseBadge({ phase, className, size = "md" }: PhaseBadgeProps) {
  const { label, icon: Icon, color } = phaseConfig[phase];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-3 py-1.5 font-heading font-semibold",
        size === "sm" && "gap-1.5 px-2.5 py-1 text-sm",
        size === "md" && "text-base",
        className
      )}
    >
      <Icon className={cn(color, size === "sm" ? "h-4 w-4" : "h-5 w-5")} />
      <span>{label}</span>
    </span>
  );
}
