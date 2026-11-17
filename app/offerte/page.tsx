import type { Metadata } from "next";
import { content } from "@/content";
import ContactLine from "@/components/ContactLine";
import MailtoForm from "@/components/MailtoForm";

export const metadata: Metadata = {
  title: content.pages.offerte.title,
  description: content.pages.offerte.description,
};

export default function OffertePage() {
  const { copy } = content;
  return (
    <article className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="bg-paper px-5 py-14 md:px-10">
        <h1 className="max-w-[12ch] text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08]">{content.pages.offerte.h1}</h1>
        <div className="mt-8 max-w-[46ch] space-y-5">
          <p>{copy.offerte}</p>
          <p>{copy.kortom}</p>
        </div>
        <ContactLine className="mt-8" />
      </div>
      <div className="border-t-[3px] border-olive bg-vlak px-5 py-14 md:px-10 lg:border-t-0 lg:border-l-[3px]">
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
    </article>
  );
}
