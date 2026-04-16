export const SITE_URL = "https://transcribe-ai.ru";

export const FAQ_ITEMS = [
  {
    q: "Как работает транскрибация аудио в текст?",
    a: "Вы отправляете аудио, видео или голосовое сообщение боту в Max или Telegram. ИИ на базе Whisper распознаёт речь, расставляет таймкоды и возвращает готовый текст в формате DOCX или PDF.",
  },
  {
    q: "В каких мессенджерах доступен бот?",
    a: "Сейчас бот работает в Max и Telegram. Функциональность одинаковая в обоих — отличий в возможностях нет.",
  },
  {
    q: "Переносится ли подписка между Max и Telegram?",
    a: "Нет, подписки независимые. Если вы оплатили подписку в Max, в Telegram у вас будет отдельный бесплатный лимит — и наоборот. Это два разных аккаунта.",
  },
  {
    q: "Какие форматы файлов поддерживаются?",
    a: "MP3, WAV, OGG, MP4, WEBM, M4A, FLAC, AAC, OPUS, AVI, MKV, MOV и другие популярные аудио- и видеоформаты.",
  },
  {
    q: "Что такое глубокий анализ совещания?",
    a: "ИИ формирует структурированный PDF-отчёт: задачи с ответственными, принятые решения, ключевые темы и рекомендации. Готовый протокол совещания за минуту.",
  },
  {
    q: "Можно ли попробовать бесплатно?",
    a: "Да, тариф Free даёт 3 транскрипции в месяц с экспортом в PDF. Для саммари, глубокого анализа и DOCX доступны тарифы Standard и Pro.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    name: "Отправьте файл",
    text: "Перешлите голосовое, аудио или видео в бота. Поддерживаются все популярные форматы.",
  },
  {
    name: "Получите транскрипцию",
    text: "Бот распознаёт речь и отправит текстовый файл с полной транскрипцией.",
  },
  {
    name: "Саммари и итоги",
    text: "Попросите бота сделать краткое саммари, выделить задачи и ключевые решения.",
  },
] as const;

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function howToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Как транскрибировать аудио или видео в текст",
    description:
      "Три простых шага, как получить транскрипцию и саммари совещания с помощью бота-транскрибатора.",
    totalTime: "PT2M",
    step: HOW_IT_WORKS_STEPS.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ООО «Реактми»",
    alternateName: "Транскрибатор",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Новослободская ул., д. 67/69, помещ. 4/п",
      addressLocality: "Москва",
      postalCode: "127055",
      addressCountry: "RU",
    },
    taxID: "9707055530",
    vatID: "9707055530",
    identifier: [
      { "@type": "PropertyValue", name: "ИНН", value: "9707055530" },
      { "@type": "PropertyValue", name: "ОГРН", value: "1267700031610" },
      { "@type": "PropertyValue", name: "КПП", value: "770701001" },
    ],
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
