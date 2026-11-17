import Link from "next/link";
import { content } from "@/content";

export default function MobileBar() {
  return (
    <div className="on-ink fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="cut-edge" aria-hidden />
      <div className="grid grid-cols-2 bg-ink">
        <a
          href={content.contact.mobile.href}
          data-cta="bellen"
          className="inline-flex min-h-14 items-center justify-center text-[1.0625rem] font-medium text-paper"
        >
          Bellen
        </a>
        <Link
          href="/offerte"
          data-cta="offerte"
          className="inline-flex min-h-14 items-center justify-center border-l border-paper/25 text-[1.0625rem] font-medium text-paper"
        >
          Offerte
        </Link>
      </div>
    </div>
  );
}
