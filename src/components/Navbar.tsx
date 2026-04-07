"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/features", label: "Возможности" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/contact", label: "Контакты" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F6F2ED]/80 backdrop-blur-xl border-b border-[#1a1a1a]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Транскрибатор" width={28} height={28} />
          <span className="text-xl font-bold tracking-tight">Транскрибатор</span>
        </Link>

        {/* Desktop nav */}
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

        <a
          href="https://max.ru/id9707055530_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white text-sm font-medium rounded-lg hover:bg-[#333] transition-colors"
        >
          Открыть бота
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="md:hidden border-t border-[#1a1a1a]/5 bg-[#F6F2ED]/95 backdrop-blur-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    pathname === link.href
                      ? "bg-white text-[#1a1a1a] font-medium"
                      : "text-[#666] hover:bg-white/50 hover:text-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
