import React from 'react';
import { ArrowRight, Check, ShieldCheck, FileText } from 'lucide-react';
import { BookCover } from './VisualAssets';
import { landingConfig } from '../config/landingConfig';

export const HeroSection: React.FC = () => {
  const { product, delivery } = landingConfig;

  const heroThemes = [
    "Formalização e primeiros passos",
    "DAS e organização dos comprovantes",
    "Receitas, Pix e faturamento",
    "Notas de serviços e de mercadorias",
    "Declaração anual DASN-Simei",
    "Consulta de pendências e parcelamento",
    "Contribuições e requisitos previdenciários",
    "Rotina e prevenção de golpes"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1E4C78] to-[#0F2D4A] text-white pt-10 pb-16 px-5 sm:px-6">
      {/* Container centralizado */}
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        {/* 1) Cápsula superior com borda translúcida */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-white/95 mb-6">
          <span>GUIA VISUAL DO MEI · EDIÇÃO 2026</span>
        </div>

        {/* 2) H1 com destaque em amarelo e traço curvo decorativo */}
        <h1 className="text-[34px] sm:text-[46px] md:text-[58px] lg:text-[66px] font-extrabold leading-[1.05] tracking-tight font-display max-w-4xl text-balance">
          Guia{' '}
          <span className="text-[#FFC845] relative inline-block">
            Visual
            <svg
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3.5 text-[#FFC845]"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2,16 Q50,-4 98,16"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          do MEI
        </h1>

        {/* 3) Subtítulo com palavras em amarelo */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl font-normal leading-[1.6]">
          Entenda as obrigações do seu MEI e aprenda a{' '}
          <span className="text-[#FFC845] font-semibold">organizar guias, notas e declarações</span>{' '}
          com um passo a passo visual e <span className="text-[#FFC845] font-semibold">fácil de consultar</span>.
        </p>

        {/* 4) Composição do produto: Capa na frente e 4 páginas reais atrás */}
        <div className="relative mt-8 mb-6 w-full max-w-[620px] flex items-center justify-center select-none px-2">
          <img
            src="/assets/aistudio/Kit_Guia_Visual_do_MEI_transparente_1f467d91.png"
            alt="Kit Oficial do Guia Visual do MEI 2026 com páginas e bônus"
            className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-300"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* 5) Duas cápsulas abaixo da composição */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-5">
          <span className="bg-white/15 border border-white/25 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-sm">
            📘 {product.guidePages} páginas no guia
          </span>
          <span className="bg-white/15 border border-white/25 text-[#FFC845] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-sm">
            🎁 {product.bonusCount} bônus no completo
          </span>
        </div>

        {/* 6) Parágrafo curto */}
        <p className="text-white/85 text-sm sm:text-base max-w-xl leading-relaxed mb-3">
          O guia reúne orientações e tutoriais ilustrados para você consultar conforme a necessidade, sem termos técnicos complicados.
        </p>

        {/* 7) Frase curta em verde-claro */}
        <p className="text-[#A3E6BA] font-extrabold text-sm sm:text-base tracking-wide mb-8">
          Um assunto por página. Explicações diretas. Consulta prática.
        </p>

        {/* 8) Lista de 8 temas em 2 colunas desktop, 1 coluna celular */}
        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 mb-8 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-white/95">
            {heroThemes.map((theme, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E9E6A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </span>
                <span className="leading-snug">{theme}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 10) CTA Principal */}
        <a
          href="#oferta"
          className="btn-cta-green w-full max-w-[520px] py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg mb-6 group"
        >
          <span>QUERO CONHECER OS PLANOS</span>
          <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* 11) Linha de confiança */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80 flex-wrap">
          <span className="flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#13A3A0]" />
            PDF para consultar e imprimir
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#1E9E6A]" />
            Garantia de {delivery.guaranteeDays} dias
          </span>
        </div>

        {/* 12) Texto discreto sobre entrega */}
        <p className="mt-3 text-xs text-white/60">
          {delivery.channelText}
        </p>

      </div>
    </section>
  );
};
