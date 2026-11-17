"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { content } from "@/content";

export default function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { company, nav, contact } = content;

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const menuTop = headerRef.current?.offsetHeight ?? 108;

  return (
    <header ref={headerRef} className={`sticky top-0 bg-paper ${open ? "z-50" : "z-40"}`}>
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
          style={open ? { top: menuTop } : undefined}
          className={
            open
              ? "fixed inset-x-0 bottom-0 z-50 flex flex-col overflow-y-auto border-t border-ink/15 bg-paper px-3 py-4 min-[1180px]:static min-[1180px]:inset-auto min-[1180px]:z-auto min-[1180px]:flex min-[1180px]:flex-row min-[1180px]:flex-nowrap min-[1180px]:items-center min-[1180px]:gap-x-2.5 min-[1180px]:overflow-visible min-[1180px]:border-0 min-[1180px]:bg-transparent min-[1180px]:px-0 min-[1180px]:py-0"
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
