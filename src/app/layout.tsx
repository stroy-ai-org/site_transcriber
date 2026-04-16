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
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  title: "Транскрибатор — транскрибация аудио и видео в текст | AI-бот в Max и Telegram",
  description: "Транскрибация аудио и видео в текст онлайн. AI-бот для транскрибации совещаний, саммари встреч и протоколов с задачами — в Max и Telegram. Распознавание речи с таймкодами и спикерами.",
  keywords: "транскрибация, транскрибация аудио, транскрибация видео, транскрибация аудио в текст, транскрибация онлайн, транскрибация совещаний, AI транскрибатор, бот транскрибатор, телеграм бот транскрибация, саммари встречи, протокол совещания, распознавание речи",
  openGraph: {
    title: "Транскрибатор — транскрибация аудио и видео в текст",
    description: "AI-бот для транскрибации аудио и видео в текст. Саммари, протоколы и глубокий анализ совещаний в мессенджерах Max и Telegram.",
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
              description: "AI-бот для транскрибации аудио и видео в текст. Расшифровка совещаний, саммари и протоколы в мессенджерах Max и Telegram.",
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
                  price: "990",
                  priceCurrency: "RUB",
                  description: "25 транскрипций в месяц, DOCX, саммари, анализ",
                },
                {
                  "@type": "Offer",
                  name: "Pro",
                  price: "2490",
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
