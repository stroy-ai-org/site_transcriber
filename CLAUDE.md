@AGENTS.md

# Транскрибатор — Лендинг

Лендинг для бота-транскрибатора совещаний в мессенджере Max.

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

- Бот будет в мессенджере **Max** (не Telegram). Пока бота нет — ссылки на него не ставить.
- Функция «разделение спикеров» отсутствует — не упоминать.
- Анимации появления элементов через компонент `Reveal` / `RevealStagger` (intersection observer + framer-motion).
