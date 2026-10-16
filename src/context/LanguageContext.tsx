"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, portfolioData, PortfolioContent } from "@/data/portfolioData";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  data: PortfolioContent;
  t: (record: Record<Locale, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt-BR");

  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem("portfolio_locale") as Locale | null;
      if (savedLocale === "pt-BR" || savedLocale === "en") {
        setLocaleState(savedLocale);
        document.documentElement.lang = savedLocale;
      }
    } catch {
      // Fallback silencioso caso localStorage esteja indisponível
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("portfolio_locale", newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // Ignora erro de storage
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "pt-BR" ? "en" : "pt-BR");
  };

  const t = (record: Record<Locale, string>): string => {
    return record[locale] ?? record["pt-BR"];
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        data: portfolioData,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

