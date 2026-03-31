import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-zinc-900 tracking-tight">
                Транскрибатор
              </span>
            </Link>
            <p className="text-sm text-zinc-600 leading-relaxed mb-6 max-w-xs">
              Бот для транскрипции совещаний в Max. Аудио, видео, голосовые — в текст за секунды.
            </p>
            <p className="text-xs text-zinc-400">
              © 2026 Реактми. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wide">
              Навигация
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Возможности
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Тарифы
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wide">
              Возможности
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Транскрипция аудио
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Транскрипция видео
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Саммари встреч
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Итоги совещаний
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
