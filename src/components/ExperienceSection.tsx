"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const { locale, data, t } = useLanguage();

  return (
    <section
      id="experiencias"
      className="relative py-16 sm:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho // Experiências */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="pb-6 border-b border-white/[0.12]"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-base font-bold text-blue-400">
              {data.experience.sectionNumber}
            </span>
            <span className="font-mono text-sm sm:text-base text-blue-300">
              {t(data.experience.sectionTag)}
            </span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {t(data.experience.title)}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#A1A1AA]">
            {t(data.experience.subtitle)}
          </p>
        </motion.div>

        {/* Lista Minimalista Separada por Linhas Horizontais Finas (Sem numeração) */}
        <div className="mt-4 divide-y divide-white/[0.12] border-b border-white/[0.12]">
          {data.experience.items.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="py-7 sm:py-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                {/* Coluna 1: Ponto + Período */}
                <div className="lg:col-span-4 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.75)] shrink-0"
                  />
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-200 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1">
                    <Calendar className="h-3 w-3 text-blue-400" />
                    {t(exp.period)}
                  </span>
                </div>

                {/* Coluna 2: Cargo, Instituição (Trinité / PUC Minas), Descrição e Tags */}
                <div className="lg:col-span-8 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {t(exp.role)}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 font-mono text-xs sm:text-sm text-blue-300">
                      <Building2 className="h-3.5 w-3.5 text-[#A1A1AA]" />
                      <span>{t(exp.company)}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                    {t(exp.description)}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tags[locale].map((tag) => (
                      <Badge key={tag} variant="mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
