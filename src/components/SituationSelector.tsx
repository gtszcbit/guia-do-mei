import React, { useState } from 'react';
import {
  FileCheck,
  CalendarCheck,
  Receipt,
  FileText,
  CreditCard,
  AlertTriangle,
  TrendingUp,
  HeartPulse,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface SituationOption {
  id: number;
  question: string;
  icon: React.ElementType;
  solutionTitle: string;
  pages: string;
  explanation: string;
}

export const SituationSelector: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(1);

  const situations: SituationOption[] = [
    {
      id: 1,
      question: "Quero abrir meu MEI",
      icon: FileCheck,
      solutionTitle: "Comece pela formalização",
      pages: "Páginas 4–10 do Guia Principal",
      explanation: "Veja os pré-requisitos antes de abrir, lista de atividades permitidas, documentos necessários e como emitir seu CCMEI sem pagar taxas indevidas a intermediários."
    },
    {
      id: 2,
      question: "Não sei quais são minhas obrigações",
      icon: CalendarCheck,
      solutionTitle: "Entenda a rotina",
      pages: "Páginas 11–16 do Guia Principal",
      explanation: "Conheça o calendário das obrigações mensais (DAS) e anuais (Declaração DASN), prazos oficiais e quais comprovantes devem ser guardados."
    },
    {
      id: 3,
      question: "Quero organizar receitas e comprovantes",
      icon: Receipt,
      solutionTitle: "Organize os registros",
      pages: "Páginas 17–22 do Guia Principal",
      explanation: "Aprenda o método visual de arquivamento dos comprovantes de pagamento e formulário de receitas para chegar ao fim do ano com tudo conciliado."
    },
    {
      id: 4,
      question: "Preciso emitir uma nota",
      icon: FileText,
      solutionTitle: "Veja o tipo de documento fiscal",
      pages: "Páginas 26–30 do Guia Principal",
      explanation: "Diferença prática entre Notas de Serviço (NFS-e nacional) e Notas de Comércio/Venda de Mercadorias (NF-e/NFC-e), entendendo quando a emissão é obrigatória."
    },
    {
      id: 5,
      question: "Recebo vendas por Pix na conta pessoal",
      icon: CreditCard,
      solutionTitle: "Separe receitas de outras entradas",
      pages: "Páginas 17–20 do Guia Principal",
      explanation: "Como distinguir receitas geradas pelas vendas do seu negócio daquelas entradas pessoais (empréstimos, transferências familiares) no seu controle financeiro."
    },
    {
      id: 6,
      question: "Tenho guias atrasadas ou pendências",
      icon: AlertTriangle,
      solutionTitle: "Consulte antes de decidir",
      pages: "Páginas 36–42 do Guia Principal",
      explanation: "Passo a passo visual para consultar o extrato no PGMEI e no e-CAC, identificar débitos na Receita Federal e entender os caminhos de parcelamento ordinário."
    },
    {
      id: 7,
      question: "Preciso acompanhar o faturamento",
      icon: TrendingUp,
      solutionTitle: "Acompanhe a receita acumulada",
      pages: "Páginas 21–25 do Guia Principal",
      explanation: "Entenda como preencher o registro mensal, aplicar o cálculo do teto proporcional caso tenha aberto no meio do ano e saber o que fazer em caso de excesso."
    },
    {
      id: 8,
      question: "Quero entender o INSS",
      icon: HeartPulse,
      solutionTitle: "Confira contribuições e requisitos",
      pages: "Páginas 44–47 do Guia Principal",
      explanation: "Como a contribuição previdenciária de 5% inclusa no DAS funciona para aposentadoria por idade, carência mínima e quando vale a pena complementar."
    }
  ];

  const currentSelection = situations.find((s) => s.id === selectedId) || situations[0];

  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6 bg-white border-y border-[#E3E8EF]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold font-display text-[#10233A] leading-tight max-w-2xl text-balance">
          Por onde você quer começar?
        </h2>

        <p className="mt-3 text-base sm:text-lg text-[#5E6E7E] max-w-xl font-normal leading-relaxed">
          Escolha a situação que mais combina com a sua rotina.
        </p>

        {/* Caixa Seletora até 560px */}
        <div className="w-full max-w-[560px] mt-10 bg-white rounded-[22px] border border-[#E3E8EF] p-4 sm:p-5 shadow-sm text-left">
          
          {/* 8 botões verticais */}
          <div className="space-y-2">
            {situations.map((item) => {
              const Icon = item.icon;
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  aria-pressed={isSelected}
                  className={`w-full flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-[#0F2D4A] bg-[#0F2D4A]/5 shadow-sm ring-1 ring-[#0F2D4A]'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#0F2D4A] text-white'
                        : 'bg-slate-100 text-[#0F2D4A]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-sm sm:text-base font-bold ${
                    isSelected ? 'text-[#0F2D4A]' : 'text-slate-700'
                  }`}>
                    {item.question}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Resposta Dinâmica com aria-live */}
          <div
            aria-live="polite"
            className="mt-6 pt-5 border-t border-slate-200 bg-[#F6F8FB] rounded-xl p-4 sm:p-5 border"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-[#13A3A0] uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>{currentSelection.pages}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold font-display text-[#10233A] mt-1">
              {currentSelection.solutionTitle}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#2E3E4E] leading-relaxed">
              {currentSelection.explanation}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2">
              <span className="text-[11px] text-slate-500">
                Instruções passo a passo no guia em PDF
              </span>
              <a
                href="#oferta"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E9E6A] hover:text-[#147A50] transition-colors"
              >
                <span>Ver este conteúdo nos planos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Nota de rodapé da seção */}
        <p className="mt-4 text-xs text-[#5E6E7E] max-w-md">
          O seletor orienta a ordem de leitura do material; ele não realiza diagnóstico fiscal ou acesso a dados tributários.
        </p>

      </div>
    </section>
  );
};
