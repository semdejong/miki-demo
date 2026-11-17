import Link from "next/link";
import { content } from "@/content";
import ContactLine from "@/components/ContactLine";

export default function SiteFooter() {
  const { company } = content;
  return (
    <footer className="mt-auto bg-paper">
      <div className="cut-edge" aria-hidden />
      <div className="grid gap-8 px-5 py-12 md:px-10 lg:grid-cols-[1.2fr_1fr]">
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
