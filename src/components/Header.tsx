"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Header() {
  const { locale, setLocale, data, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("sobre-mim");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: "sobre-mim", index: "01.", label: t(data.nav.about) },
    { id: "projetos", index: "02.", label: t(data.nav.projects) },
    { id: "experiencias", index: "03.", label: t(data.nav.experience) },
    { id: "certificados", index: "04.", label: t(data.nav.certificates) },
    { id: "contato", index: "05.", label: t(data.nav.contact) },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = [
        "sobre-mim",
        "projetos",
        "experiencias",
        "certificados",
        "contato",
      ];
      const scrollPosition = window.scrollY + 240;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionNavigation = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-label="Primary Navigation"
        className={cn(
          "pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 rounded-full border border-white/10 bg-black/70 px-3.5 sm:px-6 py-2.5 backdrop-blur-md transition-all duration-300",
          scrolled
            ? "shadow-[0_12px_40px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.12)] border-white/15"
            : "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
        )}
      >
        {/* Logotipo / Iniciais */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 rounded-full px-2.5 py-1 text-sm font-semibold tracking-tight text-white transition-colors hover:text-blue-200"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-500/40 bg-blue-600/20 font-mono text-xs text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:border-blue-400">
            &lt;/&gt;
          </span>
          <span className="font-mono text-xs sm:text-sm font-bold tracking-wider">
            {data.profile.initials}
          </span>
        </a>

        {/* Links de Navegação (Desktop) com maior espaçamento entre cada tópico e numeração */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSectionNavigation(item.id)}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200",
                  isActive ? "text-white" : "text-[#A1A1AA] hover:text-white"
                )}
              >
                <span className="mr-1.5 font-mono text-[11px] text-blue-400/90">
                  {item.index}
                </span>
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavGlow"
                    className="absolute inset-x-3 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_12px_#60A5FA]"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Seletor de Idioma (PT | EN) */}
        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label="Language Selector"
            className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 font-mono text-[11px]"
          >
            <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-blue-400 hidden sm:inline-block" />
            <button
              type="button"
              onClick={() => setLocale("pt-BR")}
              className={cn(
                "rounded-full px-2.5 py-1 transition-all duration-200",
                locale === "pt-BR"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-[#A1A1AA] hover:text-white"
              )}
              aria-pressed={locale === "pt-BR"}
            >
              PT
            </button>
            <span className="text-white/20 px-0.5 select-none">|</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "rounded-full px-2.5 py-1 transition-all duration-200",
                locale === "en"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-[#A1A1AA] hover:text-white"
              )}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:border-blue-500/50"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Dropdown Responsivo Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed top-20 left-4 right-4 z-50 rounded-2xl border border-white/15 bg-black/90 p-4 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSectionNavigation(item.id)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                    activeSection === item.id
                      ? "bg-blue-600/20 text-white border border-blue-500/40"
                      : "text-[#A1A1AA] hover:bg-white/[0.04] hover:text-white"
                  )}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-blue-400">
                    {item.index}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
