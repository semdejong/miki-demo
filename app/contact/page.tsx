import type { Metadata } from "next";
import { content } from "@/content";
import ContactLine from "@/components/ContactLine";
import MailtoForm from "@/components/MailtoForm";

export const metadata: Metadata = {
  title: content.pages.contact.title,
  description: content.pages.contact.description,
};

export default function ContactPage() {
  const { company, copy } = content;
  return (
    <article className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="border-t-[3px] border-olive bg-vlak px-5 py-14 md:px-10">
        <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08]">{content.pages.contact.h1}</h1>
        <p className="mt-6 max-w-[36ch] font-display text-3xl leading-tight">
          {copy.vragen} {copy.beantwoord}
        </p>
        <address className="mt-8">
          <p>{company.person}</p>
          <p>{company.name}</p>
          <p>{company.street}</p>
          <p>
            {company.postalCode} {company.city}
          </p>
        </address>
        <ContactLine className="mt-6" />
      </div>
      <div className="border-t border-ink/15 px-5 py-14 md:px-10 lg:border-t-0 lg:border-l lg:border-ink/15">
        <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">Stuur een e-mail</h2>
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
    </article>
  );
}
