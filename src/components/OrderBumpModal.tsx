import React, { useEffect, useRef } from 'react';
import { X, ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { formatCurrencyBRL, landingConfig } from '../config/landingConfig';

interface OrderBumpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade: () => void;
  onDeclineToBasic: () => void;
}

export const OrderBumpModal: React.FC<OrderBumpModalProps> = ({
  isOpen,
  onClose,
  onAcceptUpgrade,
  onDeclineToBasic
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const acceptButtonRef = useRef<HTMLButtonElement>(null);

  const orderBump = landingConfig.pricing.orderBump || {
    price: 24.90,
    originalPrice: 37.90,
    savings: 13.00,
    diffFromBasico: 5.00
  };

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      acceptButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-bump-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A2036]/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-[3px] border-[#1E9E6A] overflow-hidden text-left flex flex-col max-h-[92vh]"
      >
        {/* Faixa superior de destaque */}
        <div className="bg-[#1E9E6A] text-white py-3.5 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FFC845] shrink-0" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider font-display">
              Oportunidade Única de Upgrade
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7 overflow-y-auto space-y-4">
          <div className="text-center">
            <span className="inline-block bg-[#FFF4D6] text-amber-900 border border-[#FFC845]/60 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Economize R$ 13,00 Agora
            </span>
            <h3 id="order-bump-title" className="text-2xl sm:text-3xl font-extrabold font-display text-[#10233A] leading-tight">
              Espere! Leve o <span className="text-[#1E9E6A]">Pacote Completo</span> por apenas {formatCurrencyBRL(orderBump.price)}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#5E6E7E]">
              Por apenas <strong className="text-[#10233A]">{formatCurrencyBRL(orderBump.diffFromBasico)} a mais</strong> do que o plano básico ({formatCurrencyBRL(landingConfig.pricing.basico.price)}), você desbloqueia o kit completo com todos os bônus.
            </p>
          </div>

          {/* Imagem do Kit Completo */}
          <div className="flex justify-center my-2">
            <img
              src="/assets/aistudio/Kit_Guia_Visual_do_MEI_transparente_1f467d91.png"
              alt="Kit Guia Visual do MEI Completo com 4 Bônus"
              className="max-h-[160px] sm:max-h-[190px] w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Comparativo de Desconto */}
          <div className="bg-[#F6F8FB] border border-[#E3E8EF] rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
              <span className="text-xs text-slate-500 line-through">
                Preço normal do Completo: {formatCurrencyBRL(orderBump.originalPrice)}
              </span>
              <span className="bg-red-100 text-red-700 text-[11px] font-black px-2 py-0.5 rounded-full">
                -34% OFF
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-sm font-bold text-[#0F2D4A]">
                Nesta oferta de upgrade:
              </span>
              <div className="text-right">
                <span className="text-3xl font-extrabold font-display text-[#1E9E6A] leading-none">
                  {formatCurrencyBRL(orderBump.price)}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  pagamento único
                </span>
              </div>
            </div>

            {/* O que você ganha a mais */}
            <div className="pt-2 border-t border-slate-200 space-y-1.5 text-xs text-slate-700">
              <div className="font-bold text-[#0F2D4A] mb-1">
                Tudo o que você leva a mais por apenas {formatCurrencyBRL(orderBump.diffFromBasico)}:
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#1E9E6A] shrink-0 stroke-[3]" />
                <span>Bônus 1: Calendário de obrigações 2026/2027 (5 pág.)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#1E9E6A] shrink-0 stroke-[3]" />
                <span>Bônus 2: Registro mensal de receitas (4 pág.)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#1E9E6A] shrink-0 stroke-[3]" />
                <span>Bônus 3: Conferência da situação do MEI (5 pág.)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#1E9E6A] shrink-0 stroke-[3]" />
                <span>Bônus 4: Dicionário visual do MEI (7 pág.)</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#13A3A0] pt-1">
                <Check className="w-3.5 h-3.5 text-[#13A3A0] shrink-0 stroke-[3]" />
                <span>Total de 71 páginas A4 em 5 arquivos PDF separados</span>
              </div>
            </div>
          </div>

          {/* Botão de Upgrade Principal */}
          <div className="pt-2 space-y-3">
            <button
              ref={acceptButtonRef}
              type="button"
              onClick={onAcceptUpgrade}
              className="btn-cta-green w-full py-4 px-6 text-sm sm:text-base font-extrabold group text-center"
            >
              <span>SIM, QUERO O COMPLETO POR {formatCurrencyBRL(orderBump.price)}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Opção de continuar com o básico */}
            <button
              type="button"
              onClick={onDeclineToBasic}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-700 underline underline-offset-2 transition-colors py-1 font-medium"
            >
              Não, obrigado. Prefiro continuar apenas com o Guia Básico por {formatCurrencyBRL(landingConfig.pricing.basico.price)}
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1E9E6A]" />
            <span>Garantia incondicional de 7 dias mantida para qualquer plano</span>
          </div>
        </div>
      </div>
    </div>
  );
};
