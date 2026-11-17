import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import ServiceStrips from "@/components/ServiceStrips";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina van Schildersbedrijf Miki bestaat niet.",
};

export default function NotFound() {
  return (
    <article>
      <div className="px-5 py-16 md:px-10 md:py-20">
        <p className="font-label text-olive-text">404</p>
        <h1 className="mt-4 max-w-[14ch] text-[clamp(2.6rem,5vw,4rem)] leading-[1.02]">Deze pagina bestaat niet</h1>
        <p className="mt-6 max-w-[46ch]">
          Het adres klopt niet, of de pagina is er niet. De baan hieronder is afgesneden. De vakken daaronder bestaan wel.
        </p>
        <p className="mt-8">
          <Link href="/" className="inline-flex min-h-11 items-center bg-ink px-4 font-medium text-paper">
            Naar de homepage
          </Link>
        </p>
      </div>

      <div className="flex items-end border-t-[3px] border-olive" aria-hidden>
        <div className="h-44 w-[12%] bg-vlak sm:w-[16%]" />
        <div className="h-24 w-[22%] border-l border-ink/20 bg-sheet sm:w-[26%]" />
        <div className="flex h-56 min-w-0 flex-1 flex-col justify-end border-l border-ink/15 bg-paper px-5 py-5">
          <p className="font-label text-olive-text">Deze baan is afgesneden</p>
        </div>
      </div>

      <section aria-labelledby="verder" className="pt-14">
        <div className="px-5 pb-4 md:px-10">
          <h2 id="verder" className="text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">
            Verder bij {content.company.name}
          </h2>
        </div>
        <ServiceStrips />
      </section>
    </article>
  );
}
