"use client";

import {
  Mic,
  FileAudio,
  Video,
  FileText,
  Brain,
  ListChecks,
  Globe,
  Sparkles,
  Download,
  MessageSquare,
  Clock,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    id: "transcription",
    icon: FileText,
    title: "Транскрипция",
    description:
      "Отправьте аудио, видео или голосовое сообщение — бот распознает речь и вернёт полный текст с таймкодами и спикерами.",
    details: [
      "Поддержка форматов: MP3, WAV, OGG, MP4, WEBM, M4A",
      "Распознавание русской речи с высокой точностью",
      "Обработка файлов до 2 часов",
      "Экспорт в DOCX и PDF",
    ],
    color: "blue",
  },
  {
    id: "summary",
    icon: Brain,
    title: "Саммари встреч",
    description:
      "После транскрипции попросите бота сделать краткое саммари. ИИ выделит основные темы, обсуждения и выводы.",
    details: [
      "Структурированное краткое содержание",
      "Выделение ключевых тем и решений",
      "Сохранение контекста обсуждения",
      "Готово для рассылки участникам",
    ],
    color: "violet",
  },
  {
    id: "analysis",
    icon: ListChecks,
    title: "Глубокий анализ",
    description:
      "ИИ проводит детальный разбор совещания и формирует структурированный PDF-отчёт с задачами, решениями и рекомендациями.",
    details: [
      "Выделение задач и ответственных",
      "Ключевые решения и договорённости",
      "Рекомендации и следующие шаги",
      "Готовый PDF-отчёт для рассылки",
    ],
    color: "emerald",
  },
  {
    id: "languages",
    icon: Globe,
    title: "Мультиязычность",
    description:
      "Помимо русского языка, бот распознаёт речь на английском и других языках.",
    details: [
      "Русский язык — основной",
      "Английский язык",
      "Автоматическое определение языка",
      "Смешанная речь (русский + английский)",
    ],
    color: "rose",
  },
  {
    id: "formats",
    icon: Download,
    title: "Гибкий вывод",
    description:
      "Результат транскрипции можно получить в разных форматах — DOCX для редактирования или PDF с оформлением.",
    details: [
      "DOCX — редактируемый документ",
      "PDF — со спикерами, таймкодами, статистикой",
      "Глубокий анализ — структурированный PDF-отчёт",
      "Саммари — краткое содержание встречи",
    ],
    color: "teal",
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur border border-slate-200 rounded-full text-xs font-medium text-[#555] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            Возможности бота
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4">
            Что умеет Транскрибатор
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            От распознавания речи до готового протокола совещания — всё в одном боте в Max
          </p>
        </Reveal>

        {/* Features */}
        <div className="space-y-8">
          {features.map((feature, i) => (
            <Reveal
              key={feature.id}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.1}
            >
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className={`p-8 sm:p-10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-${feature.color}-50 flex items-center justify-center`}>
                        <feature.icon className={`w-5 h-5 text-${feature.color}-500`} />
                      </div>
                      <h2 className="text-xl font-semibold">{feature.title}</h2>
                    </div>
                    <p className="text-[#666] leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2.5">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-sm text-[#555]">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-400 mt-1.5 flex-shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={`bg-slate-50 p-8 sm:p-10 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="w-full max-w-xs">
                      {feature.id === "transcription" && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
                            <Mic className="w-5 h-5 text-blue-500" />
                            <div className="flex-1">
                              <div className="text-xs font-medium">Голосовое сообщение</div>
                              <div className="text-xs text-[#999]">1:23</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
                            <FileAudio className="w-5 h-5 text-violet-500" />
                            <div className="flex-1">
                              <div className="text-xs font-medium">meeting_record.mp3</div>
                              <div className="text-xs text-[#999]">45:12</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
                            <Video className="w-5 h-5 text-rose-500" />
                            <div className="flex-1">
                              <div className="text-xs font-medium">zoom_call.mp4</div>
                              <div className="text-xs text-[#999]">1:05:30</div>
                            </div>
                          </div>
                          <div className="text-center text-xs text-[#999] pt-2">↓</div>
                          <div className="flex items-center gap-3 bg-emerald-50 rounded-xl p-3 border border-emerald-200">
                            <FileText className="w-5 h-5 text-emerald-500" />
                            <div className="flex-1">
                              <div className="text-xs font-medium text-emerald-700">transcription.docx</div>
                              <div className="text-xs text-emerald-600">3 240 слов</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.id === "summary" && (
                        <div className="bg-white rounded-xl p-4 border border-slate-200 text-xs space-y-2">
                          <div className="font-semibold text-sm mb-3">📋 Саммари встречи</div>
                          <div className="text-[#555] space-y-1.5">
                            <p><strong>Тема:</strong> Запуск нового продукта</p>
                            <p><strong>Участники:</strong> 4 человека</p>
                            <div className="h-px bg-slate-100 my-2" />
                            <p>1. Обсудили таймлайн запуска — дедлайн 15 апреля</p>
                            <p>2. Маркетинг подготовит лендинг к 10 апреля</p>
                            <p>3. Нужна интеграция с CRM до конца недели</p>
                            <div className="h-px bg-slate-100 my-2" />
                            <p className="text-[#999]">Длительность: 47 мин</p>
                          </div>
                        </div>
                      )}

                      {feature.id === "analysis" && (
                        <div className="bg-white rounded-xl p-4 border border-slate-200 text-xs space-y-2">
                          <div className="font-semibold text-sm mb-3">📊 Анализ встречи.pdf</div>
                          <div className="space-y-2 text-[#555]">
                            <div className="font-medium text-[#333]">Задачи:</div>
                            <p>• Подготовить презентацию — Иванов А.</p>
                            <p>• Интеграция с CRM — Петров Б.</p>
                            <div className="h-px bg-slate-100 my-2" />
                            <div className="font-medium text-[#333]">Решения:</div>
                            <p>• Дедлайн запуска — 15 апреля</p>
                            <p>• Бюджет на маркетинг утверждён</p>
                            <div className="h-px bg-slate-100 my-2" />
                            <div className="font-medium text-[#333]">Рекомендации:</div>
                            <p>• Провести ревью лендинга до 10.04</p>
                          </div>
                        </div>
                      )}

                      {feature.id === "languages" && (
                        <div className="space-y-3">
                          {[
                            { lang: "Русский", flag: "🇷🇺", status: "Основной" },
                            { lang: "English", flag: "🇬🇧", status: "Поддержка" },
                            { lang: "Смешанный", flag: "🌐", status: "Авто" },
                          ].map((l) => (
                            <div key={l.lang} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
                              <span className="text-xl">{l.flag}</span>
                              <div className="flex-1">
                                <div className="text-sm font-medium">{l.lang}</div>
                              </div>
                              <span className="text-xs text-[#999] bg-slate-100 px-2 py-0.5 rounded">{l.status}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {feature.id === "formats" && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
                            <FileText className="w-5 h-5 text-blue-500" />
                            <div className="flex-1 text-sm font-medium">DOCX</div>
                            <Download className="w-4 h-4 text-[#999]" />
                          </div>
                          <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
                            <FileText className="w-5 h-5 text-rose-500" />
                            <div className="flex-1 text-sm font-medium">PDF со спикерами</div>
                            <Download className="w-4 h-4 text-[#999]" />
                          </div>
                          <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
                            <ListChecks className="w-5 h-5 text-emerald-500" />
                            <div className="flex-1 text-sm font-medium">PDF-анализ</div>
                            <Download className="w-4 h-4 text-[#999]" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
