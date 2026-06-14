import { ControlsPanel } from "@/components/ControlsPanel";

export default function ControlsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-6">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Flight Controls
        </h1>
        <p className="mt-2 max-w-2xl text-base text-foreground/70 sm:text-lg">
          Your cheat sheet for the joystick, throttle, keyboard, and mouse.
          Pick a flight phase and learn what to press!
        </p>
      </header>

      <ControlsPanel />
    </div>
  );
}
