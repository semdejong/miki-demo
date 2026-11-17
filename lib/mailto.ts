import { content } from "@/content";

export function buildMailto(subject: string, fields: { label: string; value: string }[]): string {
  const safeSubject = subject.startsWith("Goedendag,") ? subject : `Goedendag, ${subject}`;
  const lines = [
    "Goedendag,",
    "",
    ...fields.filter((field) => field.value.trim()).map((field) => `${field.label}: ${field.value.trim()}`),
  ];
  return `${content.contact.email.href}?subject=${encodeURIComponent(safeSubject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
