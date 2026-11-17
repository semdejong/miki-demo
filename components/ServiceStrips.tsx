import Link from "next/link";
import { content } from "@/content";

const toneClass = {
  vlak: "bg-vlak",
  white: "bg-sheet",
  paper: "bg-paper",
} as const;

export default function ServiceStrips() {
  const items = Object.values(content.services);
  return (
    <div className="border-t-[3px] border-olive">
      <div className="flex flex-col min-[1024px]:flex-row min-[1024px]:items-stretch">
        {items.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className={`baan flex min-h-24 flex-col justify-between px-4 py-5 hover:text-purple-text min-[1024px]:min-h-[22rem] min-[1024px]:px-5 min-[1024px]:py-6 ${toneClass[service.tone]}`}
            style={{ ["--grow" as string]: service.grow, ["--baan-w" as string]: service.width }}
          >
            <span className="block min-w-0 text-balance font-display text-[1.65rem] leading-tight min-[1024px]:text-[clamp(1.45rem,1.65vw,2rem)]">
              {service.h1}
            </span>
            <span className="mt-3 block min-w-0 text-[1.0625rem] leading-snug break-words text-ink">{service.strip}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
