import React from 'react';
import { Calendar, Layers, FileSpreadsheet, TrendingUp, ArrowRight } from 'lucide-react';

export const FourPillars: React.FC = () => {
  const pillars = [
    {
      title: "ROTINA E OBRIGAÇÕES",
      colorBorder: "bg-[#13A3A0]",
      colorText: "text-[#13A3A0]",
      icon: Calendar,
      description: "Organize tarefas mensais, anuais e eventuais com cronogramas e checklists para manter a empresa sempre regularizada sem surpresas."
    },
    {
      title: "PASSO A PASSO VISUAL",
      colorBorder: "bg-[#1E9E6A]",
      colorText: "text-[#1E9E6A]",
      icon: Layers,
      description: "Nove procedimentos completos, da abertura às consultas previdenciárias, distribuídos nas 50 páginas com esquemas visuais fáceis de acompanhar."
    },
    {
      title: "NOTAS E RECEITAS",
      colorBorder: "bg-[#7C3AED]",
      colorText: "text-[#7C3AED]",
      icon: FileSpreadsheet,
      description: "Entenda os documentos fiscais de serviços e produtos, aprenda quando a emissão é obrigatória e como registrar as vendas recebidas por diferentes meios."
    },
    {
      title: "FATURAMENTO E PENDÊNCIAS",
      colorBorder: "bg-[#EA580C]",
      colorText: "text-[#EA580C]",
      icon: TrendingUp,
      description: "Acompanhe suas receitas acumuladas, consulte guias em atraso com segurança e identifique com clareza o momento de buscar orientação contábil especializada."
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6 bg-white border-y border-[#E3E8EF]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

        <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold font-display text-[#10233A] leading-tight max-w-2xl text-balance">
          O que você encontra no Guia Visual do MEI
        </h2>

        {/* 4 cards empilhados em coluna única de até 660px */}
        <div className="w-full max-w-[660px] mt-10 space-y-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl border border-[#E3E8EF] shadow-sm hover:shadow-md transition-shadow overflow-hidden text-left p-6 sm:p-7"
              >
                {/* Borda superior colorida de ~6px */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${pillar.colorBorder}`} />

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#F6F8FB] border border-[#E3E8EF] flex items-center justify-center shrink-0 shadow-inner">
                    <Icon className={`w-6 h-6 ${pillar.colorText}`} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg font-display text-[#10233A] tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base text-[#5E6E7E] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Repetição do CTA */}
        <div className="mt-10 w-full flex justify-center">
          <a
            href="#oferta"
            className="btn-cta-green w-full max-w-[520px] py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg group"
          >
            <span>QUERO CONHECER OS PLANOS</span>
            <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
