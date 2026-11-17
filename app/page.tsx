import Link from "next/link";
import { content, photosByIds } from "@/content";
import ContactLine from "@/components/ContactLine";
import { PandStrips, QuoteWays } from "@/components/FactStrips";
import Gallery from "@/components/Gallery";
import ServiceStrips from "@/components/ServiceStrips";

const hero = photosByIds(["19"])[0];
const preview = photosByIds(["01", "20", "06", "22", "14", "31", "39", "73"]);

export default function Home() {
  const { copy, contact } = content;
  return (
    <>
      <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,460px)]">
          <div className="rise max-w-[44rem]">
            <h1 className="max-w-[16ch] text-[clamp(2.35rem,4.6vw,3.55rem)] leading-[1.08]">{copy.h1}</h1>
            <p className="mt-8 max-w-[36ch] font-display text-[clamp(1.35rem,2vw,1.7rem)] leading-snug">{copy.geenTijd}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contact.mobile.href} data-cta="bellen" className="inline-flex min-h-11 items-center bg-ink px-4 font-medium text-paper hover:bg-olive-text">
                Bellen
              </a>
              <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center border border-ink px-4 font-medium hover:text-purple-text">
                Offerte aanvragen
              </Link>
            </div>
            <ContactLine className="mt-6" />
            <div className="mt-8 max-w-[62ch] space-y-5">
              <p>{copy.zoek}</p>
              <p>{copy.gespecialiseerd}</p>
            </div>
          </div>
          <figure className="border-t-[3px] border-olive pt-4 lg:border-t-0 lg:border-l-[3px] lg:pt-0 lg:pl-4">
            <Link href="/projecten#foto-19" className="block">
              <img
                src={hero.src}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                style={{ width: "100%", maxWidth: hero.width, height: "auto" }}
              />
            </Link>
            <figcaption className="font-label mt-3 text-olive-text">Foto 19</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="panden">
        <div className="px-5 pb-4 md:px-10">
          <h2 id="panden" className="max-w-[18ch] text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">
            {copy.pandenKop}
          </h2>
          <p className="mt-4 max-w-[58ch]">In Lochem of omgeving. Eén aanspreekpunt voor het hele onderhoud.</p>
        </div>
        <PandStrips />
      </section>

      <section aria-labelledby="vakken" className="pt-16">
        <div className="px-5 pb-4 md:px-10">
          <h2 id="vakken" className="max-w-[16ch] text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">
            Alles onder één dak
          </h2>
          <p className="font-label mt-6 text-olive-text">{copy.baanLabel}</p>
        </div>
        <ServiceStrips />
      </section>

      <section className="on-ink bg-ink text-paper">
        <div className="cut-edge-yellow" aria-hidden />
        <blockquote className="px-5 py-14 md:px-10 md:py-20">
          <p className="max-w-[18ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15]">{copy.kortom}</p>
        </blockquote>
      </section>

      <section aria-labelledby="langs" className="pt-16">
        <div className="px-5 pb-4 md:px-10">
          <h2 id="langs" className="max-w-[16ch] text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">
            {copy.langsKop}
          </h2>
          <p className="mt-4 max-w-[58ch]">{copy.offerte}</p>
        </div>
        <QuoteWays />
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(240px,0.7fr)]">
          <div className="max-w-[62ch] space-y-5">
            <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">Mijn belangrijkste uitgangspunt</h2>
            <p>{copy.vertrouwen}</p>
            <p>
              <Link href="/over" className="prose-link">
                Meer over Nusret Jasarevic
              </Link>
            </p>
          </div>
          <div className="border-t-[3px] border-olive pt-4 lg:border-t-0 lg:border-l-[3px] lg:pt-0 lg:pl-6">
            <p className="font-label text-olive-text">Lochem</p>
            <p className="mt-3 font-display text-3xl leading-tight">{content.company.person}</p>
            <p className="mt-2">{content.company.name}</p>
            <p>{content.company.street}</p>
            <p>
              {content.company.postalCode} {content.company.city}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="werkfotos">
        <div className="flex flex-wrap items-end justify-between gap-4 px-5 pb-4 md:px-10">
          <h2 id="werkfotos" className="text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">
            Werkfoto&apos;s
          </h2>
          <Link href="/projecten" className="prose-link inline-flex min-h-11 items-center">
            Alle 74 projectfoto&apos;s
          </Link>
        </div>
        <p className="max-w-[62ch] px-5 pb-6 md:px-10">{copy.fotoNote}</p>
        <Gallery photos={preview} />
      </section>

      <section className="border-t-[3px] border-olive px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">Vragen of opmerkingen</h2>
        <p className="mt-6 max-w-[62ch]">
          {copy.vragen} Neem dan contact op via{" "}
          <a className="prose-link" href={contact.email.href} data-cta="mailen">
            {contact.email.display}
          </a>
          . {copy.beantwoord}
        </p>
        <p className="mt-6">
          <Link href="/contact" className="prose-link inline-flex min-h-11 items-center">
            Naar contact
          </Link>
        </p>
      </section>
    </>
  );
}
