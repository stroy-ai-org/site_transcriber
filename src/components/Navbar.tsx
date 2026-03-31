"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Главная" },
  { href: "/features", label: "Возможности" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/contact", label: "Контакты" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#F6F2ED]/80 backdrop-blur-xl border-b border-[#1a1a1a]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Транскрибатор</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-[#1a1a1a] font-medium"
                  : "text-[#666] hover:text-[#1a1a1a]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/50 text-white text-sm font-medium rounded-lg cursor-default">
          Скоро в Max
        </span>
      </div>
    </header>
  );
}
