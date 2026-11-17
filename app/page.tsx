import Link from "next/link";
import { content, photosByIds } from "@/content";
import ContactLine from "@/components/ContactLine";
import Gallery from "@/components/Gallery";
import ServiceStrips from "@/components/ServiceStrips";

const hero = photosByIds(["19"])[0];
const preview = photosByIds(["01", "06", "14", "31", "72"]);

export default function Home() {
  const { copy, contact } = content;
  return (
    <>
      <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,460px)]">
          <div className="rise max-w-[44rem]">
            <h1 className="max-w-[16ch] text-[clamp(2.35rem,4.6vw,3.55rem)] leading-[1.08]">{copy.h1}</h1>
            <p className="mt-8 max-w-[62ch]">{copy.geenTijd}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contact.mobile.href} data-cta="bellen" className="inline-flex min-h-11 items-center bg-ink px-4 font-medium text-paper hover:bg-olive-text">
                Bellen
              </a>
              <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center border border-ink px-4 font-medium hover:text-purple-text">
                Offerte aanvragen
              </Link>
            </div>
            <ContactLine className="mt-6" />
            <p className="mt-8 max-w-[62ch]">{copy.gespecialiseerd}</p>
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

      <section aria-labelledby="vakken">
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

      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="max-w-[62ch] space-y-5">
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">Mijn belangrijkste uitgangspunt</h2>
          <p>{copy.vertrouwen}</p>
          <p>{copy.offerte}</p>
        </div>
      </section>

      <section aria-labelledby="werkfotos">
        <div className="flex flex-wrap items-end justify-between gap-4 px-5 pb-4 md:px-10">
          <h2 id="werkfotos" className="text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">
            Werkfoto&apos;s
          </h2>
          <Link href="/projecten" className="prose-link inline-flex min-h-11 items-center">
            Alle projectfoto&apos;s
          </Link>
        </div>
        <p className="max-w-[62ch] px-5 pb-6 md:px-10">{copy.fotoNote}</p>
        <Gallery photos={preview} />
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">Vragen of opmerkingen</h2>
        <p className="mt-6 max-w-[62ch]">
          {copy.vragen} Neem dan contact op via{" "}
          <a className="prose-link" href={contact.email.href} data-cta="mailen">
            {contact.email.display}
          </a>
          . {copy.beantwoord}
        </p>
      </section>
    </>
  );
}
