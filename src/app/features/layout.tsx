import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Возможности — Транскрибатор | Расшифровка аудио, саммари, глубокий анализ",
  description: "Транскрибация аудио и видео в текст с таймкодами и спикерами. Саммари встреч, глубокий анализ совещаний с задачами и решениями. Экспорт в DOCX и PDF.",
  alternates: {
    canonical: "https://transcribe-ai.ru/features",
  },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Главная", url: SITE_URL },
          { name: "Возможности", url: `${SITE_URL}/features` },
        ])}
      />
      {children}
    </>
  );
}
