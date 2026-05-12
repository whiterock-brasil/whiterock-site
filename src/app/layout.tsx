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
  title: "WhiteRock Consultoria — Gestão Financeira para Pequenas Empresas",
  description:
    "Consultoria financeira para pequenas empresas em todo o Brasil. Plano de Negócios, Precificação, Controles Financeiros, Estudo de Viabilidade e BPO Gerencial. 15 anos de experiência, MBA USP.",
  keywords: [
    "consultoria financeira",
    "BPO financeiro",
    "plano de negócios",
    "precificação",
    "controles financeiros",
    "estudo de viabilidade",
    "gestão financeira",
    "pequenas empresas",
    "Brasília",
    "WhiteRock",
  ],
  openGraph: {
    title: "WhiteRock Consultoria — Gestão Financeira para Pequenas Empresas",
    description:
      "Transformamos dados financeiros em decisões. Consultoria para pequenas empresas em todo o Brasil.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
