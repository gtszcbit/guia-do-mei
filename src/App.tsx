import React from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { VisualShowcase } from './components/VisualShowcase';
import { FourPillars } from './components/FourPillars';
import { AudienceAndSimulator } from './components/AudienceAndSimulator';
import { SituationSelector } from './components/SituationSelector';
import { BonusSection } from './components/BonusSection';
import { PricingOffer } from './components/PricingOffer';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#2E3E4E] flex flex-col font-sans">
      {/* SEÇÃO 1 — FAIXA SUPERIOR */}
      <TopBanner />

      <main className="flex-1">
        {/* SEÇÃO 2 — HERO AZUL-MARINHO */}
        <HeroSection />

        {/* SEÇÃO 3 — DEMONSTRAÇÃO VISUAL DO MATERIAL */}
        <VisualShowcase />

        {/* SEÇÃO 4 — QUATRO PILARES DO GUIA */}
        <FourPillars />

        {/* SEÇÃO 5 — PARA QUEM É + SIMULADOR */}
        <AudienceAndSimulator />

        {/* SEÇÃO 6 — SELETOR INTERATIVO DA SITUAÇÃO */}
        <SituationSelector />

        {/* SEÇÃO 7 — QUATRO BÔNUS */}
        <BonusSection />

        {/* SEÇÃO 8 — OFERTA E DOIS PLANOS (INCLUI AVALIAÇÕES) */}
        <PricingOffer />

        {/* SEÇÃO 9 — GARANTIA */}
        <GuaranteeSection />

        {/* SEÇÃO 12 — PERGUNTAS FREQUENTES */}
        <FAQSection />

        {/* SEÇÃO 13 — CHAMADA FINAL */}
        <FinalCTA />
      </main>

      {/* SEÇÃO 14 — RODAPÉ */}
      <Footer />
    </div>
  );
}
