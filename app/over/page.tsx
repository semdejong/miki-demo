import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import ContactLine from "@/components/ContactLine";

export const metadata: Metadata = {
  title: content.pages.over.title,
  description: content.pages.over.description,
};

export default function OverPage() {
  const { company, copy } = content;
  return (
    <article className="lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
      <div className="px-5 py-14 md:px-10 md:py-16">
        <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08]">{content.pages.over.h1}</h1>
        <div className="mt-8 max-w-[62ch] space-y-5">
          <p>{copy.vertrouwen}</p>
          <p>{copy.offerte}</p>
          <p>{copy.kortom}</p>
        </div>
        <p className="mt-8">
          <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-ink px-4 font-medium text-paper hover:bg-olive-text">
            Offerte aanvragen
          </Link>
        </p>
      </div>
      <aside className="border-t-[3px] border-olive bg-vlak px-5 py-12 md:px-8 lg:border-t-0 lg:border-l-[3px]">
        <p className="font-display text-3xl leading-tight">{company.person}</p>
        <p className="mt-4">{company.name}</p>
        <p>{company.street}</p>
        <p>
          {company.postalCode} {company.city}
        </p>
        <ContactLine className="mt-8" />
      </aside>
    </article>
  );
}
