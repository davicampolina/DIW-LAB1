"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Medal, Trophy, ExternalLink, Play, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CertificatesSection() {
  const { data, t } = useLanguage();

  return (
    <section
      id="certificados"
      className="relative py-16 sm:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho // Certificados & Premiações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="pb-6 border-b border-white/[0.12]"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-base font-bold text-blue-400">
              {data.certificates.sectionNumber}
            </span>
            <span className="font-mono text-sm sm:text-base text-blue-300">
              {t(data.certificates.sectionTag)}
            </span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {t(data.certificates.title)}
          </h2>
        </motion.div>

        {/* Grid de Certificados e Conquistas */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.certificates.items.map((cert, idx) => {
            const isFeatured = cert.featured;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -3 }}
                className={cn(isFeatured && "md:col-span-2")}
              >
                <Card
                  className={cn(
                    "h-full p-6 sm:p-8 flex flex-col justify-between transition-all duration-300",
                    isFeatured
                      ? "bg-gradient-to-br from-blue-950/30 via-black/75 to-black/85 border-blue-400/50 shadow-[0_0_45px_rgba(29,78,216,0.22)]"
                      : "bg-white/[0.03] border-white/10 hover:border-blue-500/50"
                  )}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="cobalt">{cert.year}</Badge>
                        <Badge variant="status">{t(cert.badgeText)}</Badge>
                      </div>

                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/35 bg-blue-500/15 text-blue-300">
                        {isFeatured ? (
                          <Trophy className="h-4 w-4" />
                        ) : cert.id === "cert-cambridge" ? (
                          <Globe className="h-4 w-4" />
                        ) : (
                          <Medal className="h-4 w-4" />
                        )}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">
                      {t(cert.title)}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                      {t(cert.description)}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                      <Award className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span>{t(cert.issuer)}</span>
                    </div>

                    {cert.externalUrl && cert.externalUrlLabel && (
                      <a
                        href={cert.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button variant="primary" size="sm">
                          <Play className="h-3.5 w-3.5 fill-black" />
                          <span>{t(cert.externalUrlLabel)}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Button>
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
