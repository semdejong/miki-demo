"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { content } from "@/content";

export default function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { company, nav, contact } = content;

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-paper">
      <div className="flex items-center gap-3 px-4 py-2 min-[1180px]:gap-4 min-[1180px]:px-8">
        <Link href="/" className="shrink-0 bg-vlak">
          {/* Logo bevat het woordmerk; niet bijsnijden, niet omkeren. */}
          <img
            src={company.logo}
            alt={company.logoWordmark}
            width={196}
            height={229}
            className="h-[84px] w-auto min-[1180px]:h-24"
          />
        </Link>

        <nav
          id="hoofdmenu"
          aria-label="Hoofdmenu"
          className={
            open
              ? "absolute inset-x-0 top-full z-40 flex max-h-[calc(100dvh-7.5rem)] flex-col overflow-y-auto border-y border-ink/15 bg-paper px-2 py-2 pb-6 min-[1180px]:static min-[1180px]:flex min-[1180px]:max-h-none min-[1180px]:flex-row min-[1180px]:flex-nowrap min-[1180px]:items-center min-[1180px]:gap-x-2.5 min-[1180px]:overflow-visible min-[1180px]:border-0 min-[1180px]:bg-transparent min-[1180px]:px-0 min-[1180px]:py-0"
              : "hidden min-[1180px]:flex min-[1180px]:flex-row min-[1180px]:flex-nowrap min-[1180px]:items-center min-[1180px]:gap-x-2.5"
          }
        >
          {nav.map((item) => {
            const active = item.href === "/" ? path === "/" : path.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                data-cta={item.href === "/offerte" ? "offerte" : undefined}
                className={`flex min-h-11 items-center whitespace-nowrap px-2 text-[15px] font-medium leading-none min-[1180px]:px-1 ${
                  active ? "border-b-2 border-olive" : "border-b-2 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a
            href={contact.mobile.href}
            data-cta="bellen"
            className="inline-flex min-h-11 items-center bg-ink px-3 text-[15px] font-medium text-paper hover:bg-olive-text"
          >
            Bellen
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink px-3 text-[15px] font-medium min-[1180px]:hidden"
            aria-expanded={open}
            aria-controls="hoofdmenu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Sluit" : "Menu"}
          </button>
        </div>
      </div>
      <div className="cut-edge cut-draw" aria-hidden />
    </header>
  );
}
