"use client";

import { Check, ArrowRight } from "lucide-react";
import { Reveal, RevealStagger } from "@/components/Reveal";

const plans = [
  {
    name: "Старт",
    description: "Для личного использования",
    price: "Бесплатно",
    period: "",
    features: [
      "5 транскрипций в месяц",
      "Файлы до 15 минут",
      "Саммари встреч",
      "Формат .txt",
    ],
    cta: "Начать бесплатно",
    highlighted: false,
  },
  {
    name: "Про",
    description: "Для команд и активных пользователей",
    price: "990 ₽",
    period: "/ месяц",
    features: [
      "Безлимитные транскрипции",
      "Файлы до 2 часов",
      "Саммари и итоги с задачами",
      "Разделение спикеров",
      "Приоритетная обработка",
    ],
    cta: "Подключить",
    highlighted: true,
  },
  {
    name: "Бизнес",
    description: "Для компаний",
    price: "По запросу",
    period: "",
    features: [
      "Всё из тарифа Про",
      "Выделенный инстанс",
      "Интеграция с корпоративными системами",
      "SLA и техподдержка",
      "Кастомизация под задачи",
    ],
    cta: "Связаться",
    highlighted: false,
  },
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
                href="#"
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
      </div>
    </div>
  );
}
