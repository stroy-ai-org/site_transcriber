"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Zap, Shield, FileText, Clock, Brain, ArrowRight, CheckCircle2 } from "lucide-react";
import { BotMockup } from "@/components/widgets/BotMockup";
import { FlowDiagram } from "@/components/widgets/FlowDiagram";
import { Reveal, RevealStagger } from "@/components/Reveal";

const ease = [0.25, 0.1, 0.25, 1] as const;

function HeroItem({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-50/40 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
          <HeroItem delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur border border-slate-200 rounded-full text-xs font-medium text-[#555] mb-8">
              <Mic className="w-3.5 h-3.5 text-blue-500" />
              Бот для транскрипции в Max
            </div>
          </HeroItem>

          <HeroItem delay={0.3}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Совещания —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                в текст
              </span>
            </h1>
          </HeroItem>

          <HeroItem delay={0.5}>
            <p className="text-lg sm:text-xl text-[#666] max-w-2xl mx-auto mb-10 leading-relaxed">
              Отправьте аудио, видео или голосовое сообщение в бота — получите
              текстовую транскрипцию, саммари встречи и список задач за секунды.
            </p>
          </HeroItem>

          <HeroItem delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <a
                href="https://max.ru/id9707055530_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1a1a1a] text-white font-medium rounded-xl hover:bg-[#333] transition-colors"
              >
                Открыть бота
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#1a1a1a]/20 text-[#1a1a1a] font-medium rounded-xl hover:bg-white/50 transition-colors"
              >
                Возможности
              </Link>
            </div>
          </HeroItem>

          <HeroItem delay={0.9}>
            <FlowDiagram />
          </HeroItem>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-lg text-[#666] max-w-xl mx-auto">
              Три простых шага от аудио до готового протокола
            </p>
          </Reveal>

          <RevealStagger
            className="grid md:grid-cols-3 gap-6"
            stagger={0.15}
            delay={0.1}
          >
            <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:border-slate-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono text-[#bbb]">01</span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-blue-500" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Отправьте файл</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                Перешлите голосовое, аудио или видео в бота. Поддерживаются все популярные форматы.
              </p>
            </div>

            <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:border-slate-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono text-[#bbb]">02</span>
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-violet-500" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Получите транскрипцию</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                Бот распознает речь и отправит текстовый файл с полной транскрипцией.
              </p>
            </div>

            <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:border-slate-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono text-[#bbb]">03</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Саммари и итоги</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                Попросите бота сделать краткое саммари, выделить задачи и ключевые решения.
              </p>
            </div>
          </RevealStagger>
        </div>
      </section>

      {/* DEMO + FEATURES */}
      <section className="py-24 bg-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left" className="lg:sticky lg:top-24">
              <BotMockup />
            </Reveal>

            <div className="space-y-10">
              <Reveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Всё в одном боте
                </h2>
                <p className="text-[#666] leading-relaxed">
                  Не нужно переключаться между сервисами. Транскрипция, саммари и
                  итоги — прямо в мессенджере.
                </p>
              </Reveal>

              <RevealStagger
                className="space-y-6"
                stagger={0.12}
                delay={0.2}
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#555]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Точная транскрипция</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      Распознавание речи на русском языке с высокой точностью.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#555]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Быстрая обработка</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      Часовая запись обрабатывается за пару минут. Результат приходит файлом прямо в чат.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-[#555]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Умное саммари</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      ИИ выделяет ключевые темы, решения и задачи из текста совещания.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#555]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Безопасность данных</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      Файлы обрабатываются и удаляются. Никакие данные не хранятся после обработки.
                    </p>
                  </div>
                </div>
              </RevealStagger>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Поддерживаемые форматы</h2>
            <p className="text-[#666]">Отправляйте файлы в любом популярном формате</p>
          </Reveal>

          <RevealStagger
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto"
            stagger={0.07}
            delay={0.1}
          >
            {["MP3", "WAV", "OGG", "MP4", "WEBM", "M4A"].map((fmt) => (
              <div
                key={fmt}
                className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-mono font-semibold text-[#555]">.{fmt.toLowerCase()}</span>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal scale={0.95} direction="none" duration={0.8}>
            <div className="bg-[#1a1a1a] rounded-3xl p-12 sm:p-16 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Попробуйте прямо сейчас
              </h2>
              <p className="text-white/60 max-w-lg mx-auto mb-8">
                Отправьте первое голосовое сообщение боту и получите транскрипцию бесплатно.
              </p>
              <a
                href="https://max.ru/id9707055530_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#1a1a1a] font-medium rounded-xl hover:bg-white/90 transition-colors"
              >
                Открыть бота
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Бесплатный старт
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Без регистрации
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Результат за минуту
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
