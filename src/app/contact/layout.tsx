import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Контакты — Транскрибатор | ООО «Реактми»",
  description: "Контактная информация и реквизиты ООО «Реактми» — разработчика AI-бота для транскрибации совещаний.",
  alternates: {
    canonical: "https://transcribe-ai.ru/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Главная", url: SITE_URL },
          { name: "Контакты", url: `${SITE_URL}/contact` },
        ])}
      />
      {children}
    </>
  );
}
