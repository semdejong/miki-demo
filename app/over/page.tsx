import type { Metadata } from "next";
import Link from "next/link";
import { content, photosByIds } from "@/content";
import CloseStrip from "@/components/CloseStrip";
import ContactLine from "@/components/ContactLine";
import { QuoteWays } from "@/components/FactStrips";
import Gallery from "@/components/Gallery";

const fotos = photosByIds(["19", "01", "72"]);

export const metadata: Metadata = {
  title: content.pages.over.title,
  description: content.pages.over.description,
};

export default function OverPage() {
  const { company, copy } = content;
  return (
    <article>
      <div className="lg:grid lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.28fr)]">
        <aside className="flex min-h-80 flex-col justify-between border-b-[3px] border-olive bg-vlak px-5 py-12 md:px-8 lg:min-h-[36rem] lg:border-r-[3px] lg:border-b-0">
          <p className="font-label text-olive-text">Lochem of omgeving</p>
          <div>
            <p className="font-display text-[clamp(2.4rem,4vw,3.6rem)] leading-[1.02]">{company.person}</p>
            <p className="mt-4">{company.name}</p>
            <p>{company.street}</p>
            <p>
              {company.postalCode} {company.city}
            </p>
            <ContactLine className="mt-6" />
          </div>
        </aside>
        <div className="px-5 py-14 md:px-10 md:py-16">
          <h1 className="text-[clamp(2.6rem,5vw,4rem)] leading-[1.02]">{content.pages.over.h1}</h1>
          <div className="mt-8 max-w-[60ch] space-y-5">
            <p>{copy.zoek}</p>
            <p>{copy.geenTijd}</p>
            <p>{copy.vertrouwen}</p>
            <p>{copy.gespecialiseerd}</p>
          </div>
          <p className="mt-8">
            <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-ink px-4 font-medium text-paper hover:bg-olive-text">
              Offerte aanvragen
            </Link>
          </p>
        </div>
      </div>

      <section aria-labelledby="afspraak" className="pt-4">
        <div className="px-5 pb-4 md:px-10">
          <h2 id="afspraak" className="max-w-[16ch] text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">
            {copy.langsKop}
          </h2>
          <p className="mt-4 max-w-[58ch]">{copy.offerte}</p>
        </div>
        <QuoteWays />
      </section>

      <section aria-labelledby="over-fotos" className="pt-16">
        <div className="px-5 pb-4 md:px-10">
          <h2 id="over-fotos" className="text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">
            Uit het werk
          </h2>
          <p className="mt-4 max-w-[58ch]">{copy.fotoNote}</p>
        </div>
        <Gallery photos={fotos} />
        <p className="px-5 py-6 md:px-10">
          <Link href="/projecten" className="prose-link inline-flex min-h-11 items-center">
            Alle 74 projectfoto&apos;s
          </Link>
        </p>
      </section>

      <CloseStrip />
    </article>
  );
}
