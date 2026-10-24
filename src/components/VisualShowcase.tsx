import React, { useState, useRef } from 'react';
import { BookCover, SamplePageMockup } from './VisualAssets';
import { PageLightbox, LightboxData } from './PageLightbox';
import { landingConfig } from '../config/landingConfig';

export const VisualShowcase: React.FC = () => {
  const [activePage, setActivePage] = useState<LightboxData | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const samplePagesData: Record<'das' | 'pix' | 'faturamento' | 'declaracao', LightboxData> = {
    das: {
      title: "Como emitir e conferir o DAS mensal",
      badge: "Página 12",
      pageNumber: "Capítulo 2: Rotina e Obrigações",
      description: "Um passo a passo direto para acessar o gerador oficial PGMEI, emitir a guia mensal com QR Code Pix e guardar os comprovantes para a declaração anual.",
      bullets: [
        "Acesso simplificado sem senhas burocráticas no portal oficial",
        "Como identificar o status 'Liquidado' vs 'A vencer'",
        "Diferença entre a guia do mês corrente e guias anteriores não pagas",
        "Dica prática de arquivamento para não perder o histórico"
      ],
      tips: "O pagamento do DAS vence todo dia 20. Se cair em final de semana ou feriado, prorroga-se para o primeiro dia útil seguinte.",
      imageUrl: landingConfig.images.samplePages.das
    },
    pix: {
      title: "Como separar vendas por Pix de outras entradas",
      badge: "Página 18",
      pageNumber: "Capítulo 3: Receitas e Meios de Pagamento",
      description: "Orientações visuais para quem recebe pagamentos por Pix, diferenciando receita da atividade comercial de movimentações pessoais ou transferências sem relação com vendas.",
      bullets: [
        "Quadro comparativo: o que entra no relatório de faturamento",
        "Como documentar transferências entre contas pessoais",
        "Organização de chaves Pix vinculadas ao CNPJ e CPF",
        "Modelo de conferência rápida de extrato bancário"
      ],
      tips: "Receber Pix na conta física não gera bitributação automática, mas exige organização prévia para que entradas pessoais não sejam confundidas com vendas do MEI.",
      imageUrl: landingConfig.images.samplePages.pix
    },
    faturamento: {
      title: "Termômetro e controle de faturamento acumulado",
      badge: "Página 24",
      pageNumber: "Capítulo 4: Faturamento e Limites",
      description: "Aprenda a acompanhar o acumulado das suas receitas ao longo dos meses e reconheça com antecedência situações que exigem transição ou apoio especializado.",
      bullets: [
        "Termômetro ilustrado de limites de faturamento",
        "Regra de cálculo proporcional para quem abriu o MEI no meio do ano",
        "O que fazer ao atingir a faixa de tolerância de até 20%",
        "Quando é o momento adequado para contatar um contador"
      ],
      tips: "Quem abre o MEI em julho, por exemplo, tem limite proporcional aos meses restantes do ano, e não o valor anual cheio.",
      imageUrl: landingConfig.images.samplePages.faturamento
    },
    declaracao: {
      title: "Roteiro da Declaração Anual (DASN-Simei)",
      badge: "Página 32",
      pageNumber: "Capítulo 5: Declaração Anual",
      description: "Tudo o que você precisa conferir antes de preencher a declaração anual, dividindo os valores entre comércio e serviços de forma prática.",
      bullets: [
        "Soma dos 12 relatórios mensais de receitas brutas",
        "Divisão entre atividades de venda e prestação de serviço",
        "Declaração de contratação de funcionário",
        "Guarda do recibo de transmissão anual"
      ],
      tips: "A declaração deve ser enviada mesmo que o MEI tenha faturado R$ 0,00 no ano anterior.",
      imageUrl: landingConfig.images.samplePages.declaracao
    }
  };

  const handleOpenPage = (key: 'das' | 'pix' | 'faturamento' | 'declaracao', e: React.MouseEvent | React.KeyboardEvent) => {
    triggerRef.current = e.currentTarget as HTMLElement;
    setActivePage(samplePagesData[key]);
  };

  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#F6F8FB] border-t border-[#E3E8EF]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        {/* Título com expressão em turquesa */}
        <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold font-display text-[#10233A] leading-tight max-w-2xl text-balance">
          Veja como a organização visual{' '}
          <span className="text-[#13A3A0]">facilita a consulta</span>
        </h2>

        {/* Subtítulo */}
        <p className="mt-3 text-base sm:text-lg text-[#5E6E7E] max-w-xl font-normal leading-relaxed">
          Páginas diretas para encontrar o assunto e acompanhar cada etapa.
        </p>

        {/* Montagem de 4 páginas reais em grade 2x2 com capa sobreposta central */}
        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            triggerRef.current = e.currentTarget;
            setActivePage({
              title: "Amostras Reais do Material (Grade 2x2)",
              badge: "Páginas do Guia",
              pageNumber: "Edição 2026",
              description: "Visualize a distribuição prática de um assunto por página, com esquemas didáticos, checklists de conferência e tutoriais passo a passo.",
              bullets: [
                "Quem pode ser MEI: requisitos e limites explicados",
                "Separação de CPF e CNPJ: proteção financeira e patrimonial",
                "A regra das 2 datas: organização mensal sem surpresas",
                "Declaração anual: passo a passo de preenchimento na tela"
              ],
              tips: "Todas as páginas seguem a mesma identidade visual clara para consulta rápida.",
              imageUrl: "/assets/aistudio/image_4b87711f.png"
            });
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              triggerRef.current = e.currentTarget;
              setActivePage({
                title: "Amostras Reais do Material (Grade 2x2)",
                badge: "Páginas do Guia",
                pageNumber: "Edição 2026",
                description: "Visualize a distribuição prática de um assunto por página, com esquemas didáticos, checklists de conferência e tutoriais passo a passo.",
                bullets: [
                  "Quem pode ser MEI: requisitos e limites explicados",
                  "Separação de CPF e CNPJ: proteção financeira e patrimonial",
                  "A regra das 2 datas: organização mensal sem surpresas",
                  "Declaração anual: passo a passo de preenchimento na tela"
                ],
                tips: "Todas as páginas seguem a mesma identidade visual clara para consulta rápida.",
                imageUrl: "/assets/aistudio/image_4b87711f.png"
              });
            }
          }}
          className="group relative mt-10 w-full max-w-[720px] p-2 sm:p-3 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#13A3A0] rounded-2xl"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-[#E3E8EF] p-2 sm:p-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <img
              src="/assets/aistudio/image_4b87711f.png"
              alt="Grade com amostras reais de páginas do Guia Visual do MEI 2026"
              className="w-full h-auto object-contain rounded-xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0F2D4A]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
              <span className="bg-[#0F2D4A] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                <span>🔍</span> Clique para ampliar em tela cheia
              </span>
            </div>
          </div>
        </div>

        {/* Dica de interação */}
        <p className="mt-5 text-xs sm:text-sm text-[#5E6E7E] flex items-center gap-1.5 justify-center">
          <span>👆</span>
          <span>Toque ou clique em qualquer folha da amostra para ampliar os detalhes.</span>
        </p>

      </div>

      {/* Lightbox Modal */}
      <PageLightbox
        isOpen={!!activePage}
        data={activePage}
        onClose={() => setActivePage(null)}
        triggerElementRef={triggerRef.current}
      />
    </section>
  );
};
