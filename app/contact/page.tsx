import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import ContactLine from "@/components/ContactLine";
import MailtoForm from "@/components/MailtoForm";

export const metadata: Metadata = {
  title: content.pages.contact.title,
  description: content.pages.contact.description,
};

export default function ContactPage() {
  const { company, copy, contact } = content;
  return (
    <article>
      <header className="px-5 pt-14 pb-8 md:px-10 md:pt-16">
        <h1 className="text-[clamp(2.6rem,5vw,4rem)] leading-[1.02]">{content.pages.contact.h1}</h1>
        <p className="mt-6 max-w-[34ch] font-display text-[clamp(1.45rem,2.2vw,1.9rem)] leading-snug">
          {copy.vragen} {copy.beantwoord}
        </p>
      </header>

      <div className="border-t-[3px] border-olive lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="bg-vlak px-5 py-12 md:px-10 md:py-16">
          <address>
            <p className="font-display text-[clamp(2rem,3vw,2.8rem)] leading-tight">{company.person}</p>
            <p className="mt-4">{company.name}</p>
            <p>{company.street}</p>
            <p>
              {company.postalCode} {company.city}
            </p>
          </address>
          <ContactLine className="mt-8" />
          <div className="mt-8 max-w-[40ch] space-y-5">
            <p>{copy.offerte}</p>
            <p>
              Liever meteen een offerte?{" "}
              <Link href="/offerte" data-cta="offerte" className="prose-link">
                Open het offerteformulier
              </Link>
              . Bellen kan op{" "}
              <a className="prose-link" href={contact.mobile.href} data-cta="bellen">
                {contact.mobile.display}
              </a>{" "}
              of op{" "}
              <a className="prose-link" href={contact.phone.href} data-cta="bellen">
                {contact.phone.display}
              </a>
              .
            </p>
          </div>
        </div>
        <div className="border-t border-ink/15 px-5 py-12 md:px-10 md:py-16 lg:border-t-0 lg:border-l-[3px] lg:border-olive">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">Stuur een e-mail</h2>
          <p className="mt-4 max-w-[46ch]">
            De mail gaat naar {contact.email.display}. {copy.beantwoord}
          </p>
          <div className="mt-8">
            <MailtoForm
              cta="mailen"
              subject="Goedendag, vraag via de website"
              submitLabel="Open de e-mail"
              fields={[
                { name: "naam", label: "Naam", type: "text", autoComplete: "name" },
                { name: "telefoon", label: "Telefoon", type: "tel", autoComplete: "tel" },
                { name: "email", label: "E-mail", type: "email", autoComplete: "email" },
                { name: "bericht", label: "Bericht", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
