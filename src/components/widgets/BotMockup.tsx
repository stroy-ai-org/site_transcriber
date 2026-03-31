"use client";

import { useState, useEffect } from "react";
import { Send, Paperclip, FileText, Mic } from "lucide-react";

const messages = [
  {
    type: "user" as const,
    content: "🎤 Голосовое сообщение",
    subtext: "0:47",
    isVoice: true,
  },
  {
    type: "bot" as const,
    content: "Транскрипция готова! Распознано 324 слова.",
    file: "transcription_2026-03-31.txt",
  },
  {
    type: "user" as const,
    content: "Сделай саммари",
  },
  {
    type: "bot" as const,
    content:
      "📋 Саммари:\n\n1. Обсудили запуск нового продукта — дедлайн 15 апреля\n2. Ответственный: Иванов А.\n3. Нужно подготовить презентацию к пятнице",
  },
];

export function BotMockup() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(
        () => setVisibleMessages((v) => v + 1),
        visibleMessages === 0 ? 500 : 1200
      );
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#1a1a1a] text-white px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
            T
          </div>
          <div>
            <div className="text-sm font-semibold">Транскрибатор</div>
            <div className="text-xs text-white/60">онлайн</div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3 min-h-[320px] bg-[#f8f8f8]">
          {messages.slice(0, visibleMessages).map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.type === "user"
                    ? "bg-blue-500 text-white rounded-br-md"
                    : "bg-white text-[#1a1a1a] border border-slate-200 rounded-bl-md"
                }`}
              >
                {msg.isVoice && (
                  <div className="flex items-center gap-2 mb-1">
                    <Mic className="w-4 h-4" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: 20 }).map((_, j) => (
                        <div
                          key={j}
                          className="w-0.5 bg-current rounded-full opacity-60"
                          style={{
                            height: `${8 + Math.sin(j * 0.8) * 8 + Math.random() * 4}px`,
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-xs opacity-70">{msg.subtext}</span>
                  </div>
                )}
                <div className="whitespace-pre-line">{msg.content}</div>
                {msg.file && (
                  <div className="mt-2 flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 text-blue-700 text-xs">
                    <FileText className="w-4 h-4" />
                    {msg.file}
                  </div>
                )}
              </div>
            </div>
          ))}
          {visibleMessages < messages.length && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-slate-200 px-4 py-3 flex items-center gap-2 bg-white">
          <button className="text-slate-400 hover:text-slate-600">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-400">
            Сообщение...
          </div>
          <button className="text-blue-500">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
