import React from "react";
import { BackgroundAtmosphere } from "@/components/BackgroundAtmosphere";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsTimeline } from "@/components/ProjectsTimeline";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white">
      {/* Atmosfera de Fundo: Mesh Gradients Difusos + Filtro SVG feTurbulence High-Grain Noise */}
      <BackgroundAtmosphere />

      {/* 1. Cabeçalho Flutuante em Pílula Fosca */}
      <Header />

      {/* 2. Área de Conteúdo Principal em Página Única */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsTimeline />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      {/* 3. Rodapé Minimalista (Footer) */}
      <Footer />
    </div>
  );
}
