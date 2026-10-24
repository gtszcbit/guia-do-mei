import React from 'react';
import { ArrowRight, FileText, Mail, ShieldCheck } from 'lucide-react';
import { landingConfig, formatCurrencyBRL } from '../config/landingConfig';

export const FinalCTA: React.FC = () => {
  const { pricing, delivery, product } = landingConfig;

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#0F2D4A] text-white">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        {/* Título com "organizar" em amarelo */}
        <h2 className="text-[28px] sm:text-[38px] md:text-[46px] font-extrabold font-display text-white leading-tight max-w-2xl text-balance">
          Comece a <span className="text-[#FFC845]">organizar</span> a rotina do seu MEI
        </h2>

        {/* Subtítulo curto */}
        <p className="mt-3 text-base sm:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
          Tenha um material visual para consultar cada etapa com mais clareza.
        </p>

        {/* Preço do completo em amarelo e grande */}
        <div className="mt-8 mb-4">
          <span className="text-xs uppercase tracking-wider text-white/70 block">
            Plano Completo por apenas
          </span>
          <div className="text-[42px] sm:text-[54px] md:text-[62px] font-extrabold font-display text-[#FFC845] leading-none my-2">
            {formatCurrencyBRL(pricing.completo.price)}
          </div>
          <span className="text-xs text-white/60">
            Acesso vitalício ao PDF • Pagamento único
          </span>
        </div>

        {/* CTA para #oferta */}
        <a
          href="#oferta"
          className="btn-cta-green w-full max-w-[520px] py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg mt-3 mb-8 group"
        >
          <span>QUERO ESCOLHER MEU PLANO</span>
          <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Linha de informações sobre formato, entrega e garantia */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/75 flex-wrap">
          <span className="flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#13A3A0]" />
            {product.format}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-[#FFC845]" />
            Envio imediato no e-mail
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#1E9E6A]" />
            Garantia de {delivery.guaranteeDays} dias
          </span>
        </div>

      </div>
    </section>
  );
};
