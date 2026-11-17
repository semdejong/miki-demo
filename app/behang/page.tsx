import type { Metadata } from "next";
import { content } from "@/content";
import ServiceArticle from "@/components/ServiceArticle";

const page = content.services.behang;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function BehangPage() {
  return <ServiceArticle id="behang" />;
}
