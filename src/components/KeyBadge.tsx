import { cn } from "@/lib/utils";

interface KeyBadgeProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "min-h-[1.75rem] min-w-[1.75rem] px-2 py-0.5 text-xs",
  md: "min-h-[2rem] min-w-[2rem] px-2.5 py-1 text-sm",
  lg: "min-h-[3rem] min-w-[3rem] px-4 py-2 text-base sm:text-lg",
};

export function KeyBadge({ children, className, size = "md" }: KeyBadgeProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center rounded-lg border-2 border-key-border bg-key font-mono font-bold text-foreground shadow-[0_3px_0_0_var(--key-border)]",
        sizeStyles[size],
        size === "lg" && "ring-2 ring-accent-sky/20",
        className
      )}
    >
      {children}
    </kbd>
  );
}
