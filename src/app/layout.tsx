import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Davi Rocha // Portfólio",
  description:
    "Portfólio de Davi Rocha — Estudante de Ciência da Computação na PUC Minas e Estagiário em Segurança da Informação.",
  keywords: [
    "Davi Rocha",
    "Portfólio",
    "Segurança da Informação",
    "Ciência da Computação",
    "PUC Minas",
    "Design",
    "Direção",
    "Fotografia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#030303] font-sans text-white antialiased selection:bg-blue-500/30 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
