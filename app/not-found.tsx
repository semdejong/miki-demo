import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina van Schildersbedrijf Miki bestaat niet.",
};

export default function NotFound() {
  return (
    <article className="px-5 py-20 md:px-10 md:py-28">
      <p className="font-label text-olive-text">404</p>
      <h1 className="mt-4 max-w-[14ch] text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08]">Deze pagina bestaat niet</h1>
      <p className="mt-6 max-w-[46ch]">
        Het adres klopt niet, of de pagina is er niet. Ga terug naar de startpagina van Schildersbedrijf Miki.
      </p>
      <p className="mt-8">
        <Link href="/" className="inline-flex min-h-11 items-center bg-ink px-4 font-medium text-paper">
          Naar de homepage
        </Link>
      </p>
    </article>
  );
}
