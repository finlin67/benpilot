import Link from "next/link";
import { ControlsPanel } from "@/components/ControlsPanel";

export default function ControlsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Flight Controls
            </h1>
            <p className="mt-2 max-w-2xl text-base text-foreground/70 sm:text-lg">
              Your cheat sheet for the joystick, throttle, keyboard, and mouse.
              Pick a flight phase and learn what to press!
            </p>
          </div>
          <Link
            href="/controls/joystick"
            className="inline-flex shrink-0 items-center self-start rounded-xl border border-accent-sky/40 bg-accent-sky/10 px-4 py-2.5 font-heading text-sm font-bold text-accent-sky transition-all hover:border-accent-sky/70 hover:bg-accent-sky/20 active:scale-[0.98]"
          >
            Learn your hardware →
          </Link>
        </div>
      </header>

      <ControlsPanel />
    </div>
  );
}
