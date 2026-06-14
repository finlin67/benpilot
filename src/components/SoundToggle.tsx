"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSoundPreference } from "@/hooks/useSoundPreference";
import { cn } from "@/lib/utils";

export function SoundToggle() {
  const { enabled, toggle } = useSoundPreference();

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg border border-card-border transition-colors hover:bg-card",
        enabled ? "text-accent-sky" : "text-foreground/50"
      )}
      aria-label={enabled ? "Mute sounds" : "Enable sounds"}
      title={enabled ? "Sounds on" : "Sounds off"}
    >
      {enabled ? (
        <Volume2 className="h-5 w-5" aria-hidden />
      ) : (
        <VolumeX className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
