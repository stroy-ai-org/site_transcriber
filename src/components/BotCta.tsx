import { ArrowRight } from "lucide-react";
import { MaxIcon, TelegramIcon } from "./MessengerIcons";
import { MAX_BOT_URL, TG_BOT_URL } from "@/lib/bot-links";

type Variant = "hero" | "dark" | "compact";

interface BotCtaProps {
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<
  Variant,
  { container: string; primary: string; secondary: string }
> = {
  hero: {
    container: "flex flex-col sm:flex-row gap-3 justify-center",
    primary:
      "inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1a1a1a] text-white font-medium rounded-xl hover:bg-[#333] transition-colors",
    secondary:
      "inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#1a1a1a] font-medium rounded-xl border border-[#1a1a1a]/15 hover:border-[#1a1a1a]/40 transition-colors",
  },
  dark: {
    container: "flex flex-col sm:flex-row gap-3 justify-center",
    primary:
      "inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#1a1a1a] font-medium rounded-xl hover:bg-white/90 transition-colors",
    secondary:
      "inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/15 transition-colors",
  },
  compact: {
    container: "flex flex-col gap-2",
    primary:
      "flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium rounded-xl bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors",
    secondary:
      "flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium rounded-xl border border-[#1a1a1a]/20 text-[#1a1a1a] hover:bg-slate-50 transition-colors",
  },
};

export function BotCta({ variant = "hero", className = "" }: BotCtaProps) {
  const styles = variantStyles[variant];
  const showArrow = variant !== "compact";
  const iconSize = variant === "compact" ? "w-4 h-4" : "w-[18px] h-[18px]";

  return (
    <div className={`${styles.container} ${className}`}>
      <a
        href={MAX_BOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.primary}
      >
        <MaxIcon className={iconSize} />
        Открыть в Max
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </a>
      <a
        href={TG_BOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.secondary}
      >
        <TelegramIcon className={iconSize} />
        Открыть в Telegram
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </a>
    </div>
  );
}
