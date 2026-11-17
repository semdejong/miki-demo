import type { Metadata } from "next";
import { content, projectGroups } from "@/content";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: content.pages.projecten.title,
  description: content.pages.projecten.description,
};

export default function ProjectenPage() {
  return (
    <article>
      <header className="px-5 py-14 md:px-10 md:py-16">
        <h1 className="max-w-[14ch] text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08]">{content.pages.projecten.h1}</h1>
        <p className="mt-6 max-w-[62ch]">
          Hier staan de werkfoto&apos;s, in de nummering van de oorspronkelijke site. Er is geen titel, plaats of jaar bij
          bekend. Klik op een foto om haar groter te bekijken.
        </p>
      </header>
      <Gallery groups={projectGroups} />
    </article>
  );
}
