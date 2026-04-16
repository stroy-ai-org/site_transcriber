import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Тарифы — Транскрибатор | От 0 ₽, подписки и пакеты транскрипций",
  description: "Тарифы AI-транскрибатора: Free (3 транскрипции бесплатно), Standard (990 ₽/мес, 25 транскрипций), Pro (2 490 ₽/мес, 75 транскрипций). Дополнительные пакеты от 249 ₽. Доступно в Max и Telegram.",
  alternates: {
    canonical: "https://transcribe-ai.ru/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Главная", url: SITE_URL },
          { name: "Тарифы", url: `${SITE_URL}/pricing` },
        ])}
      />
      {children}
    </>
  );
}
