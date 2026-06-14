import { KeyBadge } from "@/components/KeyBadge";
import { cn } from "@/lib/utils";

interface KeyComboBadgesProps {
  keys: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function KeyComboBadges({
  keys,
  size = "md",
  className,
}: KeyComboBadgesProps) {
  const segments = keys.split(" + ");

  return (
    <span className={cn("inline-flex flex-wrap items-center gap-1.5", className)}>
      {segments.map((segment, index) => (
        <span key={`${segment}-${index}`} className="inline-flex items-center gap-1.5">
          {index > 0 && (
            <span className="text-xs font-bold text-foreground/50">+</span>
          )}
          <KeyBadge size={size}>{segment}</KeyBadge>
        </span>
      ))}
    </span>
  );
}
