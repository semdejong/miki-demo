import { content } from "@/content";

const toneClass = {
  vlak: "bg-vlak",
  white: "bg-sheet",
  paper: "bg-paper",
} as const;

/** Vier pandsoorten uit de zin over totaalonderhoud, als banen van verschillende breedte. */
export function PandStrips() {
  return (
    <div className="border-t-[3px] border-olive">
      <div className="flex flex-col min-[1024px]:flex-row min-[1024px]:items-stretch">
        {content.panden.map((pand) => (
          <div
            key={pand.id}
            className={`baan flex min-h-28 items-end px-4 py-6 min-[1024px]:min-h-52 min-[1024px]:px-5 ${toneClass[pand.tone]}`}
            style={{ ["--grow" as string]: pand.grow, ["--baan-w" as string]: pand.width }}
          >
            <p className="block min-w-0 font-display text-[clamp(1.7rem,2.2vw,2.6rem)] leading-tight break-words">
              {pand.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** De twee manieren waarop de offerte wordt afgesproken. */
export function QuoteWays() {
  return (
    <div className="border-t-[3px] border-olive">
      <div className="flex flex-col min-[800px]:flex-row min-[800px]:items-stretch">
        {content.wijzen.map((way) => (
          <div
            key={way.id}
            className={`baan flex min-h-44 flex-col justify-between px-5 py-8 min-[800px]:min-h-72 ${toneClass[way.tone]}`}
            style={{ ["--grow" as string]: way.grow, ["--baan-w" as string]: way.width }}
          >
            <p className="font-label text-olive-text">{way.label}</p>
            <p className="mt-8 max-w-[20ch] font-display text-[clamp(1.6rem,2.4vw,2.35rem)] leading-tight">{way.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
