import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';
import { landingConfig } from '../config/landingConfig';

export const GuaranteeSection: React.FC = () => {
  const { delivery } = landingConfig;

  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6 bg-white">
      <div className="max-w-[1120px] mx-auto flex justify-center text-center">

        {/* Card central até 700px com borda verde tracejada de 3px */}
        <div className="w-full max-w-[700px] border-[3px] border-dashed border-[#1E9E6A] rounded-[22px] p-6 sm:p-10 bg-[#F6F8FB]/50 flex flex-col items-center">

          {/* Selo Original em SVG/CSS com "7 dias" em amarelo e azul-marinho */}
          <div className="relative mb-5 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#0F2D4A] border-4 border-[#FFC845] shadow-lg flex flex-col items-center justify-center text-white select-none">
              <span className="text-[10px] font-black tracking-widest text-[#FFC845] uppercase">
                Garantia
              </span>
              <span className="text-2xl font-black font-display text-white leading-none">
                {delivery.guaranteeDays}
              </span>
              <span className="text-[9px] font-bold text-white/80 uppercase">
                Dias
              </span>
            </div>
            <div className="absolute -bottom-2 bg-[#FFC845] text-[#0F2D4A] text-[9px] font-black px-2.5 py-0.5 rounded-full shadow-sm tracking-wider uppercase">
              100% Seguro
            </div>
          </div>

          {/* Título Original */}
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#10233A] leading-tight">
            Você tem 7 dias para avaliar o material
          </h2>

          {/* Texto explicativo */}
          <p className="mt-4 text-sm sm:text-base text-[#2E3E4E] leading-relaxed max-w-lg">
            {delivery.guaranteeText}
          </p>

          {/* Canal de suporte configurável */}
          <div className="mt-6 pt-5 border-t border-slate-200 w-full flex flex-col items-center justify-center text-xs text-[#5E6E7E] gap-1">
            <div className="flex items-center gap-1.5 font-bold text-[#0F2D4A]">
              <Mail className="w-4 h-4 text-[#13A3A0]" />
              <span>Canal oficial de atendimento:</span>
              <span className="text-slate-800 select-all font-mono">
                {delivery.supportEmail}
              </span>
            </div>
            <span>{delivery.supportSchedule}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
