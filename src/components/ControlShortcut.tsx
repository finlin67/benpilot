import type { ControlInput, HardwareSource } from "@/lib/controls-data";
import { KeyBadge } from "@/components/KeyBadge";
import { getHardwareConfig } from "@/components/HardwareBadge";
import { cn } from "@/lib/utils";

const joinerLabels = {
  or: "or",
  then: "then",
  and: "+",
} as const;

const sourcePanelStyles: Record<HardwareSource, string> = {
  KEYBOARD:
    "border-zinc-500/30 bg-zinc-500/10 shadow-[inset_0_0_20px_rgba(113,113,122,0.08)]",
  JOYSTICK:
    "border-accent-sky/40 bg-accent-sky/10 shadow-[inset_0_0_24px_rgba(56,189,248,0.12)]",
  THROTTLE:
    "border-emerald-500/40 bg-emerald-500/10 shadow-[inset_0_0_24px_rgba(52,211,153,0.12)]",
  MOUSE:
    "border-accent-amber/40 bg-accent-amber/10 shadow-[inset_0_0_24px_rgba(251,191,36,0.12)]",
};

const hardwareTextStyles: Record<HardwareSource, string> = {
  KEYBOARD: "border-zinc-500/40 bg-zinc-800/80 text-zinc-100",
  JOYSTICK: "border-accent-sky/50 bg-accent-sky/25 text-white",
  THROTTLE: "border-emerald-500/50 bg-emerald-500/25 text-white",
  MOUSE: "border-accent-amber/50 bg-accent-amber/25 text-white",
};

interface ControlShortcutProps {
  inputs: ControlInput[];
  source: HardwareSource;
  joiner?: keyof typeof joinerLabels;
  size?: "md" | "lg";
}

export function ControlShortcut({
  inputs,
  source,
  joiner = "or",
  size = "lg",
}: ControlShortcutProps) {
  const { icon: DeviceIcon } = getHardwareConfig(source);
  const hasKeys = inputs.some((input) => input.type === "key");
  const hasHardware = inputs.some((input) => input.type === "text");

  return (
    <div
      className={cn(
        "rounded-xl border-2 p-4",
        sourcePanelStyles[source]
      )}
    >
      <p className="mb-3 flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-foreground/60">
        <span className="text-base" aria-hidden>
          👇
        </span>
        Do This!
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {(hasKeys || hasHardware) && (
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2",
              getHardwareConfig(source).iconBg
            )}
          >
            <DeviceIcon className="h-6 w-6" aria-hidden />
          </span>
        )}

        <div className="flex flex-wrap items-center gap-2.5">
          {inputs.map((input, index) => (
            <span key={index} className="inline-flex items-center gap-2.5">
              {index > 0 && (
                <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-sm font-bold uppercase text-foreground/50">
                  {joinerLabels[joiner]}
                </span>
              )}
              {input.type === "key" ? (
                <KeyBadge size={size}>{input.label}</KeyBadge>
              ) : (
                <span
                  className={cn(
                    "inline-flex min-h-[3rem] items-center rounded-xl border-2 px-4 py-2 text-base font-bold sm:text-lg",
                    hardwareTextStyles[source]
                  )}
                >
                  {input.label}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function formatShortcutText(
  inputs: ControlInput[],
  joiner: keyof typeof joinerLabels = "or"
): string {
  const joinerText = joinerLabels[joiner];
  return inputs.map((input) => input.label).join(` ${joinerText} `);
}
