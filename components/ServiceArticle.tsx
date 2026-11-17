import Link from "next/link";
import { content, photosByIds, type ServiceId } from "@/content";
import CloseStrip from "@/components/CloseStrip";
import Gallery from "@/components/Gallery";
import ServiceStrips from "@/components/ServiceStrips";

export default function ServiceArticle({ id }: { id: ServiceId }) {
  const service = content.services[id];
  const photos = photosByIds(service.photoIds);
  return (
    <article>
      <header className="px-5 pt-14 pb-6 md:px-10 md:pt-16">
        <h1 className="max-w-[12ch] text-[clamp(2.6rem,5.4vw,4rem)] leading-[1.02]">{service.h1}</h1>
        <p className="mt-6 max-w-[28ch] font-display text-[clamp(1.45rem,2.2vw,1.85rem)] leading-snug">{service.lead}</p>
      </header>

      <div className="border-t-[3px] border-olive lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
        <div className="bg-vlak px-5 py-12 md:px-10 md:py-16">
          <div className="max-w-[62ch] space-y-5">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-ink px-4 font-medium text-paper hover:bg-olive-text">
              Offerte aanvragen
            </Link>
          </p>
        </div>
        <div className="relative min-w-0 border-t border-ink/15 bg-paper lg:border-t-0 lg:border-l-[3px] lg:border-olive">
          {photos.length > 0 ? (
            <>
              <p className="px-5 pt-6 text-[1.0625rem] leading-relaxed md:px-6">{content.copy.fotoNote}</p>
              <Gallery photos={photos} stacked />
            </>
          ) : (
            <BehangDrop />
          )}
        </div>
      </div>

      <section aria-labelledby="andere-banen">
        <div className="px-5 pt-14 pb-4 md:px-10">
          <h2 id="andere-banen" className="max-w-[16ch] text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">
            Ook onder één dak
          </h2>
          <p className="mt-4 max-w-[58ch]">
            Behang, beglazing, stucwerk en klein timmerwerk lopen naast het schilderwerk. U hoeft het onderhoud niet te verdelen.
          </p>
        </div>
        <ServiceStrips current={id} />
      </section>

      <CloseStrip />
    </article>
  );
}

/** Geen behangfoto voorhanden: de pagina zelf is de baan. */
function BehangDrop() {
  return (
    <div className="flex min-h-[28rem] items-stretch lg:absolute lg:inset-0 lg:min-h-0">
      <div className="w-[14%] bg-vlak" aria-hidden />
      <div className="w-px bg-ink/20" aria-hidden />
      <div className="flex w-[52%] flex-col justify-end bg-sheet px-5 py-10 sm:px-7">
        <p className="font-label text-olive-text">Behang</p>
        <p className="mt-4 font-display text-[clamp(1.7rem,2.5vw,2.3rem)] leading-tight">
          Behangwerk vraagt u aan samen met de rest van het onderhoud.
        </p>
        <p className="mt-4 text-[1.0625rem] leading-relaxed">
          Op de werkfoto&apos;s is geen behangbeurt als zodanig te herkennen.
        </p>
        <Link href="/projecten" className="prose-link mt-6 inline-flex min-h-11 items-center">
          Alle projectfoto&apos;s
        </Link>
      </div>
      <div className="w-px bg-ink/15" aria-hidden />
      <div className="w-[12%] bg-paper" aria-hidden />
      <div className="min-w-0 flex-1 bg-vlak" aria-hidden />
    </div>
  );
}
