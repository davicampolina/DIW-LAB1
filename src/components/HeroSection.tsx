"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Award, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { locale, data, t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-black/60 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_0_80px_rgba(29,78,216,0.2),inset_0_1px_0_0_rgba(255,255,255,0.16)]"
        >
          {/* Glow interno azul-cobalto + luz branca/azul-gelo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full opacity-70 blur-[95px]"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(147,197,253,0.45) 35%, rgba(29,78,216,0.55) 70%, transparent 100%)",
            }}
          />

          <div className="relative z-10">
            {/* Localização Superior */}
            <div className="flex items-center justify-end pb-4">
              <div className="flex items-center gap-1.5 font-mono text-xs text-[#A1A1AA]">
                <MapPin className="h-3.5 w-3.5 text-blue-400" />
                <span>{t(data.profile.location)}</span>
              </div>
            </div>

            {/* Grid Principal: Apresentação ao lado da Foto de Perfil Maior e Mais Arredondada */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Coluna de Apresentação */}
              <div className="lg:col-span-7 space-y-4">
                <p className="font-mono text-xs sm:text-sm text-blue-300">
                  // {data.profile.name} • {data.profile.age}{" "}
                  {locale === "pt-BR" ? "anos" : "years old"}
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                  {t(data.profile.headline)}
                </h1>

                <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
                  {t(data.profile.subheadline)}
                </p>

                {/* Botões Clean em Formato de Pílula */}
                <div className="pt-4 flex flex-wrap items-center gap-3.5">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => scrollTo("projetos")}
                  >
                    <span>{t(data.hero.primaryBtn)}</span>
                    <ArrowDownRight className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="matte"
                    size="lg"
                    type="button"
                    onClick={() => scrollTo("certificados")}
                  >
                    <Award className="h-4 w-4 text-blue-400" />
                    <span>{t(data.hero.certificatesBtn)}</span>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollTo("contato")}
                  >
                    <span>{t(data.hero.secondaryBtn)}</span>
                  </Button>
                </div>
              </div>

              {/* Coluna da Foto de Perfil em Formato Circular */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="relative aspect-square w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[360px]"
                >
                  {/* Brilho azulado atrás do círculo */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-600/40 via-blue-400/20 to-transparent blur-2xl"
                  />

                  <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-black/50 p-2 shadow-[0_0_50px_rgba(29,78,216,0.35),inset_0_1px_0_0_rgba(255,255,255,0.22)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/profile-avatar.jpg"
                      alt={data.profile.name}
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
