import Link from "next/link";
import { content } from "@/content";
import ContactLine from "@/components/ContactLine";

/** Afsluiting: de zin over kwaliteit, en een weg naar offerte of telefoon. */
export default function CloseStrip() {
  const { copy } = content;
  return (
    <section className="border-t-[3px] border-olive lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
      <div className="px-5 py-12 md:px-10 md:py-16">
        <p className="max-w-[18ch] font-display text-[clamp(1.8rem,3.2vw,2.7rem)] leading-tight">{copy.kortom}</p>
        <p className="mt-8">
          <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-ink px-4 font-medium text-paper hover:bg-olive-text">
            Offerte aanvragen
          </Link>
        </p>
      </div>
      <div className="border-t border-ink/15 bg-vlak px-5 py-12 md:px-8 lg:border-t-0 lg:border-l-[3px] lg:border-olive">
        <p className="max-w-[28ch] font-display text-2xl leading-tight">
          {copy.vragen} {copy.beantwoord}
        </p>
        <ContactLine className="mt-6" />
      </div>
    </section>
  );
}
