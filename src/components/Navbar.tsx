"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { MAX_BOT_URL, TG_BOT_URL } from "@/lib/bot-links";
import { MaxIcon, TelegramIcon } from "./MessengerIcons";

const links = [
  { href: "/", label: "Главная" },
  { href: "/features", label: "Возможности" },
  { href: "/pricing", label: "Тарифы" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [botOpen, setBotOpen] = useState(false);
  const botRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!botOpen) return;
    function onClick(e: MouseEvent) {
      if (botRef.current && !botRef.current.contains(e.target as Node)) {
        setBotOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [botOpen]);

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

        {/* Desktop: bot dropdown */}
        <div ref={botRef} className="hidden sm:flex relative">
          <button
            type="button"
            onClick={() => setBotOpen((v) => !v)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white text-sm font-medium rounded-lg hover:bg-[#333] transition-colors"
          >
            Открыть бота
            <ChevronDown
              className={`w-4 h-4 transition-transform ${botOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {botOpen && (
              <motion.div
                className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <a
                  href={MAX_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setBotOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-[#1a1a1a] hover:bg-slate-50 transition-colors"
                >
                  <MaxIcon className="w-5 h-5" />
                  Открыть в Max
                </a>
                <a
                  href={TG_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setBotOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-[#1a1a1a] border-t border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <TelegramIcon className="w-5 h-5 text-[#229ED9]" />
                  Открыть в Telegram
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
              <div className="pt-3 mt-3 border-t border-[#1a1a1a]/5 space-y-2">
                <a
                  href={MAX_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-lg"
                >
                  <MaxIcon className="w-5 h-5" />
                  Открыть в Max
                </a>
                <a
                  href={TG_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 bg-white text-[#1a1a1a] text-sm font-medium rounded-lg border border-slate-200"
                >
                  <TelegramIcon className="w-5 h-5 text-[#229ED9]" />
                  Открыть в Telegram
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
