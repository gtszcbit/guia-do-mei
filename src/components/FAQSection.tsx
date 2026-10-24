import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Preciso entender de contabilidade para usar o material?",
      answer: "Não. O material foi feito exatamente para quem não entende. Tudo está em fichas visuais, com a linguagem do dia a dia e os passos tela a tela."
    },
    {
      question: "Serve para quem ainda não abriu o MEI?",
      answer: "Sim. As primeiras fichas ensinam quem pode ser MEI, quais atividades são permitidas e como abrir de graça no gov.br, passo a passo. Depois disso você já cai na rotina do dia a dia."
    },
    {
      question: "Os valores de 2026 já estão no material?",
      answer: "Sim. O DAS, o limite de faturamento e os demais valores estão atualizados para 2026, com a fonte indicada no rodapé de cada ficha."
    },
    {
      question: "Meu MEI está atrasado. Serve para mim?",
      answer: "Serve. O material mostra como ver o tamanho da dívida, pagar em guia única ou parcelar em até 60 vezes, na ordem certa."
    },
    {
      question: "Vou receber as atualizações dos próximos anos?",
      answer: "Sim. O valor do DAS muda todo ano com o salário mínimo, e o material é atualizado conforme essas mudanças."
    },
    {
      question: "Posso imprimir?",
      answer: "Pode. O material foi feito em formato A4 e fica legível tanto na tela do celular quanto impresso."
    },
    {
      question: "Isso substitui um contador?",
      answer: "Para o dia a dia do MEI — abrir, pagar o DAS, emitir nota e declarar — você não precisa de contador, e o material mostra como fazer sozinho. O material também é honesto em apontar as duas situações em que um profissional vale a pena: desenquadramento acima de 20% do limite e dívidas já inscritas na Dívida Ativa."
    },
    {
      question: "Como recebo o material?",
      answer: "Na hora, logo após a compra, no seu e-mail e no seu WhatsApp. São arquivos em PDF, prontos para ler no celular ou imprimir: o mapa completo e um arquivo para cada bônus."
    }
  ];

  // Permite abrir e fechar individualmente; inicialmente todos os acordeões abertos como na captura
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true
  });

  const toggleItem = (idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#F6F8FB]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        {/* Título Principal exatamente como na captura */}
        <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-extrabold font-display text-[#10233A] leading-tight max-w-2xl text-balance mb-10">
          Perguntas frequentes
        </h2>

        {/* Lista de acordeões até 800px */}
        <div className="w-full max-w-[800px] space-y-4 text-left">
          {faqItems.map((item, idx) => {
            const isOpen = !!openItems[idx];
            return (
              <div
                key={idx}
                className="bg-white rounded-[18px] border border-[#CBD5E1] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left font-bold text-[#10233A] text-sm sm:text-base focus:outline-none hover:bg-slate-50/60 transition-colors"
                >
                  <span className="leading-snug pr-2">{item.question}</span>
                  <span className="shrink-0 flex items-center justify-center text-[#13A3A0]">
                    {isOpen ? (
                      <span className="w-4 h-1 bg-[#13A3A0] rounded-full inline-block" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[3] text-[#13A3A0]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-0 text-xs sm:text-sm text-[#5E6E7E] leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
