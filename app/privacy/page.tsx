import type { Metadata } from "next";
import { content } from "@/content";

export const metadata: Metadata = {
  title: content.pages.privacy.title,
  description: content.pages.privacy.description,
};

export default function PrivacyPage() {
  return (
    <article className="px-5 py-14 md:px-10 md:py-16">
      <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08]">{content.pages.privacy.h1}</h1>
      <div className="mt-8 max-w-[62ch] space-y-5">
        {content.pages.privacy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
