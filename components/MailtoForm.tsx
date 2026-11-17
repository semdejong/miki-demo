"use client";

import { useState, type FormEvent } from "react";
import { content } from "@/content";
import { buildMailto } from "@/lib/mailto";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  autoComplete?: string;
};

type Props = {
  fields: Field[];
  subject: string;
  submitLabel: string;
  cta: "offerte" | "mailen";
};

export default function MailtoForm({ fields, subject, submitLabel, cta }: Props) {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = fields.map((field) => ({
      label: field.label,
      value: String(data.get(field.name) ?? ""),
    }));
    const byName = Object.fromEntries(values.map((field, index) => [fields[index].name, field.value.trim()]));
    if (!byName.naam || !byName.bericht || (!byName.telefoon && !byName.email)) {
      setError("Vul uw naam, een telefoonnummer of e-mailadres, en uw bericht in. Dan opent uw mailprogramma.");
      return;
    }
    setError("");
    window.location.href = buildMailto(subject, values);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-xl space-y-5">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-1 block font-medium">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={6}
              autoComplete={field.autoComplete}
              className="w-full border border-ink bg-sheet px-3 py-2 text-[1.125rem] leading-normal"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              className="w-full min-h-11 border border-ink bg-sheet px-3 text-[1.125rem]"
            />
          )}
        </div>
      ))}
      {error ? (
        <p role="alert" className="text-purple-text">
          {error}
        </p>
      ) : null}
      <button type="submit" data-cta={cta} className="inline-flex min-h-11 items-center bg-ink px-4 font-medium text-paper hover:bg-olive-text">
        {submitLabel}
      </button>
      <p className="text-[1.0625rem] leading-relaxed">{content.copy.formNote}</p>
    </form>
  );
}
