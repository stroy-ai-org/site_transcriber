import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — Транскрибатор | ООО «Реактми»",
  description: "Контактная информация и реквизиты ООО «Реактми» — разработчика AI-бота для транскрибации совещаний.",
  alternates: {
    canonical: "https://transcribe-ai.ru/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
