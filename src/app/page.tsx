import Link from "next/link";
import {
  BookOpen,
  Gamepad2,
  Joystick,
  type LucideIcon,
} from "lucide-react";

interface NavCardProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "sky" | "amber";
}

function NavCard({ href, title, description, icon: Icon, accent }: NavCardProps) {
  const accentStyles =
    accent === "sky"
      ? "border-accent-sky/30 bg-accent-sky/10 text-accent-sky group-hover:border-accent-sky/60 group-hover:bg-accent-sky/20"
      : "border-accent-amber/30 bg-accent-amber/10 text-accent-amber group-hover:border-accent-amber/60 group-hover:bg-accent-amber/20";

  return (
    <Link
      href={href}
      className="group flex min-h-[8rem] flex-col gap-4 rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent-sky/50 hover:shadow-[0_0_24px_rgba(56,189,248,0.15)] active:scale-[0.98] sm:min-h-[9rem] sm:p-8"
    >
      <span
        className={`inline-flex h-14 w-14 items-center justify-center rounded-xl border-2 transition-colors ${accentStyles}`}
      >
        <Icon className="h-7 w-7" aria-hidden />
      </span>
      <div>
        <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          {title}
        </h2>
        <p className="mt-1 text-base text-foreground/70">{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <section className="mb-12 rounded-3xl border border-card-border bg-card p-8 text-center sm:p-12">
        <div
          className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border-2 border-accent-sky/40 bg-accent-sky/10 text-6xl shadow-[0_0_40px_rgba(56,189,248,0.2)] sm:h-32 sm:w-32 sm:text-7xl"
          role="img"
          aria-label="Airplane"
        >
          ✈️
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Welcome, Captain!
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/75 sm:text-xl">
          Your flight deck is ready. Pick a mission below and learn to fly like a
          pro in Microsoft Flight Simulator 2024.
        </p>
      </section>

      <section>
        <h2 className="mb-6 font-heading text-2xl font-bold text-accent-amber">
          Choose Your Mission
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <NavCard
            href="/controls"
            title="Controls"
            description="Learn the keyboard and buttons for every flight phase."
            icon={Joystick}
            accent="sky"
          />
          <NavCard
            href="/quiz"
            title="Quiz"
            description="Test your pilot knowledge with a fun interactive game."
            icon={Gamepad2}
            accent="amber"
          />
          <NavCard
            href="/checklist"
            title="Checklist"
            description="Pre-flight and landing checklists to fly safely."
            icon={BookOpen}
            accent="sky"
          />
        </div>
      </section>
    </div>
  );
}
