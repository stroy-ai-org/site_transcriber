"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileAudio, Video, FileText, ListChecks, Sparkles } from "lucide-react";

const inputs = [
  { id: "voice", icon: Mic, label: "Голосовое сообщение", bg: "bg-blue-50", text: "text-blue-500", glowColor: "#3b82f6" },
  { id: "audio", icon: FileAudio, label: "Аудиофайл", bg: "bg-violet-50", text: "text-violet-500", glowColor: "#8b5cf6" },
  { id: "video", icon: Video, label: "Видеофайл", bg: "bg-rose-50", text: "text-rose-500", glowColor: "#f43f5e" },
];

const outputs = [
  { id: "text", icon: FileText, label: "Текстовая транскрипция", bg: "bg-emerald-50", text: "text-emerald-500" },
  { id: "summary", icon: ListChecks, label: "Саммари встречи", bg: "bg-amber-50", text: "text-amber-500" },
  { id: "tasks", icon: ListChecks, label: "Итоги и задачи", bg: "bg-teal-50", text: "text-teal-500" },
];

// Фаза цикла: idle → processing → done → fade → idle
type Phase = "idle" | "processing" | "done" | "fade";

function WaveformBars() {
  // Генерируем стабильные значения один раз
  const barsRef = useRef(
    Array.from({ length: 20 }).map(() => ({
      h1: 4 + Math.random() * 16,
      h2: 6,
      h3: 4 + Math.random() * 12,
      dur: 0.8 + Math.random() * 0.6,
    }))
  );

  return (
    <div className="flex items-center gap-[2px] h-6">
      {barsRef.current.map((bar, i) => (
        <motion.div
          key={i}
          className="w-[2.5px] rounded-full bg-white/70"
          animate={{ height: [4, bar.h1, bar.h2, bar.h3, 4] }}
          transition={{
            duration: bar.dur,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: i * 0.04,
          }}
        />
      ))}
    </div>
  );
}

