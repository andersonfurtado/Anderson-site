import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anderson Furtado — AI Governance & Intelligent Systems Architecture",
  description:
  "AI Governance & Intelligent Systems Architecture. Board Member at UN ECOSOC. Published by Packt Publishing UK. Creator of the G³ AI Framework. Global · AI & Education.",
  keywords: [
    "AI governance",
  "G³ AI Framework",
    "AI Strategies for Web Development",
  "AI4XP certification",
    "Anderson Furtado",
    "UN ECOSOC",
    "OECD PISA",
    "artificial intelligence governance",
  ],
  authors: [{ name: "Anderson Furtado", url: "https://andersonfurtado.com" }],
  openGraph: {
    title: "Anderson Furtado — AI Governance & Intelligent Systems Architecture",
    description:
  "AI Governance & Intelligent Systems Architecture. Board Member at UN ECOSOC. Creator of the G³ AI Framework.",
    url: "https://andersonfurtado.com",
    siteName: "Anderson Furtado",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Furtado — AI Governance & Intelligent Systems Architecture",
    description:
  "AI Governance & Intelligent Systems Architecture. Board Member at UN ECOSOC. Creator of the G³ AI Framework.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
