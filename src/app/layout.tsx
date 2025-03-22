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
  title: "solo leveling",
  description: "Site sobreconteúdos",
  keywords: [],
  openGraph: {
    title: "SOLO LEVELING",
    description: "Site sobreconteúdos",
    type: "website",
    url: "https://seusite.com",
    images: [
      {
        url: "https://i.imgur.com/ZDBLpXf.png",
        width: 1200,
        height: 630,
        alt: "Imagem representativa do",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SITE SOBRE SOLOLEVELING",
    description: "Site sobreconteúdos",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
