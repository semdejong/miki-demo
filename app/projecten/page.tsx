import type { Metadata } from "next";
import { content, projectGroups } from "@/content";
import CloseStrip from "@/components/CloseStrip";
import Gallery from "@/components/Gallery";
import SeriesIndex from "@/components/SeriesIndex";

export const metadata: Metadata = {
  title: content.pages.projecten.title,
  description: content.pages.projecten.description,
};

export default function ProjectenPage() {
  const { copy } = content;
  return (
    <article>
      <header className="px-5 py-14 md:px-10 md:py-16">
        <h1 className="max-w-[14ch] text-[clamp(2.6rem,5vw,4rem)] leading-[1.02]">{content.pages.projecten.h1}</h1>
        <div className="mt-8 max-w-[62ch] space-y-5">
          <p>{copy.reeksUitleg}</p>
          <p>{copy.nietElkVak}</p>
          <p>Klik op een foto om haar groter te bekijken. Met de pijltjestoetsen bladert u door, met de Escape-toets sluit u.</p>
        </div>
      </header>

      <section aria-labelledby="reeksen">
        <div className="px-5 pb-4 md:px-10">
          <h2 id="reeksen" className="text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">
            {copy.reeksKop}
          </h2>
        </div>
        <SeriesIndex />
      </section>

      <div className="pt-12">
        <Gallery groups={projectGroups} />
      </div>

      <CloseStrip />
    </article>
  );
}
