import Link from "next/link";
import { content } from "@/content";
import ContactLine from "@/components/ContactLine";

export default function SiteFooter() {
  const { company } = content;
  return (
    <footer className="mt-auto bg-paper">
      <div className="cut-edge" aria-hidden />
      <nav aria-label="Vakken" className="flex flex-wrap gap-x-5 gap-y-1 px-5 pt-6 md:px-10">
        {Object.values(content.services).map((service) => (
          <Link key={service.href} href={service.href} className="prose-link inline-flex min-h-11 items-center">
            {service.nav}
          </Link>
        ))}
        <Link href="/projecten" className="prose-link inline-flex min-h-11 items-center">
          Projectfoto&apos;s
        </Link>
      </nav>
      <div className="grid gap-8 px-5 py-8 md:px-10 lg:grid-cols-[1.2fr_1fr]">
        <address>
          <p className="font-display text-3xl leading-tight">{company.person}</p>
          <p className="mt-3">{company.name}</p>
          <p>{company.street}</p>
          <p>
            {company.postalCode} {company.city}
          </p>
        </address>
        <ContactLine />
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 pb-4 md:px-10">
        <Link href="/privacy" className="prose-link min-h-11 inline-flex items-center">
          Privacy
        </Link>
        <p>Concept door Sleads</p>
      </div>
    </footer>
  );
}
