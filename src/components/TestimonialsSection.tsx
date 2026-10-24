import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: "Carla S.",
      details: "34 anos • Salão de beleza • Goiânia/GO",
      comment: "“Eu pagava R$ 180 por mês pro contador e não sabia nem o que ele fazia. Li o material num sábado e no mês seguinte já emiti meu DAS sozinha. Economizei o ano inteiro com R$ 37.”",
      avatarBg: "bg-emerald-600",
      initials: "CS",
      gender: "female"
    },
    {
      name: "Rodrigo A.",
      details: "41 anos • Assistência técnica • Campinas/SP",
      comment: "“A parte do Pix no CPF me salvou. Eu recebia metade dos clientes na minha conta pessoal achando que não contava. Já arrumei tudo antes de dar problema.”",
      avatarBg: "bg-blue-700",
      initials: "RA",
      gender: "male"
    },
    {
      name: "Marta F.",
      details: "29 anos • Doces por encomenda • Recife/PE",
      comment: "“Meu MEI estava parado há dois anos, com um monte de DAS atrasado. Segui a ficha de regularizar na ordem e parcelei tudo. Nem precisei pagar ninguém.”",
      avatarBg: "bg-teal-700",
      initials: "MF",
      gender: "female"
    }
  ];

  return (
    <div className="w-full max-w-5xl mt-16 pt-12 border-t border-slate-200/80 text-center">
      {/* Título Principal */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-[#10233A]">
        O que dizem quem já usou
      </h3>

      {/* Faixa / Badge Verde de Prova Social */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E8F8F0] text-[#2E3E4E] text-xs sm:text-sm font-medium mt-4 mb-9 shadow-xs border border-[#1E9E6A]/20">
        <span className="text-[#1E9E6A] font-extrabold text-base sm:text-lg">+18.500</span>
        <span className="font-semibold text-slate-700">MEIs já organizaram o seu com o Guia Visual do MEI.</span>
      </div>

      {/* Grid com os 3 cards brancos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#E3E8EF] hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Cabeçalho do Card com Avatar e Identificação */}
              <div className="flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full ${review.avatarBg} text-white flex items-center justify-center font-bold text-sm ring-2 ring-[#1E9E6A] ring-offset-2 shrink-0 shadow-sm`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-extrabold text-[#10233A] text-base leading-tight font-display">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#5E6E7E] mt-0.5 leading-snug">
                    {review.details}
                  </p>
                </div>
              </div>

              {/* 5 Estrelas Douradas */}
              <div className="flex items-center gap-1 text-[#FFC845] my-3.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#FFC845]" />
                ))}
              </div>

              {/* Comentário */}
              <p className="text-xs sm:text-sm text-[#2E3E4E] leading-relaxed font-normal">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
