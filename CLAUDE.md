@AGENTS.md

# Транскрибатор — Лендинг

Лендинг для бота-транскрибатора совещаний. Бот работает в двух мессенджерах — **Max** и **Telegram** (одна кодовая база, подписки независимые — см. `transcribator-billing` ветка `feature/telegram-bot`).

Ссылки на ботов — в `src/lib/bot-links.ts` (`MAX_BOT_URL`, `TG_BOT_URL`). Переиспользуемый CTA — `src/components/BotCta.tsx`.

## Стек

- **Next.js 16** (App Router, static export)
- **React 19**, **TypeScript 5**
- **Tailwind CSS 4** (PostCSS plugin)
- **Framer Motion** — анимации (Reveal, виджеты)
- **Lucide React** — иконки
- **clsx + tailwind-merge** — утилита `cn()` в `src/lib/utils.ts`

## Структура

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Inter + JetBrains Mono, Navbar/Footer)
│   ├── page.tsx            # Главная (hero, how it works, demo, formats, CTA)
│   ├── features/page.tsx   # Возможности (5 feature-карточек)
│   ├── pricing/page.tsx    # Тарифы (Старт, Про, Бизнес)
│   ├── contact/page.tsx    # Контакты (реквизиты ООО «Реактми»)
│   └── globals.css         # Глобальные стили, кастомные анимации
├── components/
│   ├── Navbar.tsx           # Навбар с мобильным бургер-меню
│   ├── Footer.tsx           # Футер (3 колонки)
│   ├── Reveal.tsx           # Reveal + RevealStagger — анимации появления при скролле
│   └── widgets/
│       ├── BotMockup.tsx    # Интерактивный мокап чата бота
│       └── FlowDiagram.tsx  # Анимированная схема «отправляете → получаете»
└── lib/
    └── utils.ts             # cn() утилита
```

## Дизайн-система

- **Фон:** `#F6F2ED` (тёплый бежевый)
- **Текст:** `#1a1a1a` (основной), `#666` (вторичный), `#888`/`#999` (приглушённый)
- **Карточки:** белые (`bg-white`), `border border-slate-200`, `rounded-2xl`
- **Шрифты:** Inter (sans), JetBrains Mono (mono), подключены через `next/font/google`
- **Контейнер:** `max-w-7xl mx-auto px-6 lg:px-8`
- **Секции:** `py-24`

## Деплой

- **GitHub Pages** — static export (`output: "export"`)
- **basePath:** `/site_transcriber`
- **Workflow:** `.github/workflows/deploy.yml` (push to main → build → deploy)
- **URL:** https://stroy-ai-org.github.io/site_transcriber/

## Реквизиты

ООО «Реактми», ИНН 9707055530, ОГРН 1267700031610.
Адрес: 127055, г. Москва, Новослободская ул., д. 67/69, помещ. 4/п.

## Команды

```bash
npm run dev      # Dev-сервер
npm run build    # Статическая сборка (output: out/)
npm run lint     # ESLint
```

## Важно

- Бот работает в **Max** и **Telegram**. Подписки независимые (оплата в Max не переносится в Telegram и наоборот) — это упоминается в FAQ на главной.
- Цены на сайте должны совпадать с `transcribator-billing/app/db/seed.py`: Standard 990 ₽, Pro 2 490 ₽, пакеты 249/449/799 ₽.
- Функция «разделение спикеров» отсутствует — не упоминать.
- Анимации появления элементов через компонент `Reveal` / `RevealStagger` (intersection observer + framer-motion).
