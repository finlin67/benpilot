import { ChecklistBoard } from "@/components/ChecklistBoard";

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Flight Checklists
        </h1>
        <p className="mt-2 max-w-xl text-base text-foreground/70 sm:text-lg">
          Real pilots use checklists before every flight. Tap each item as you
          complete it — just like on the flight deck!
        </p>
      </header>

      <ChecklistBoard />
    </div>
  );
}
