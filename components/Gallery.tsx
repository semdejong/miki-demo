"use client";

import { useEffect, useRef, useState } from "react";
import { photosByIds, type ProjectPhoto } from "@/content";

type Group = { label: string; slug?: string; note?: string; ids: string[] };

type Props = {
  photos?: ProjectPhoto[];
  groups?: Group[];
  stacked?: boolean;
};

export default function Gallery({ photos, groups, stacked = false }: Props) {
  const flat = groups ? groups.flatMap((group) => photosByIds(group.ids)) : (photos ?? []);
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);
  const wasOpen = useRef(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const open = active !== null;
    if (open && !wasOpen.current) closeRef.current?.focus();
    if (!open && wasOpen.current) {
      returnRef.current?.focus();
      returnRef.current = null;
    }
    wasOpen.current = open;
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) => (index === null ? index : (index + 1) % flat.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index === null ? index : (index - 1 + flat.length) % flat.length));
      }
      if (event.key === "Tab" && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [active, flat.length]);

  const photo = active === null ? null : flat[active];

  const renderItem = (item: ProjectPhoto, index: number) => {
    const portrait = item.height > item.width;
    const wide = !portrait && index % 3 === 0;
    const widthClass = stacked
      ? "w-full"
      : portrait
        ? "w-full sm:w-[48%] lg:w-[24%]"
        : wide
          ? "w-full sm:w-[52%] lg:w-[40%]"
          : "w-full sm:w-[48%] lg:w-[32%]";
    return (
      <figure key={item.id} id={`foto-${item.id}`} className={`scroll-mt-36 ${widthClass}`}>
        <button
          type="button"
          className="block w-full text-left"
          onClick={(event) => {
            returnRef.current = event.currentTarget;
            setActive(index);
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", maxWidth: item.width, height: "auto" }}
          />
          <span className="font-label mt-2 block px-1 text-olive-text" aria-hidden>
            {item.id}
          </span>
        </button>
      </figure>
    );
  };

  let cursor = 0;

  return (
    <div>
      {groups ? (
        groups.map((group) => {
          const start = cursor;
          const slice = flat.slice(start, start + group.ids.length);
          cursor += group.ids.length;
          const slug = group.slug ?? group.label;
          return (
            <section key={slug} id={`groep-${slug}`} className="scroll-mt-28 border-t-[3px] border-olive" aria-labelledby={`kop-${slug}`}>
              <h2 id={`kop-${slug}`} className="font-label px-5 pt-4 text-olive-text md:px-8">
                {group.label}
              </h2>
              {group.note ? <p className="max-w-[58ch] px-5 pt-2 pb-4 md:px-8">{group.note}</p> : null}
              <div className="flex flex-wrap items-start">{slice.map((item, offset) => renderItem(item, start + offset))}</div>
            </section>
          );
        })
      ) : (
        <div className="flex flex-wrap items-start border-t-[3px] border-olive">
          {flat.map((item, index) => renderItem(item, index))}
        </div>
      )}

      {photo && active !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Vergrote projectfoto"
          className="fixed inset-0 z-50 flex flex-col bg-paper"
        >
          <div className="cut-edge shrink-0" aria-hidden />
          <div className="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden px-3 py-4 sm:px-8">
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-auto w-auto max-w-full"
              style={{
                maxWidth: `min(100%, ${photo.width}px)`,
                maxHeight: `min(68dvh, ${photo.height}px)`,
              }}
            />
          </div>
          <div className="bg-paper">
            <div className="cut-edge" aria-hidden />
            <div className="flex flex-wrap items-center gap-2 px-3 py-3 sm:px-5">
              <button
                type="button"
                className="inline-flex min-h-11 items-center border border-ink px-4"
                onClick={() => setActive((index) => (index === null ? index : (index - 1 + flat.length) % flat.length))}
              >
                Vorige
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 items-center border border-ink px-4"
                onClick={() => setActive((index) => (index === null ? index : (index + 1) % flat.length))}
              >
                Volgende
              </button>
              <p className="font-label px-2 text-olive-text" aria-live="polite">
                Foto {active + 1} van {flat.length}
              </p>
              <button
                ref={closeRef}
                type="button"
                data-close
                className="ml-auto inline-flex min-h-11 items-center bg-ink px-4 text-paper"
                onClick={() => setActive(null)}
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
