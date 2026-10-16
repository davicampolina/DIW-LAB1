"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { data, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 mt-10 border-t border-white/[0.12] bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/[0.12]">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-500/40 bg-blue-600/20 font-mono text-xs text-blue-300">
              &lt;/&gt;
            </span>
            <span className="font-mono text-sm font-bold text-white">
              {data.profile.name}
            </span>
            <span className="font-mono text-xs text-[#A1A1AA]">
              // {t(data.footer.builtWith)}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 font-mono text-xs">
            <a
              href="#sobre-mim"
              className="text-[#A1A1AA] hover:text-white transition-colors"
            >
              {t(data.nav.about)}
            </a>
            <a
              href="#projetos"
              className="text-[#A1A1AA] hover:text-white transition-colors"
            >
              {t(data.nav.projects)}
            </a>
            <a
              href="#experiencias"
              className="text-[#A1A1AA] hover:text-white transition-colors"
            >
              {t(data.nav.experience)}
            </a>
            <a
              href="#certificados"
              className="text-[#A1A1AA] hover:text-white transition-colors"
            >
              {t(data.nav.certificates)}
            </a>
            <a
              href="#contato"
              className="text-[#A1A1AA] hover:text-white transition-colors"
            >
              {t(data.nav.contact)}
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <div className="font-mono">
            © {new Date().getFullYear()} {data.profile.name}.{" "}
            {t(data.footer.rights)}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${data.profile.email}`}
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-blue-500/50 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
            <a
              href={data.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-blue-500/50 hover:text-white transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href={data.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-blue-500/50 hover:text-white transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] text-white hover:border-blue-500/50 transition-all"
            >
              <span>{t(data.footer.backToTop)}</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
