import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOLO LEVELING",
  description: "Site sobre conteúdos de Solo Leveling",
  keywords: ["solo leveling", "anime", "webtoon", "manhwa"],
  openGraph: {
    title: "SOLO LEVELING",
    description: "Tudo sobre Solo Leveling - notícias, informações e curiosidades.",
    type: "website",
    url: "https://seusite.com",
    images: [
      {
        url: "https://i.imgur.com/ZDBLpXf.png",
        width: 1200,
        height: 630,
        alt: "Imagem representativa de Solo Leveling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLO LEVELING",
    description: "Tudo sobre Solo Leveling - notícias, informações e curiosidades.",
    images: ["https://i.imgur.com/ZDBLpXf.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
