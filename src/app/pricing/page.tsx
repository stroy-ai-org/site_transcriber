"use client";

import { Check, ArrowRight } from "lucide-react";
import { Reveal, RevealStagger } from "@/components/Reveal";

const plans = [
  {
    name: "Free",
    description: "Попробовать бесплатно",
    price: "0 ₽",
    period: "",
    features: [
      "3 транскрипции в месяц",
      "Экспорт в PDF",
      "Таймкоды и определение спикеров",
    ],
    cta: "Начать бесплатно",
    highlighted: false,
  },
  {
    name: "Standard",
    description: "Для регулярного использования",
    price: "499 ₽",
    period: "/ месяц",
    features: [
      "25 транскрипций в месяц",
      "Экспорт в PDF и DOCX",
      "Саммари встреч",
      "Глубокий анализ с задачами",
      "Покупка доп. пакетов",
    ],
    cta: "Подключить",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Для команд и активных пользователей",
    price: "999 ₽",
    period: "/ месяц",
    features: [
      "75 транскрипций в месяц",
      "Экспорт в PDF и DOCX",
      "Саммари встреч",
      "Глубокий анализ с задачами",
      "Покупка доп. пакетов",
    ],
    cta: "Подключить",
    highlighted: true,
  },
];

const addons = [
  { size: 5, price: "149 ₽" },
  { size: 10, price: "249 ₽" },
  { size: 20, price: "399 ₽" },
];

export default function PricingPage() {
  return (
    <div className="pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4">
            Тарифы
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Выберите подходящий тариф для ваших задач
          </p>
        </Reveal>

        {/* Plans */}
        <RevealStagger
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          stagger={0.15}
          delay={0.1}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-[#1a1a1a] shadow-xl"
                  : "border border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1a1a1a] text-white text-xs font-medium rounded-full">
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-[#888]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-[#888]">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#555]">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://max.ru/id9707055530_bot"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 text-sm font-medium rounded-xl transition-colors ${
                  plan.highlighted
                    ? "bg-[#1a1a1a] text-white hover:bg-[#333]"
                    : "border border-[#1a1a1a]/20 text-[#1a1a1a] hover:bg-slate-50"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </RevealStagger>

        {/* Addons */}
        <Reveal className="max-w-3xl mx-auto mt-16">
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-2">Дополнительные пакеты</h3>
            <p className="text-sm text-[#888] mb-6">
              Для тарифов Standard и Pro — если лимит закончился
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {addons.map((addon) => (
                <div
                  key={addon.size}
                  className="flex items-center justify-between border border-slate-200 rounded-xl px-5 py-4"
                >
                  <span className="text-sm font-medium">{addon.size} транскрипций</span>
                  <span className="text-sm font-semibold text-[#1a1a1a]">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
