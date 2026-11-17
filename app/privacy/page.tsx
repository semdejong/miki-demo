import type { Metadata } from "next";
import { content } from "@/content";

export const metadata: Metadata = {
  title: content.pages.privacy.title,
  description: content.pages.privacy.description,
};

export default function PrivacyPage() {
  const [first, ...rest] = content.pages.privacy.paragraphs;
  return (
    <article className="lg:grid lg:grid-cols-[minmax(200px,0.55fr)_minmax(0,1.45fr)]">
      <aside className="flex min-h-48 flex-col justify-between border-b-[3px] border-olive bg-vlak px-5 py-12 md:px-8 lg:min-h-[28rem] lg:border-r-[3px] lg:border-b-0">
        <p className="font-label text-olive-text">Concept</p>
        <p className="mt-8 font-display text-[clamp(2rem,3vw,2.8rem)] leading-tight">Geen cookies. Geen formulier op een server.</p>
      </aside>
      <div className="px-5 py-14 md:px-10 md:py-16">
        <h1 className="text-[clamp(2.6rem,5vw,4rem)] leading-[1.02]">{content.pages.privacy.h1}</h1>
        <div className="mt-8 max-w-[62ch] space-y-5">
          <p>{first}</p>
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
