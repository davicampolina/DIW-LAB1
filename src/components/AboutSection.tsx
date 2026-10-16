"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const { locale, data, t } = useLanguage();

  return (
    <section
      id="sobre-mim"
      className="relative py-16 sm:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho // Sobre Mim */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="pb-6 border-b border-white/[0.12]"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-base font-bold text-blue-400">
              {data.about.sectionNumber}
            </span>
            <span className="font-mono text-sm sm:text-base text-blue-300">
              {t(data.about.sectionTag)}
            </span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {t(data.about.title)}
          </h2>
        </motion.div>

        {/* Biografia Pessoal e Direta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-8"
        >
          <Card className="p-6 sm:p-8 bg-black/60">
            <div className="space-y-4 text-sm sm:text-base text-zinc-200 leading-relaxed">
              {data.about.bioParagraphs[locale].map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3 font-mono text-xs text-[#A1A1AA]">
              <Badge variant="cobalt">PUC Minas — {t(data.profile.course)}</Badge>
              <Badge variant="mono">
                {locale === "pt-BR"
                  ? "Segurança da Informação @ Trinité"
                  : "Information Security @ Trinité"}
              </Badge>
              <Badge variant="mono">{t(data.profile.highSchool)}</Badge>
            </div>
          </Card>
        </motion.div>

        {/* Seção Simplificada: Linguagens em Aprendizado + Experiência em Design, Edição, Direção e Fotografia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="p-6 sm:p-7 bg-white/[0.03]">
            <div className="flex items-center gap-2.5 mb-2">
              <Code2 className="h-5 w-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">
                {t(data.about.languagesTitle)}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mb-5">
              {t(data.about.languagesSubtitle)}
            </p>
            <div className="flex flex-wrap gap-2">
              {data.about.languages.map((lang) => (
                <Badge
                  key={lang}
                  variant="cobalt"
                  className="px-3.5 py-1.5 text-xs sm:text-sm"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-7 bg-white/[0.03]">
            <div className="flex items-center gap-2.5 mb-2">
              <Palette className="h-5 w-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">
                {t(data.about.creativeTitle)}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mb-5">
              {t(data.about.creativeSubtitle)}
            </p>
            <div className="flex flex-wrap gap-2">
              {data.about.creativeSkills[locale].map((skill) => (
                <Badge
                  key={skill}
                  variant="mono"
                  className="px-3.5 py-1.5 text-xs sm:text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
