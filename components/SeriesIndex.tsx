import { projectGroups } from "@/content";

const grows = [1.35, 0.9, 1.15, 0.8, 1.05, 1.25, 0.95, 1.1, 0.85, 1.2, 1];

/** Inhoudsopgave van de fotoreeksen. Alleen nummers en wat er zichtbaar is. */
export default function SeriesIndex() {
  return (
    <nav aria-label="Fotoreeksen" className="border-t-[3px] border-olive">
      <div className="flex flex-wrap">
        {projectGroups.map((group, index) => (
          <a
            key={group.slug}
            href={`#groep-${group.slug}`}
            className="flex min-h-36 min-w-[46%] flex-1 flex-col justify-between border-r border-b border-ink/15 px-4 py-4 hover:text-purple-text sm:min-w-[16rem]"
            style={{ flexGrow: grows[index] ?? 1 }}
          >
            <span className="font-label text-olive-text">{group.label}</span>
            <span className="mt-3 block min-w-0 text-[1.0625rem] leading-snug">{group.note}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
