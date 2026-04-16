import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тарифы — Транскрибатор | От 0 ₽, подписки и пакеты транскрипций",
  description: "Тарифы AI-транскрибатора: Free (3 транскрипции бесплатно), Standard (990 ₽/мес, 25 транскрипций), Pro (2 490 ₽/мес, 75 транскрипций). Дополнительные пакеты от 249 ₽. Доступно в Max и Telegram.",
  alternates: {
    canonical: "https://transcribe-ai.ru/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
