import Link from "next/link";
import { content, photosByIds, type ServiceId } from "@/content";
import Gallery from "@/components/Gallery";

export default function ServiceArticle({ id }: { id: ServiceId }) {
  const service = content.services[id];
  const photos = photosByIds(service.photoIds);
  return (
    <article>
      <div className="border-t-[3px] border-olive lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div className="bg-vlak px-5 py-12 md:px-10 md:py-16">
          <h1 className="max-w-[12ch] text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08]">{service.h1}</h1>
          <div className="mt-8 max-w-[62ch] space-y-5">
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
        <div className="min-w-0 border-t border-ink/15 bg-paper lg:border-t-0 lg:border-l lg:border-ink/15">
          {photos.length > 0 ? (
            <>
              <p className="px-5 pt-6 text-[1.0625rem] leading-relaxed md:px-6">{content.copy.fotoNote}</p>
              <Gallery photos={photos} stacked />
            </>
          ) : (
            <div className="flex h-full min-h-64 flex-col justify-end px-5 py-10 md:px-8">
              <p className="font-label text-olive-text">Behang</p>
              <p className="mt-4 max-w-[28ch] font-display text-3xl leading-tight">
                Behangwerk vraagt u aan samen met de rest van het onderhoud.
              </p>
              <Link href="/projecten" className="prose-link mt-6 inline-flex min-h-11 items-center">
                Alle projectfoto&apos;s
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
