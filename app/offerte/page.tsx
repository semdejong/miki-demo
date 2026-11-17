import type { Metadata } from "next";
import { content } from "@/content";
import ContactLine from "@/components/ContactLine";
import { QuoteWays } from "@/components/FactStrips";
import MailtoForm from "@/components/MailtoForm";

export const metadata: Metadata = {
  title: content.pages.offerte.title,
  description: content.pages.offerte.description,
};

export default function OffertePage() {
  const { copy, contact } = content;
  return (
    <article>
      <header className="px-5 pt-14 pb-8 md:px-10 md:pt-16">
        <h1 className="max-w-[14ch] text-[clamp(2.6rem,5vw,4rem)] leading-[1.02]">{content.pages.offerte.h1}</h1>
        <div className="mt-8 max-w-[58ch] space-y-5">
          <p>{copy.offerte}</p>
          <p>
            Schrijf erbij of het om een woning, kantoor, winkel of bedrijfsunit gaat, en of u schilderwerk, behang, beglazing, stucwerk of klein timmerwerk bedoelt. Een vaste aanneemsom of een prijs op uren: dat spreken we af.
          </p>
        </div>
      </header>

      <QuoteWays />

      <div className="border-t-[3px] border-olive lg:grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <div className="bg-paper px-5 py-12 md:px-10 md:py-16">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">Of bel</h2>
          <p className="mt-4 max-w-[36ch]">{copy.kortom}</p>
          <ContactLine className="mt-6" />
          <p className="mt-6 max-w-[36ch]">
            De mail opent in uw eigen programma, aan {contact.email.display}. Er gaat niets naar een server.
          </p>
        </div>
        <div className="border-t border-ink/15 bg-vlak px-5 py-12 md:px-10 md:py-16 lg:border-t-0 lg:border-l-[3px] lg:border-olive">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">Uw aanvraag</h2>
          <div className="mt-8">
            <MailtoForm
              cta="offerte"
              subject="Goedendag, offerteaanvraag"
              submitLabel="Open de offerte-mail"
              fields={[
                { name: "naam", label: "Naam", type: "text", autoComplete: "name" },
                { name: "telefoon", label: "Telefoon", type: "tel", autoComplete: "tel" },
                { name: "email", label: "E-mail", type: "email", autoComplete: "email" },
                { name: "plaats", label: "Plaats of adres", type: "text", autoComplete: "street-address" },
                { name: "bericht", label: "Omschrijving", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
