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
      <header className="px-5 pt-14 pb-8 md:px-10 md:pt-16">
        <h1 className="max-w-[12ch] text-[clamp(2.6rem,5.4vw,4rem)] leading-[1.02]">{service.h1}</h1>
        <p className="mt-6 max-w-[32ch] font-display text-[clamp(1.45rem,2.2vw,1.85rem)] leading-snug">{service.lead}</p>
        <p className="font-label mt-6 text-olive-text">Woning · Kantoor · Winkel · Bedrijfsunit</p>
      </header>

      <div className="border-t-[3px] border-olive bg-vlak px-5 py-12 md:px-10 md:py-16">
        <div className="max-w-[68ch] space-y-5">
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

      {photos.length > 0 ? (
        <section aria-label="Werkfoto's bij dit vak" className="pt-10">
          <p className="max-w-[62ch] px-5 pb-5 md:px-10">{content.copy.fotoNote}</p>
          <Gallery photos={photos} />
        </section>
      ) : (
        <BehangDrop />
      )}

      <section aria-labelledby="andere-banen">
        <div className="px-5 pt-14 pb-4 md:px-10">
          <h2 id="andere-banen" className="max-w-[16ch] text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">
            Ook onder één dak
          </h2>
          <p className="mt-4 max-w-[58ch]">De andere vakken horen bij hetzelfde onderhoud. U hoeft het werk niet te verdelen.</p>
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
    <div className="flex min-h-[22rem] border-t-[3px] border-olive">
      <div className="w-5 shrink-0 bg-vlak sm:w-14" aria-hidden />
      <div className="w-px shrink-0 bg-ink/20" aria-hidden />
      <div className="flex min-w-0 flex-1 flex-col justify-between bg-sheet px-5 py-8 sm:max-w-xl sm:px-8">
        <p className="font-label text-olive-text">Behang</p>
        <div>
          <p className="font-display text-[clamp(1.7rem,2.6vw,2.4rem)] leading-tight">
            Behangwerk vraagt u aan samen met de rest van het onderhoud.
          </p>
          <p className="mt-4 max-w-[36ch] text-[1.0625rem] leading-relaxed">
            Op de werkfoto&apos;s is geen behangbeurt als zodanig te herkennen.
          </p>
          <Link href="/projecten" className="prose-link mt-6 inline-flex min-h-11 items-center">
            Alle projectfoto&apos;s
          </Link>
        </div>
      </div>
      <div className="hidden w-8 shrink-0 bg-paper sm:block" aria-hidden />
      <div className="hidden w-px shrink-0 bg-ink/15 sm:block" aria-hidden />
      <div className="hidden min-w-16 flex-1 bg-vlak sm:block" aria-hidden />
    </div>
  );
}
