"use client";

import React from "react";

/**
 * BackgroundAtmosphere
 * Reproduz fielmente a direção de arte das referências anexadas:
 * 1. Manchas orgânicas de gradiente difuso (mesh gradients / radial blurs) entre preto profundo (#030303),
 *    azul-cobalto intenso (#1D4ED8), azul-elétrico (#3B82F6) e toques de luz branca/azul-gelo (#93C5FD).
 * 2. Overlay global com filtro SVG <feTurbulence type="fractalNoise" baseFrequency="0.8" ... />
 *    conferindo aspecto impresso, fosco e granulado (High Grain / Matte Noise).
 */
export function BackgroundAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030303]"
    >
      {/* Camada de Manchas Orgânicas Difusas (Mesh Gradients / Radial Blurs) */}
      <div
        className="absolute -top-[18%] -left-[10%] h-[680px] w-[780px] rounded-full opacity-55 blur-[135px]"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(147, 197, 253, 0.55) 0%, rgba(59, 130, 246, 0.45) 35%, rgba(29, 78, 216, 0.3) 65%, rgba(3, 3, 3, 0) 100%)",
        }}
      />

      <div
        className="absolute top-[22%] -right-[12%] h-[740px] w-[740px] rounded-full opacity-45 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.65) 0%, rgba(59, 130, 246, 0.35) 42%, rgba(147, 197, 253, 0.18) 70%, rgba(3, 3, 3, 0) 100%)",
        }}
      />

      <div
        className="absolute top-[58%] left-[8%] h-[620px] w-[680px] rounded-full opacity-35 blur-[145px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.48) 0%, rgba(29, 78, 216, 0.35) 50%, rgba(3, 3, 3, 0) 100%)",
        }}
      />

      <div
        className="absolute -bottom-[15%] right-[15%] h-[580px] w-[720px] rounded-full opacity-45 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, rgba(255, 255, 255, 0.22) 0%, rgba(147, 197, 253, 0.32) 30%, rgba(29, 78, 216, 0.42) 62%, rgba(3, 3, 3, 0) 100%)",
        }}
      />

      {/* Grade técnica sutil de engenharia ao fundo */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Filtro SVG Obrigatório de Ruído Granulado Alto (High Grain / Noise) */}
      <svg
        className="pointer-events-none fixed inset-0 h-full w-full opacity-[0.22] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="high-grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#high-grain-noise)" />
      </svg>
    </div>
  );
}