function IdleBars() {
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full bg-white/40"
          animate={{ height: [3, 10, 3] }}
          transition={{ duration: 1.8, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function FlowDiagram() {
  const [activeInput, setActiveInput] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [particles, setParticles] = useState<Array<{ id: number; color: string; yOffset: number; delay: number }>>([]);
  const counterRef = useRef(0);

  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout, t3: NodeJS.Timeout;

    // idle → processing
    t1 = setTimeout(() => {
      setPhase("processing");

      // Запускаем частицы
      const color = inputs[activeInput].glowColor;
      const newP = Array.from({ length: 8 }).map((_, i) => ({
        id: counterRef.current++,
        color,
        yOffset: (Math.random() - 0.5) * 20,
        delay: i * 0.12,
      }));
      setParticles(newP);
    }, 1000);

    // processing → done
    t2 = setTimeout(() => {
      setPhase("done");
      setParticles([]);
    }, 3200);

    // done → fade → next idle
    t3 = setTimeout(() => {
      setPhase("fade");
      setTimeout(() => {
        setActiveInput((prev) => (prev + 1) % inputs.length);
        setPhase("idle");
      }, 600);
    }, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [activeInput]);

  const isDone = phase === "done";
  const isProcessing = phase === "processing";

  return (
    <div className="w-full max-w-4xl mx-auto select-none">
      <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 relative">

        {/* ─── INPUT CARD ─── */}
        <div className="flex-1 w-full z-10">
          <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 h-full">
            <div className="text-xs font-medium text-[#999] uppercase tracking-widest mb-4">
              Отправляете
            </div>
            <div className="space-y-1.5">
              {inputs.map((item, i) => {
                const isActive = activeInput === i;
                return (
                  <motion.div
                    key={item.id}
                    className={`flex items-center gap-3 text-sm rounded-xl px-3 py-3 cursor-pointer`}
                    animate={{
                      backgroundColor: isActive ? "rgba(248,250,252,1)" : "rgba(248,250,252,0)",
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ backgroundColor: "rgba(248,250,252,0.8)" }}
                    onClick={() => {
                      if (i !== activeInput) {
                        setPhase("idle");
                        setParticles([]);
                        setActiveInput(i);
                      }
                    }}
                  >
                    <motion.div
                      className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center`}
                      animate={isActive ? {
                        boxShadow: [
                          `0 0 0px 0px ${item.glowColor}00`,
                          `0 0 20px 6px ${item.glowColor}25`,
                          `0 0 0px 0px ${item.glowColor}00`,
                        ],
                      } : { boxShadow: "0 0 0px 0px transparent" }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <item.icon className={`w-4 h-4 ${item.text}`} />
                    </motion.div>

                    <motion.span
                      animate={{
                        color: isActive ? "#1a1a1a" : "#bbb",
                        fontWeight: isActive ? 500 : 400,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.label}
                    </motion.span>

                    <motion.div
                      className="ml-auto w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.glowColor }}
                      animate={{
                        opacity: isActive ? [0.4, 1, 0.4] : 0,
                        scale: isActive ? [0.8, 1.2, 0.8] : 0.8,
                      }}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ─── CENTER ─── */}
        <div className="flex items-center justify-center md:w-44 relative z-20">
          {/* Частицы */}
          <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
            <AnimatePresence>
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute top-1/2 rounded-full"
                  style={{ backgroundColor: p.color, width: 6, height: 6 }}
                  initial={{ left: "5%", y: p.yOffset, opacity: 0, scale: 0 }}
                  animate={{
                    left: ["5%", "50%", "95%"],
                    y: [p.yOffset, p.yOffset * -0.5, p.yOffset * 0.3],
                    opacity: [0, 0.8, 0.8, 0],
                    scale: [0, 1, 0.8, 0],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.8,
                    delay: p.delay,
                    ease: "easeInOut",
                    times: [0, 0.4, 0.8, 1],
                  }}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Кнопка */}
          <motion.div
            className="relative w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center z-10"
            animate={isProcessing ? { scale: [1, 1.06, 1] } : { scale: 1 }}
            transition={isProcessing ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.6 }}
          >
            {/* Кольца */}
            <motion.div
              className="absolute inset-[-5px] rounded-full border-2"
              style={{ borderColor: inputs[activeInput].glowColor + "40" }}
              animate={isProcessing ? {
                scale: [1, 1.35, 1],
                opacity: [0.5, 0, 0.5],
              } : { scale: 1, opacity: 0 }}
              transition={{ duration: 2, repeat: isProcessing ? Infinity : 0, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-[-10px] rounded-full border"
              style={{ borderColor: inputs[activeInput].glowColor + "20" }}
              animate={isProcessing ? {
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              } : { scale: 1, opacity: 0 }}
              transition={{ duration: 2, repeat: isProcessing ? Infinity : 0, ease: "easeInOut", delay: 0.3 }}
            />

            <AnimatePresence mode="wait">
              {isProcessing ? (
                <motion.div
                  key="wave"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <WaveformBars />
                </motion.div>
              ) : isDone ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Sparkles className="w-6 h-6 text-amber-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <IdleBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ─── OUTPUT CARD ─── */}
        <div className="flex-1 w-full z-10">
          <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 h-full">
            <div className="text-xs font-medium text-[#999] uppercase tracking-widest mb-4">
              Получаете
            </div>
            <div className="space-y-1.5">
              {outputs.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="flex items-center gap-3 text-sm rounded-xl px-3 py-3"
                  animate={{ opacity: isDone ? 1 : 0.35 }}
                  transition={{
                    duration: 0.6,
                    delay: isDone ? i * 0.2 : 0,
                    ease: "easeOut",
                  }}
                >
                  <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.text}`} />
                  </div>

                  <motion.span
                    className="flex-1"
                    animate={{ color: isDone ? "#1a1a1a" : "#ccc" }}
                    transition={{ duration: 0.5, delay: isDone ? i * 0.2 : 0 }}
                  >
                    {item.label}
                  </motion.span>

                  <motion.div
                    className="w-4 h-4 flex-shrink-0"
                    animate={{
                      opacity: isDone ? 1 : 0,
                      scale: isDone ? 1 : 0.5,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: isDone ? 0.3 + i * 0.2 : 0,
                      ease: "easeOut",
                    }}
                  >
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
