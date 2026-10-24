import React, { useState } from 'react';
import { Check, ArrowRight, ArrowUp, ShieldCheck, Mail, FileCheck2 } from 'lucide-react';
import { CheckoutNoticeModal } from './CheckoutNoticeModal';
import { OrderBumpModal } from './OrderBumpModal';
import { TestimonialsSection } from './TestimonialsSection';
import { landingConfig, formatCurrencyBRL } from '../config/landingConfig';

export const PricingOffer: React.FC = () => {
  const { pricing, delivery } = landingConfig;
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    planName: string;
    planPrice: number;
  }>({
    isOpen: false,
    planName: '',
    planPrice: 0
  });

  const [isOrderBumpOpen, setIsOrderBumpOpen] = useState(false);

  const priceDifference = Math.max(0, pricing.completo.price - pricing.basico.price);

  const handleCheckoutClick = (plan: 'completo' | 'basico') => {
    const config = plan === 'completo' ? pricing.completo : pricing.basico;
    if (config.checkoutUrl && config.checkoutUrl.trim().length > 0) {
      window.location.href = config.checkoutUrl;
    } else {
      setModalState({
        isOpen: true,
        planName: config.title,
        planPrice: config.price
      });
    }
  };

  const handleBasicClick = () => {
    // Ao clicar no básico, exibe o order bump do pacote completo por R$ 24,90
    setIsOrderBumpOpen(true);
  };

  const handleAcceptUpgrade = () => {
    setIsOrderBumpOpen(false);
    const orderBumpConfig = pricing.orderBump || {
      title: "PACOTE COMPLETO (UPGRADE ESPECIAL)",
      price: 24.90,
      checkoutUrl: ""
    };

    if (orderBumpConfig.checkoutUrl && orderBumpConfig.checkoutUrl.trim().length > 0) {
      window.location.href = orderBumpConfig.checkoutUrl;
    } else {
      setModalState({
        isOpen: true,
        planName: orderBumpConfig.title,
        planPrice: orderBumpConfig.price
      });
    }
  };

  const handleDeclineToBasic = () => {
    setIsOrderBumpOpen(false);
    handleCheckoutClick('basico');
  };

  const scrollToCompleto = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('plano-completo');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="oferta" className="py-16 sm:py-24 px-5 sm:px-6 bg-gradient-to-b from-[#EAF0F6] to-[#F6F8FB]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold font-display text-[#10233A] leading-tight max-w-2xl text-balance">
          Escolha como quer receber o seu guia
        </h2>

        <p className="mt-3 text-base sm:text-lg text-[#5E6E7E] max-w-xl font-normal leading-relaxed">
          Material digital em alta resolução, com entrega imediata para baixar e consultar sempre que precisar.
        </p>

        {/* 1) PLANO COMPLETO ACIMA (Destaque Principal, max-w-[560px]) */}
        <div
          id="plano-completo"
          className="w-full max-w-[560px] mt-12 bg-white rounded-[26px] border-[3px] border-[#1E9E6A] shadow-2xl overflow-hidden text-left relative"
        >
          {/* Cabeçalho Verde */}
          <div className="bg-[#1E9E6A] text-white py-3.5 px-6 flex items-center justify-between font-display">
            <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase flex items-center gap-1.5">
              <span>⭐</span>
              <span>{pricing.completo.badge}</span>
            </span>
            <span className="text-xs font-bold bg-white/20 px-2.5 py-0.5 rounded-full">
              71 PÁGINAS NO TOTAL
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#10233A]">
                {pricing.completo.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6E7E] mt-1">
                Guia Visual principal com 50 páginas + 4 bônus práticos exclusivos
              </p>
            </div>

            {/* Imagem do Kit Completo */}
            <div className="my-6 flex justify-center">
              <div className="relative flex items-center justify-center max-w-[320px] w-full">
                <img
                  src={landingConfig.images.kitMockup}
                  alt="Kit do Plano Completo com 50 páginas e 4 bônus"
                  className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.02] transition-transform"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Lista de Entregáveis */}
            <div className="mt-6 space-y-2.5 text-sm text-[#2E3E4E]">
              <div className="flex items-start gap-2.5 pb-2 border-b border-dashed border-slate-200">
                <span className="text-[#1E9E6A] font-extrabold mt-0.5">✓</span>
                <span className="font-semibold">Guia principal com 50 páginas A4 estruturadas</span>
              </div>
              <div className="flex items-start gap-2.5 pb-2 border-b border-dashed border-slate-200">
                <span className="text-[#1E9E6A] font-extrabold mt-0.5">✓</span>
                <span>Nove procedimentos em tutoriais visuais ilustrados</span>
              </div>
              <div className="flex items-start gap-2.5 pb-2 border-b border-dashed border-slate-200">
                <span className="text-[#1E9E6A] font-extrabold mt-0.5">✓</span>
                <span>DAS, notas fiscais, receitas e declaração anual</span>
              </div>
              <div className="flex items-start gap-2.5 pb-2 border-b border-dashed border-slate-200">
                <span className="text-[#1E9E6A] font-extrabold mt-0.5">✓</span>
                <span>Consultas, pendências e orientação sobre parcelamento</span>
              </div>
              <div className="flex items-start gap-2.5 pb-2 border-b border-dashed border-slate-200">
                <span className="text-[#1E9E6A] font-extrabold mt-0.5">✓</span>
                <span>Contribuições e requisitos previdenciários explicados</span>
              </div>

              {/* 4 Bônus identificados em fundo amarelo claro */}
              <div className="p-3 bg-[#FFF4D6] rounded-xl border border-[#FFC845]/50 space-y-1.5 text-xs text-amber-950 font-medium">
                <div className="font-extrabold text-[13px] text-[#0F2D4A] flex items-center gap-1.5 mb-1">
                  <span>🎁</span>
                  <span>Incluso os 4 bônus complementares:</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#1E9E6A] font-bold">✓</span>
                  <span>Bônus 1: Calendário de obrigações 2026/2027 (5 páginas)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#1E9E6A] font-bold">✓</span>
                  <span>Bônus 2: Registro mensal de receitas para preencher (4 páginas)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#1E9E6A] font-bold">✓</span>
                  <span>Bônus 3: Conferência da situação do MEI (5 páginas)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#1E9E6A] font-bold">✓</span>
                  <span>Bônus 4: Dicionário visual do MEI (7 páginas)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-[#13A3A0] font-bold">
                <FileCheck2 className="w-4 h-4 shrink-0 text-[#13A3A0]" />
                <span>Conjunto total de 71 páginas divididas em 5 arquivos PDF</span>
              </div>
            </div>

            {/* Preço em grande destaque */}
            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <span className="text-xs uppercase font-bold tracking-wider text-[#5E6E7E]">
                Valor único de acesso
              </span>
              <div className="text-[44px] sm:text-[56px] md:text-[60px] font-extrabold font-display text-[#10233A] leading-none my-2">
                {formatCurrencyBRL(pricing.completo.price)}
              </div>
              <span className="text-xs text-[#5E6E7E] block">
                Sem assinaturas ou cobranças recorrentes
              </span>

              {/* Botão de Compra */}
              <a
                href={pricing.completo.checkoutUrl || "#"}
                onClick={(e) => {
                  if (!pricing.completo.checkoutUrl) {
                    e.preventDefault();
                    handleCheckoutClick('completo');
                  }
                }}
                className="btn-cta-green w-full py-4 sm:py-5 px-6 text-base sm:text-lg mt-5 group flex items-center justify-center text-center cursor-pointer"
              >
                <span>QUERO O GUIA COMPLETO</span>
                <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Linha sobre entrega e garantia */}
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#5E6E7E] flex-wrap">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#13A3A0]" />
                  Acesso imediato no e-mail
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1E9E6A]" />
                  Garantia de {delivery.guaranteeDays} dias
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2) CHAMADA ENTRE OS PLANOS: Caixa azul-marinho com seta para cima */}
        <div className="my-8 w-full max-w-[560px] flex justify-center">
          <a
            href="#plano-completo"
            onClick={scrollToCompleto}
            className="group w-full bg-[#0F2D4A] hover:bg-[#1E4C78] text-white p-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-md transition-all text-xs sm:text-sm font-bold"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp className="w-4 h-4 text-[#FFC845]" />
            </div>
            <span>
              Por apenas <span className="text-[#FFC845] font-extrabold text-sm sm:text-base">{formatCurrencyBRL(priceDifference)}</span> a mais, inclua os quatro bônus
            </span>
          </a>
        </div>

        {/* 3) PLANO BÁSICO ABAIXO (Mais simples, max-w-[420px]) */}
        <div
          id="plano-basico"
          className="w-full max-w-[420px] bg-white rounded-[22px] border border-[#CBD5E1] shadow-md overflow-hidden text-left"
        >
          {/* Cabeçalho Cinza Claro */}
          <div className="bg-[#E2E8F0] text-[#334155] py-2.5 px-5 flex items-center justify-between font-display">
            <span className="text-xs font-bold tracking-wider uppercase">
              {pricing.basico.badge}
            </span>
            <span className="text-xs font-semibold text-slate-600 bg-white/60 px-2.5 py-0.5 rounded-full">
              50 PÁGINAS A4
            </span>
          </div>

          <div className="p-5 sm:p-6">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold font-display text-[#10233A]">
                {pricing.basico.title}
              </h4>
              <p className="text-xs text-[#5E6E7E] mt-0.5">
                Guia principal com 50 páginas (sem os materiais de bônus)
              </p>
            </div>

            {/* Imagem menor da capa */}
            <div className="my-4 flex justify-center">
              <div className="max-w-[160px] w-full flex justify-center">
                <img
                  src={landingConfig.images.heroCover}
                  alt="Capa do Plano Básico Guia do MEI 50 páginas"
                  className="w-full h-auto object-contain drop-shadow-xl rounded-xl hover:scale-[1.03] transition-transform duration-200"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Entregáveis simplificados do Básico */}
            <div className="space-y-2.5 text-xs text-[#2E3E4E] border-t border-slate-100 pt-3">
              <div className="flex items-start gap-2 pb-1.5 border-b border-dashed border-slate-200">
                <span className="text-[#1E9E6A] font-bold">✓</span>
                <span className="font-semibold">Guia principal com 50 páginas A4</span>
              </div>
              <div className="flex items-start gap-2 pb-1.5 border-b border-dashed border-slate-200">
                <span className="text-[#1E9E6A] font-bold">✓</span>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-start gap-2 text-slate-500 pt-0.5">
                <span className="text-red-500 font-bold">✕</span>
                <span>Sem os 4 bônus</span>
              </div>
            </div>

            {/* Preço do Básico */}
            <div className="mt-5 pt-4 border-t border-slate-200 text-center">
              <span className="text-[11px] uppercase font-bold text-slate-500">
                Pagamento único
              </span>
              <div className="text-3xl font-extrabold font-display text-[#10233A] my-1">
                {formatCurrencyBRL(pricing.basico.price)}
              </div>
              <span className="text-xs text-[#5E6E7E] block mb-3">
                Sem mensalidades ou renovações
              </span>

              <button
                type="button"
                onClick={handleBasicClick}
                className="btn-cta-secondary w-full py-3.5 px-4 text-sm font-extrabold"
              >
                QUERO APENAS O GUIA
              </button>
            </div>
          </div>
        </div>

        {/* Avaliações posicionadas logo debaixo do plano básico */}
        <TestimonialsSection />

      </div>

      <OrderBumpModal
        isOpen={isOrderBumpOpen}
        onClose={() => setIsOrderBumpOpen(false)}
        onAcceptUpgrade={handleAcceptUpgrade}
        onDeclineToBasic={handleDeclineToBasic}
      />

      <CheckoutNoticeModal
        isOpen={modalState.isOpen}
        planName={modalState.planName}
        planPrice={modalState.planPrice}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
      />
    </section>
  );
};
