import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JoystickDiagram } from "@/components/diagrams/JoystickDiagram";
import { ThrottleDiagram } from "@/components/diagrams/ThrottleDiagram";

export default function JoystickHardwarePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/controls"
        className="mb-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent-sky transition-colors hover:text-accent-amber"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to Controls
      </Link>

      <header className="mb-10">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Learn Your Hardware
        </h1>
        <p className="mt-2 max-w-2xl text-base text-foreground/70 sm:text-lg">
          Ben&apos;s flight deck uses a Thrustmaster sidestick and a Logitech
          throttle quadrant. Here&apos;s what every part does!
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 font-heading text-xl font-bold text-accent-sky sm:text-2xl">
          Sidestick
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-foreground/70 sm:text-base">
          The stick is your main flying control.{" "}
          <span className="font-semibold text-accent-amber">
            Amber labels
          </span>{" "}
          mark the controls you&apos;ll use most.
        </p>
        <div className="overflow-hidden rounded-2xl border border-card-border bg-card p-4 sm:p-6">
          <JoystickDiagram />
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-heading text-xl font-bold text-accent-sky sm:text-2xl">
          Throttle Quadrant
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-foreground/70 sm:text-base">
          The throttle levers control engine power. Push forward for more
          speed, pull back to slow down.
        </p>
        <div className="overflow-hidden rounded-2xl border border-card-border bg-card p-4 sm:p-6">
          <ThrottleDiagram />
        </div>
      </section>
    </div>
  );
}
