"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const requisites = `ООО «Реактми»
Юр. адрес: 127055, г. Москва, Новослободская ул., д. 67/69, помещ. 4/п
ИНН: 9707055530
КПП: 770701001
ОГРН: 1267700031610`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(requisites);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4">
            Контакты
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Юридическая информация
          </p>
        </Reveal>

        {/* Requisites */}
        <Reveal delay={0.2} scale={0.97} direction="none">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
                <h2 className="text-lg font-semibold text-[#1a1a1a]">
                  Реквизиты организации
                </h2>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#666] hover:text-[#1a1a1a] hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600">Скопировано</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Копировать</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="text-sm text-[#888] w-28 flex-shrink-0">Название</span>
                    <span className="text-sm font-medium text-[#1a1a1a]">ООО «Реактми»</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="text-sm text-[#888] w-28 flex-shrink-0">Юр. адрес</span>
                    <span className="text-sm text-[#333]">127055, г. Москва, Новослободская ул., д. 67/69, помещ. 4/п</span>
                  </div>

                  <div className="h-px bg-slate-100 my-4" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="text-sm text-[#888] w-28 flex-shrink-0">ИНН</span>
                    <span className="text-sm font-mono text-[#1a1a1a] tracking-wide">9707055530</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="text-sm text-[#888] w-28 flex-shrink-0">КПП</span>
                    <span className="text-sm font-mono text-[#1a1a1a] tracking-wide">770701001</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="text-sm text-[#888] w-28 flex-shrink-0">ОГРН</span>
                    <span className="text-sm font-mono text-[#1a1a1a] tracking-wide">1267700031610</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
