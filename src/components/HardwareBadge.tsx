import {
  Gamepad2,
  Gauge,
  Keyboard,
  Mouse,
  type LucideIcon,
} from "lucide-react";
import type { HardwareSource } from "@/lib/controls-data";
import { cn } from "@/lib/utils";

const sourceConfig: Record<
  HardwareSource,
  { label: string; icon: LucideIcon; badge: string; iconBg: string }
> = {
  KEYBOARD: {
    label: "Keyboard",
    icon: Keyboard,
    badge: "border-zinc-500/50 bg-zinc-500/20 text-zinc-200",
    iconBg: "border-zinc-500/40 bg-zinc-500/15 text-zinc-300",
  },
  JOYSTICK: {
    label: "Joystick",
    icon: Gamepad2,
    badge: "border-accent-sky/50 bg-accent-sky/20 text-accent-sky",
    iconBg: "border-accent-sky/40 bg-accent-sky/15 text-accent-sky",
  },
  THROTTLE: {
    label: "Throttle",
    icon: Gauge,
    badge: "border-emerald-500/50 bg-emerald-500/20 text-emerald-300",
    iconBg: "border-emerald-500/40 bg-emerald-500/15 text-emerald-400",
  },
  MOUSE: {
    label: "Mouse",
    icon: Mouse,
    badge: "border-accent-amber/50 bg-accent-amber/20 text-accent-amber",
    iconBg: "border-accent-amber/40 bg-accent-amber/15 text-accent-amber",
  },
};

interface HardwareBadgeProps {
  source: HardwareSource;
  className?: string;
  showIcon?: boolean;
}

export function HardwareBadge({
  source,
  className,
  showIcon = true,
}: HardwareBadgeProps) {
  const { label, icon: Icon, badge } = sourceConfig[source];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider",
        badge,
        className
      )}
    >
      {showIcon && <Icon className="h-3.5 w-3.5" aria-hidden />}
      {label}
    </span>
  );
}

export function getHardwareConfig(source: HardwareSource) {
  return sourceConfig[source];
}
