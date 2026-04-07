import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Транскрибатор — расшифровка совещаний в текст | AI-бот в Max",
  description: "AI-бот для транскрибации аудио и видео в текст. Расшифровка совещаний, стенограмма встреч, саммари и протоколы — в мессенджере Max. Распознавание речи с таймкодами и спикерами.",
  keywords: "транскрибация, расшифровка аудио, расшифровка совещаний, AI транскрибатор, стенограмма совещания, перевод голоса в текст, протокол совещания, распознавание речи, саммари встречи, бот для расшифровки",
  openGraph: {
    title: "Транскрибатор — расшифровка совещаний в текст",
    description: "AI-бот для транскрибации аудио и видео в текст. Саммари, протоколы и глубокий анализ встреч в мессенджере Max.",
    url: "https://transcribe-ai.ru",
    siteName: "Транскрибатор",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "https://transcribe-ai.ru",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Транскрибатор",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "AI-бот для транскрибации аудио и видео в текст. Расшифровка совещаний, саммари и протоколы в мессенджере Max.",
              url: "https://transcribe-ai.ru",
              offers: [
                {
                  "@type": "Offer",
                  name: "Free",
                  price: "0",
                  priceCurrency: "RUB",
                  description: "3 транскрипции в месяц",
                },
                {
                  "@type": "Offer",
                  name: "Standard",
                  price: "499",
                  priceCurrency: "RUB",
                  description: "25 транскрипций в месяц, DOCX, саммари, анализ",
                },
                {
                  "@type": "Offer",
                  name: "Pro",
                  price: "999",
                  priceCurrency: "RUB",
                  description: "75 транскрипций в месяц, DOCX, саммари, анализ",
                },
              ],
              provider: {
                "@type": "Organization",
                name: "ООО «Реактми»",
                url: "https://transcribe-ai.ru",
              },
            }),
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108415216" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
      </head>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108415216', 'ym');
          ym(108415216, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
        `}
      </Script>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <div className="min-h-screen bg-[#F6F2ED] text-[#1a1a1a] flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
