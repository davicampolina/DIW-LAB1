"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectsTimeline() {
  const { data, t } = useLanguage();

  // Ordenação cronológica do projeto mais antigo para o mais recente
  const chronologicalProjects = useMemo(() => {
    return [...data.projects.items].sort(
      (a, b) => a.yearTimestamp - b.yearTimestamp
    );
  }, [data.projects.items]);

  return (
    <section
      id="projetos"
      className="relative py-16 sm:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Indexado 02. // Projetos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="pb-6 border-b border-white/[0.12]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm sm:text-base font-bold text-blue-400">
                {data.projects.sectionNumber}
              </span>
              <span className="font-mono text-sm sm:text-base text-blue-300">
                {t(data.projects.sectionTag)}
              </span>
            </div>

            <Badge variant="cobalt" className="gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{t(data.projects.chronologicalBadge)}</span>
            </Badge>
          </div>

          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {t(data.projects.title)}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#A1A1AA] max-w-2xl">
            {t(data.projects.subtitle)}
          </p>
        </motion.div>

        {/* Timeline Dinâmica e Interativa (Com pontos limpos sem números dentro e finalização suave em gradiente) */}
        <div className="relative mt-10 pb-12">
          {/* Linha Vertical Principal com fade-in no topo e fade-out suave no final */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-3 sm:left-4 top-0 bottom-0 w-[1px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(59,130,246,0) 0%, rgba(59,130,246,0.75) 6%, rgba(255,255,255,0.22) 55%, rgba(59,130,246,0.5) 82%, rgba(59,130,246,0) 100%)",
            }}
          />

          {/* Efeito difuso de dissipação suave na base da linha do tempo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[5px] sm:left-[9px] bottom-2 h-24 w-[15px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500/25 via-blue-400/10 to-transparent blur-md"
          />

          <div className="space-y-8">
            {chronologicalProjects.map((project, index) => {
              const isLatest = index === chronologicalProjects.length - 1;
              const hasImages = project.images && project.images.length > 0;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative pl-10 sm:pl-12"
                >
                  {/* Ponto da Timeline (Sem número dentro) */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute left-[7px] sm:left-[11px] top-8 h-3 w-3 rounded-full border transition-all",
                      isLatest
                        ? "border-blue-300 bg-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.9)]"
                        : "border-blue-400/70 bg-[#050505] shadow-[0_0_10px_rgba(59,130,246,0.35)]"
                    )}
                  />

                  {/* Card Fosco do Projeto */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "rounded-2xl border p-6 sm:p-7 backdrop-blur-xl transition-all duration-300",
                      isLatest
                        ? "border-blue-400/50 bg-gradient-to-br from-blue-950/25 via-black/75 to-black/85 shadow-[0_0_40px_rgba(29,78,216,0.22)]"
                        : "border-white/10 bg-white/[0.03] hover:border-blue-500/50"
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/[0.1]">
                      <Badge variant={isLatest ? "cobalt" : "status"}>
                        {t(project.date)}
                      </Badge>
                      <span className="font-mono text-xs text-[#A1A1AA]">
                        // {t(project.subtitle)}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                      {t(project.title)}
                    </h3>

                    <p className="mt-2.5 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                      {t(project.description)}
                    </p>

                    {/* Galeria / Preview de Imagens Reais do Projeto (quando disponível) */}
                    {hasImages && (
                      <div
                        className={cn(
                          "mt-6 grid gap-4",
                          project.images!.length > 1
                            ? "grid-cols-1 md:grid-cols-12 items-stretch"
                            : "grid-cols-1"
                        )}
                      >
                        {project.images!.map((imgSrc, imgIdx) => {
                          const isTwoImages = project.images!.length === 2;
                          return (
                            <div
                              key={imgSrc}
                              className={cn(
                                "group relative overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
                                isTwoImages
                                  ? imgIdx === 0
                                    ? "md:col-span-7"
                                    : "md:col-span-5"
                                  : "w-full"
                              )}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={imgSrc}
                                alt={`${t(project.title)} - ${imgIdx + 1}`}
                                className={cn(
                                  "w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.015]",
                                  isTwoImages
                                    ? "h-64 sm:h-72 md:h-80"
                                    : "h-auto max-h-[420px] object-top"
                                )}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Tags Monoespaçadas */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Botão apenas quando houver site externo publicado (sidneyrocha.com.br) */}
                    {project.liveUrl && (
                      <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex"
                        >
                          <Button variant="primary" size="sm">
                            <Globe className="h-3.5 w-3.5" />
                            <span>
                              {t(data.projects.viewSiteBtn)} (sidneyrocha.com.br)
                            </span>
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                    )}
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
