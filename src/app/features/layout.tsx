import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Возможности — Транскрибатор | Расшифровка аудио, саммари, глубокий анализ",
  description: "Транскрибация аудио и видео в текст с таймкодами и спикерами. Саммари встреч, глубокий анализ совещаний с задачами и решениями. Экспорт в DOCX и PDF.",
  alternates: {
    canonical: "https://transcribe-ai.ru/features",
  },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
