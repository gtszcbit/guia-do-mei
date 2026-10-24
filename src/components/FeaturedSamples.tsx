import React, { useState } from 'react';
import { ArrowRight, Eye, Calendar, CreditCard, TrendingUp } from 'lucide-react';
import { PageLightbox, LightboxData } from './PageLightbox';
import { landingConfig } from '../config/landingConfig';

export const FeaturedSamples: React.FC = () => {
  const [activeModal, setActiveModal] = useState<LightboxData | null>(null);

  const samples = [
    {
      id: "das",
      tag: "ORGANIZAÇÃO MENSAL",
      tagColor: "bg-[#13A3A0]/15 text-[#13A3A0] border-[#13A3A0]/30",
      title: "DAS mensal: como consultar a guia e organizar o pagamento",
      caption: "Tela ilustrada mostrando a navegação correta no portal oficial do MEI, o comprovante em PDF e o arquivamento seguro.",
      icon: Calendar,
      lightbox: {
        title: "DAS mensal: consulta e liquidação",
        badge: "Página 14",
        pageNumber: "Capítulo 2: Rotina e Obrigações",
        description: "Aprenda a emitir a guia mensal do DAS no portal PGMEI, efetuar o pagamento via QR Code Pix ou código de barras e organizar o comprovante na pasta do ano vigente.",
        bullets: [
          "Identificação do período de apuração e vencimento no dia 20",
          "Passo a passo com telas do portal oficial Gov.br",
          "Diferenciação visual de guias pagas e pendentes",
          "Como evitar pagar boletos fraudulentos enviados por e-mail"
        ],
        tips: "O DAS engloba INSS e tributos devidos pela atividade (ICMS e/ou ISS).",
        imageUrl: landingConfig.images.samplePages.das
      }
    },
    {
      id: "pix",
      tag: "RECEITAS E CONTROLE",
      tagColor: "bg-amber-100 text-amber-800 border-amber-300",
      title: "Receitas e Pix: separar receita da atividade de outras entradas",
      caption: "Diagrama visual de fluxo bancário que ensina como não misturar transferências pessoais com as vendas da sua empresa.",
      icon: CreditCard,
      lightbox: {
        title: "Receitas e Pix: conciliação visual",
        badge: "Página 19",
        pageNumber: "Capítulo 3: Receitas e Meios de Pagamento",
        description: "Estrutura visual para categorizar as entradas bancárias mensais, garantindo que empréstimos, divisões de despesas pessoais ou depósitos próprios não sejam somados indevidamente no faturamento do MEI.",
        bullets: [
          "Diagrama de fluxo: vendas da empresa vs transferências de CPF",
          "Como manter o extrato bancário documentado",
          "Relatório de apoio mensal para preenchimento simples",
          "Prevenção contra incongruências na declaração anual"
        ],
        tips: "A separação de entradas é a melhor prática para ter tranquilidade em qualquer eventual conferência.",
        imageUrl: landingConfig.images.samplePages.pix
      }
    },
    {
      id: "faturamento",
      tag: "ACOMPANHAMENTO ANUAL",
      tagColor: "bg-purple-100 text-purple-900 border-purple-300",
      title: "Faturamento: acompanhar o acumulado e reconhecer situações que exigem atenção",
      caption: "Régua ilustrada de controle acumulado para você monitorar a proximidade do teto e planejar os próximos passos com calma.",
      icon: TrendingUp,
      lightbox: {
        title: "Acompanhamento do teto de faturamento",
        badge: "Página 25",
        pageNumber: "Capítulo 4: Faturamento e Limites",
        description: "Acompanhe visualmente a evolução da receita bruta mês a mês. Saiba identificar a faixa de tolerância permitida e os prazos oficiais de transição para Microempresa caso necessário.",
        bullets: [
          "Régua gráfica de acompanhamento das receitas do ano",
          "Cálculo do limite proporcional nos primeiros meses de abertura",
          "Orientações objetivas de desenquadramento sem pânico",
          "Momento exato de procurar a orientação de um contador"
        ],
        tips: "Nunca aguarde dezembro para somar as notas: o acompanhamento mensal evita desenquadramentos retroativos surpresa.",
        imageUrl: landingConfig.images.samplePages.faturamento
      }
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#F6F8FB]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold font-display text-[#10233A] leading-tight max-w-2xl text-balance">
          Conheça algumas páginas do guia
        </h2>

        <p className="mt-3 text-base sm:text-lg text-[#5E6E7E] max-w-xl font-normal leading-relaxed">
          Veja exemplos do formato que você vai consultar.
        </p>

        {/* Três cards grandes empilhados até 720px */}
        <div className="w-full max-w-[720px] mt-12 space-y-6 text-left">
          {samples.map((sample, idx) => {
            const Icon = sample.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E3E8EF] shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 flex flex-col"
              >
                {/* Rótulo colorido centralizado */}
                <div className="flex justify-center mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${sample.tagColor}`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{sample.tag}</span>
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-lg sm:text-xl font-extrabold font-display text-[#10233A] text-center leading-snug">
                  {sample.title}
                </h3>

                {/* Prévia da Amostra / Card visual clicável */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveModal(sample.lightbox)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveModal(sample.lightbox);
                    }
                  }}
                  className="group cursor-pointer my-4 relative rounded-xl border border-slate-200 bg-[#F6F8FB] p-5 hover:border-[#13A3A0] transition-colors overflow-hidden"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3 border-b border-slate-200 pb-2">
                    <span className="font-bold text-[#0F2D4A]">{sample.lightbox.badge}</span>
                    <span className="flex items-center gap-1 text-[#13A3A0] font-bold group-hover:underline">
                      <Eye className="w-3.5 h-3.5" />
                      Visualizar página completa
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-700">
                    <p className="font-semibold text-slate-900 leading-relaxed">
                      {sample.lightbox.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2">
                      {sample.lightbox.bullets.slice(0, 2).map((b, i) => (
                        <div key={i} className="flex items-center gap-1 text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-200">
                          <span className="text-[#1E9E6A] font-bold">✓</span>
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="inline-block bg-[#0F2D4A] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm group-hover:bg-[#1E4C78] transition-colors">
                      Clique para ver em tela cheia
                    </span>
                  </div>
                </div>

                {/* Legenda curta */}
                <p className="text-xs sm:text-sm text-[#5E6E7E] text-center leading-relaxed">
                  {sample.caption}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA verde para #oferta */}
        <div className="mt-12 w-full flex justify-center">
          <a
            href="#oferta"
            className="btn-cta-green w-full max-w-[520px] py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg group"
          >
            <span>QUERO CONHECER OS PLANOS</span>
            <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      <PageLightbox
        isOpen={!!activeModal}
        data={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
};
