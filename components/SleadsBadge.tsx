/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="inline-flex min-h-11 w-fit flex-col bg-sheet text-[0.8125rem] font-medium text-ink print:hidden"
    >
      <span className="cut-edge block w-full" aria-hidden />
      <span className="px-3 py-2">
        Concept door <span className="font-semibold">Sleads</span>
      </span>
    </a>
  );
}
