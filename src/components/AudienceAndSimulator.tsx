import React, { useState } from 'react';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { landingConfig, formatCurrencyBRL } from '../config/landingConfig';

export const AudienceAndSimulator: React.FC = () => {
  const [monthlySpend, setMonthlySpend] = useState<number>(150);
  const completeGuidePrice = landingConfig.pricing.completo.price;

  const audienceItems = [
    "Quem pretende abrir o MEI e quer começar sem dúvidas.",
    "Quem precisa organizar as obrigações e prazos do dia a dia.",
    "Quem quer aprender a consultar e emitir o DAS com segurança.",
    "Quem tem dúvidas sobre emissão e tipos de notas fiscais.",
    "Quem precisa acompanhar o faturamento para não estourar o teto.",
    "Quem quer identificar pendências e entender os próximos passos."
  ];

  // Cálculo anual do gasto informado
  const annualSpend = monthlySpend * 12;
  const difference = Math.max(0, annualSpend - completeGuidePrice);

  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#F6F8FB]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold font-display text-[#10233A] leading-tight max-w-2xl text-balance">
          Para quem quer cuidar da rotina com mais autonomia
        </h2>

        {/* 6 linhas em cards brancos até 660px */}
        <div className="w-full max-w-[660px] mt-8 space-y-2.5 text-left">
          {audienceItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E3E8EF] p-4 flex items-center gap-3.5 shadow-sm hover:border-slate-300 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-[#E3F6EC] text-[#1E9E6A] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#2E3E4E]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Simulador Interativo em Card Azul-Marinho */}
        <div className="w-full max-w-[560px] mt-12 bg-[#0F2D4A] text-white rounded-[24px] p-6 sm:p-8 shadow-xl text-left border border-white/10">
          <div className="flex items-center gap-2.5 text-[#FFC845] font-bold text-xs uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Simulador Comparativo</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
            Compare os valores
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
            Quanto você informa de gasto mensal com apoio administrativo?
          </p>

          {/* Slider interativo */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/70">R$ 0</span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#FFC845] font-display">
                {formatCurrencyBRL(monthlySpend)} <span className="text-xs font-normal text-white/80">/ mês</span>
              </span>
              <span className="text-xs text-white/70">R$ 400</span>
            </div>

            <input
              type="range"
              min="0"
              max="400"
              step="10"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              aria-label="Gasto mensal com apoio administrativo"
              aria-valuemin={0}
              aria-valuemax={400}
              aria-valuenow={monthlySpend}
              aria-valuetext={formatCurrencyBRL(monthlySpend)}
              className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FFC845] focus:outline-none focus:ring-2 focus:ring-[#FFC845]"
            />
          </div>

          {/* Comparativo de 12 meses vs Guia Completo */}
          <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/10 rounded-xl p-3 sm:p-4 border border-white/10">
              <span className="text-[11px] text-white/70 block leading-tight">
                Em 12 meses informado:
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-white font-display mt-1 block">
                {formatCurrencyBRL(annualSpend)}
              </span>
              <span className="text-[10px] text-white/60">
                (12 × {formatCurrencyBRL(monthlySpend)})
              </span>
            </div>

            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 sm:p-4">
              <span className="text-[11px] text-emerald-300 block leading-tight font-semibold">
                Guia Completo (Único):
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-[#FFC845] font-display mt-1 block">
                {formatCurrencyBRL(completeGuidePrice)}
              </span>
              <span className="text-[10px] text-emerald-200/70">
                Material vitalício em PDF
              </span>
            </div>
          </div>

          {/* Diferença entre os valores (se mensal > 0) */}
          {monthlySpend > 0 && (
            <div className="mt-4 bg-[#FFC845]/15 border border-[#FFC845]/30 rounded-xl p-3 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-white/90 font-medium">
                Diferença entre os valores:
              </span>
              <span className="font-extrabold text-[#FFC845] font-display text-base">
                {formatCurrencyBRL(difference)}
              </span>
            </div>
          )}


          {/* CTA do Simulador */}
          <div className="mt-6">
            <a
              href="#oferta"
              className="btn-cta-green w-full py-3.5 px-6 text-sm sm:text-base group text-center"
            >
              <span>QUERO O GUIA COMPLETO</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
