import {
  ArrowDown,
  ArrowUp,
  ArrowUpFromLine,
  Battery,
  Building2,
  Camera,
  ChevronDown,
  ChevronUp,
  CircleParking,
  Cog,
  Eye,
  Gauge,
  Layers,
  Map,
  MousePointer,
  MoveHorizontal,
  Octagon,
  Plane,
  RefreshCw,
  RotateCw,
  Route,
  Signpost,
  Tablet,
  Wind,
  Zap,
  ZoomIn,
  type LucideIcon,
} from "lucide-react";
import type { ControlIconName, ControlItem } from "@/lib/controls-data";
import { ControlShortcut } from "@/components/ControlShortcut";
import { HardwareBadge, getHardwareConfig } from "@/components/HardwareBadge";
import { cn } from "@/lib/utils";

const iconMap: Record<ControlIconName, LucideIcon> = {
  zap: Zap,
  battery: Battery,
  "circle-parking": CircleParking,
  gauge: Gauge,
  "arrow-up": ArrowUp,
  "arrow-down": ArrowDown,
  octagon: Octagon,
  "rotate-cw": RotateCw,
  plane: Plane,
  "arrow-up-from-line": ArrowUpFromLine,
  "move-horizontal": MoveHorizontal,
  cog: Cog,
  layers: Layers,
  map: Map,
  "chevrons-down": ChevronDown,
  "chevrons-up": ChevronUp,
  wind: Wind,
  "mouse-pointer": MousePointer,
  eye: Eye,
  camera: Camera,
  "zoom-in": ZoomIn,
  "refresh-cw": RefreshCw,
  signpost: Signpost,
  building: Building2,
  route: Route,
  tablet: Tablet,
};

const sourceBorderStyles = {
  KEYBOARD: "border-l-zinc-500",
  JOYSTICK: "border-l-accent-sky",
  THROTTLE: "border-l-emerald-500",
  MOUSE: "border-l-accent-amber",
};

interface ControlCardProps {
  control: ControlItem;
  className?: string;
}

export function ControlCard({ control, className }: ControlCardProps) {
  const Icon = iconMap[control.icon];
  const { iconBg } = getHardwareConfig(control.source);

  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-card-border border-l-4 bg-card p-5 sm:p-6",
        sourceBorderStyles[control.source],
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2",
            iconBg
          )}
        >
          <Icon className="h-7 w-7" aria-hidden />
        </span>
        <div className="flex flex-col items-end gap-2">
          {control.mustKnow && (
            <span className="rounded-full bg-accent-amber/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-accent-amber">
              ⭐ Must Know
            </span>
          )}
          <HardwareBadge source={control.source} />
        </div>
      </div>

      <div>
        <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          {control.action}
        </h3>

        <div className="mt-4">
          <ControlShortcut
            inputs={control.inputs}
            source={control.source}
            joiner={control.inputJoiner}
          />
        </div>

        <p className="mt-4 text-base leading-relaxed text-foreground/75">
          {control.description}
        </p>
      </div>
    </article>
  );
}
