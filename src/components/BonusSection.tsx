import React, { useState } from 'react';
import { BonusPrancheta } from './VisualAssets';
import { PageLightbox, LightboxData } from './PageLightbox';
import { landingConfig } from '../config/landingConfig';

export const BonusSection: React.FC = () => {
  const [activeBonus, setActiveBonus] = useState<LightboxData | null>(null);

  const bonuses = [
    {
      bonusNumber: 1,
      title: "Calendário de obrigações 2026/2027",
      pagesText: "5 páginas A4",
      description: "Datas oficiais de vencimento do DAS, prazos da declaração anual e cronograma de lembretes para imprimir e fixar na sua bancada.",
      tag: "Vencimentos mensais e datas-chave",
      imageUrl: landingConfig.images.bonusCovers.calendario,
      bullets: [
        "Vencimento de cada mês do DAS (dia 20)",
        "Prazo limite para transmissão da Declaração DASN-Simei",
        "Lembretes preventivos de parcelamento e apuração",
        "Formato pronto para impressão ou consulta no celular"
      ]
    },
    {
      bonusNumber: 2,
      title: "Registro mensal de receitas",
      pagesText: "4 páginas A4",
      description: "Formulário prático em PDF para preenchimento manual das receitas brutas com e sem emissão de nota, facilitando a conciliação.",
      tag: "Modelo limpo para preenchimento manual",
      imageUrl: landingConfig.images.bonusCovers.receitas,
      bullets: [
        "Divisão entre comércio, indústria e serviços",
        "Campos para entradas com nota e sem nota fiscal",
        "Controle de recebimentos por Pix, cartão e dinheiro",
        "Organização que elimina erros na declaração anual"
      ]
    },
    {
      bonusNumber: 3,
      title: "Conferência da situação do MEI",
      pagesText: "5 páginas A4",
      description: "Lista de verificação passo a passo para consultar pendências fiscais, débitos no e-CAC e conferir a regularidade do CNPJ.",
      tag: "Checklist de regularidade preventiva",
      imageUrl: landingConfig.images.bonusCovers.conferencia,
      bullets: [
        "Roteiro de consulta da situação cadastral do CNPJ",
        "Como emitir a Certidão Negativa de Débitos (CND)",
        "Passo a passo no e-CAC da Receita Federal",
        "Verificação preventiva contra exclusão do regime Simei"
      ]
    },
    {
      bonusNumber: 4,
      title: "Dicionário visual do MEI",
      pagesText: "7 páginas A4",
      description: "Glossário ilustrado descomplicando termos como DASN, Simei, NFS-e, e-CAC, CCMEI, alíquotas e desenquadramento.",
      tag: "Termos burocráticos explicados com clareza",
      imageUrl: landingConfig.images.bonusCovers.dicionario,
      bullets: [
        "Significado prático de cada sigla da rotina do MEI",
        "Exemplos visuais de onde encontrar cada código",
        "Linguagem simples sem jargão contábil inacessível",
        "Guia de referência rápida para consultas cotidianas"
      ]
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#0F2D4A] text-white">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        {/* Pequeno rótulo acima */}
        <span className="text-xs sm:text-sm font-black text-[#FFC845] uppercase tracking-wider mb-2">
          MAIS FERRAMENTAS PARA SUA ORGANIZAÇÃO
        </span>

        {/* Título */}
        <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold font-display text-white leading-tight max-w-2xl text-balance">
          4 bônus no <span className="text-[#FFC845]">plano completo</span>
        </h2>

        {/* Subtítulo */}
        <p className="mt-3 text-base sm:text-lg text-white/80 max-w-xl font-normal leading-relaxed">
          Arquivos separados para consultar, imprimir e preencher.
        </p>

        {/* Grid 2x2 com molduras tipo prancheta */}
        <div className="w-full max-w-[760px] mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-3.5 gap-y-4.5 text-left">
          {bonuses.map((bonus) => (
            <BonusPrancheta
              key={bonus.bonusNumber}
              bonusNumber={bonus.bonusNumber}
              title={bonus.title}
              pagesText={bonus.pagesText}
              description={bonus.description}
              tag={bonus.tag}
              imageUrl={bonus.imageUrl}
              onClick={() => {
                setActiveBonus({
                  title: bonus.title,
                  badge: `BÔNUS ${bonus.bonusNumber}`,
                  pageNumber: bonus.pagesText,
                  description: bonus.description,
                  bullets: bonus.bullets,
                  imageUrl: bonus.imageUrl,
                  tips: "Arquivo digital exclusivo incluso no pacote completo."
                });
              }}
            />
          ))}
        </div>

        {/* Faixa amarela ao final */}
        <div className="mt-10 w-full max-w-[760px] bg-[#FFC845] text-[#0F2D4A] font-extrabold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-md flex items-center justify-center gap-2">
          <span>✨</span>
          <span>Os quatro bônus acompanham exclusivamente o plano completo</span>
        </div>

      </div>

      <PageLightbox
        isOpen={!!activeBonus}
        data={activeBonus}
        onClose={() => setActiveBonus(null)}
      />
    </section>
  );
};
