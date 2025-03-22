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
  title: "LOUDinhos",
  description: "Site sobre a LOUD e seus conteúdos",
  keywords: ["loud", "loudgg", "loudlol", "loudvalorant"],
  openGraph: {
    title: "LOUDinhos",
    description: "Site sobre a LOUD e seus conteúdos",
    type: "website",
    url: "https://seusite.com",
    images: [
      {
        url: "https://seusite.com/loudinhos_news.png",
        width: 1200,
        height: 630,
        alt: "Imagem representativa do LOUDinhos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOUDinhos",
    description: "Site sobre a LOUD e seus conteúdos",
    images: ["https://seusite.com/loudinhos_news.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
