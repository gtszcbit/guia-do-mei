import React, { useState } from 'react';

interface BookCoverProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  imageUrl?: string;
  alt?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({
  className = '',
  size = 'md',
  imageUrl,
  alt = 'Capa do Guia Visual do MEI 2026'
}) => {
  const [imageError, setImageError] = useState(false);

  // Se tiver imagem e não deu erro, tenta carregar; caso contrário exibe o mockup editorial
  if (imageUrl && !imageError) {
    return (
      <div className={`relative aspect-[1/1.414] rounded-xl overflow-hidden shadow-2xl border border-white/20 select-none ${className}`}>
        <img
          src={imageUrl}
          alt={alt}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    );
  }

  const sizeClasses = {
    sm: 'w-[140px] text-[9px]',
    md: 'w-[220px] text-[11px]',
    lg: 'w-[280px] text-[13px]'
  };

  return (
    <div
      className={`relative aspect-[1/1.414] rounded-xl overflow-hidden shadow-2xl border border-[#224A73] bg-[#0B2238] select-none flex flex-col justify-between p-4 text-white ${sizeClasses[size]} ${className}`}
      style={{
        boxShadow: '0 20px 35px -10px rgba(10, 32, 54, 0.7), inset 5px 0 12px rgba(0,0,0,0.45)'
      }}
    >
      {/* Lombada sutil à esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />

      {/* Topo da Capa */}
      <div className="relative z-10">
        <div className="inline-block bg-[#FFC845] text-[#0F2D4A] font-extrabold px-2 py-0.5 rounded text-[0.7em] tracking-wider uppercase">
          Edição 2026
        </div>
        <p className="text-white/70 text-[0.75em] mt-1.5 font-medium tracking-wide">
          MATERIAL PRÁTICO EM PDF
        </p>
      </div>

      {/* Título Central */}
      <div className="relative z-10 my-auto py-2">
        <div className="w-8 h-1 bg-[#13A3A0] mb-2 rounded-full" />
        <h3 className="font-extrabold text-[1.45em] leading-[1.1] tracking-tight font-display text-white">
          GUIA <span className="text-[#FFC845] relative inline-block">
            VISUAL
            <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-[#FFC845]" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
          <br />DO MEI
        </h3>
        <p className="text-white/80 text-[0.75em] mt-2 font-medium leading-tight">
          Passo a passo visual para entender e organizar sua rotina
        </p>
      </div>

      {/* Rodapé da Capa */}
      <div className="relative z-10 pt-2 border-t border-white/15">
        <div className="flex items-center justify-between text-[0.7em] text-white/90 font-bold">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E9E6A]"></span>
            50 PÁGINAS A4
          </span>
          <span className="text-[#FFC845]">9 TUTORIAIS</span>
        </div>
      </div>
    </div>
  );
};

interface SamplePageProps {
  id: 'das' | 'pix' | 'faturamento' | 'declaracao';
  title: string;
  badge: string;
  caption: string;
  pageNumber: string;
  onClick?: () => void;
  imageUrl?: string;
}

export const SamplePageMockup: React.FC<SamplePageProps> = ({
  id,
  title,
  badge,
  caption,
  pageNumber,
  onClick,
  imageUrl
}) => {
  const [imageError, setImageError] = useState(false);

  if (imageUrl && !imageError) {
    return (
      <div
        onClick={onClick}
        className="group cursor-pointer relative aspect-[1/1.414] bg-white rounded-xl overflow-hidden shadow-md border border-[#E3E8EF] hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <img
          src={imageUrl}
          alt={title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0F2D4A]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-[#0F2D4A] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
            Clique para ampliar
          </span>
        </div>
      </div>
    );
  }

  // Visual editorial interior vector page
  const renderContent = () => {
    switch (id) {
      case 'das':
        return (
          <div className="flex-1 flex flex-col justify-between py-1 text-slate-700">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between border-b pb-1 border-slate-200">
                <span className="text-[10px] font-bold text-[#0F2D4A]">Passo a Passo: Emissão do DAS</span>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 rounded">Vencimento Dia 20</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-1.5 text-[8.5px] leading-relaxed">
                <strong className="text-slate-900 block">1. Acessar o PGMEI oficial</strong>
                Preencher CNPJ e selecionar o ano-calendário vigente.
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-1.5 text-[8.5px] leading-relaxed">
                <strong className="text-slate-900 block">2. Conferir os meses apurados</strong>
                Diferença entre guias a vencer e pendências anteriores.
              </div>
              <div className="grid grid-cols-2 gap-1 mt-1">
                <div className="border border-emerald-300 bg-emerald-50/60 rounded p-1 text-[8px] text-emerald-950 font-semibold">
                  ✓ Pagamento via Pix (QR Code direto)
                </div>
                <div className="border border-blue-200 bg-blue-50/60 rounded p-1 text-[8px] text-blue-950 font-semibold">
                  ✓ Salvar comprovante em pasta anual
                </div>
              </div>
            </div>
            <div className="mt-2 bg-[#FFF4D6] border border-[#FFC845]/50 rounded p-1.5 text-[8px] text-amber-900 font-medium">
              💡 Dica de organização: Arquive o PDF da guia junto com o comprovante de liquidação bancária.
            </div>
          </div>
        );
      case 'pix':
        return (
          <div className="flex-1 flex flex-col justify-between py-1 text-slate-700">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between border-b pb-1 border-slate-200">
                <span className="text-[10px] font-bold text-[#0F2D4A]">Separação de Entradas por Pix</span>
                <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 rounded">Organização</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[8.5px]">
                <div className="bg-emerald-50 border border-emerald-200 rounded p-1.5">
                  <span className="font-bold text-emerald-900 block mb-0.5">Receita da Atividade:</span>
                  Venda de produtos, serviços prestados no MEI, pagamentos de clientes.
                </div>
                <div className="bg-slate-100 border border-slate-200 rounded p-1.5">
                  <span className="font-bold text-slate-800 block mb-0.5">Outras Entradas:</span>
                  Reembolsos, transferências entre contas próprias, presentes pessoais.
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-1.5 text-[8px] space-y-1">
                <div className="flex justify-between border-b border-slate-100 pb-0.5">
                  <span>Venda via chave Pix MEI:</span>
                  <span className="font-bold text-emerald-700">Soma na receita bruta</span>
                </div>
                <div className="flex justify-between">
                  <span>Transferência familiar:</span>
                  <span className="font-bold text-slate-500">Não é receita do MEI</span>
                </div>
              </div>
            </div>
            <div className="mt-2 bg-blue-50 border border-blue-200 rounded p-1.5 text-[8px] text-blue-900 font-medium">
              📌 Mantenha o extrato mensal conferido com os recibos ou notas emitidas.
            </div>
          </div>
        );
      case 'faturamento':
        return (
          <div className="flex-1 flex flex-col justify-between py-1 text-slate-700">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between border-b pb-1 border-slate-200">
                <span className="text-[10px] font-bold text-[#0F2D4A]">Termômetro de Faturamento</span>
                <span className="text-[9px] bg-purple-100 text-purple-900 font-bold px-1.5 rounded">Limite Anual</span>
              </div>
              <div className="p-1.5 bg-slate-50 border border-slate-200 rounded text-[8.5px]">
                <div className="flex justify-between font-bold mb-1">
                  <span>Acompanhamento Acumulado</span>
                  <span className="text-emerald-700">Dentro da faixa</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[65%]" />
                </div>
                <div className="flex justify-between text-[7.5px] text-slate-500 mt-1">
                  <span>Jan</span>
                  <span>Jun (Atual)</span>
                  <span>Dez (Teto)</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 text-[8px]">
                <div className="border border-slate-200 rounded p-1 bg-white">
                  <span className="text-slate-500 block">Ano de Abertura:</span>
                  <span className="font-bold text-slate-800">Cálculo proporcional</span>
                </div>
                <div className="border border-slate-200 rounded p-1 bg-white">
                  <span className="text-slate-500 block">Excesso até 20%:</span>
                  <span className="font-bold text-amber-700">Transição orientada</span>
                </div>
              </div>
            </div>
            <div className="mt-2 bg-emerald-50 border border-emerald-200 rounded p-1.5 text-[8px] text-emerald-900 font-medium">
              ✓ Registre todo mês antes de fazer a declaração anual do Simei.
            </div>
          </div>
        );
      case 'declaracao':
      default:
        return (
          <div className="flex-1 flex flex-col justify-between py-1 text-slate-700">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between border-b pb-1 border-slate-200">
                <span className="text-[10px] font-bold text-[#0F2D4A]">Declaração Anual (DASN-Simei)</span>
                <span className="text-[9px] bg-blue-100 text-blue-900 font-bold px-1.5 rounded">Roteiro Visual</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-1.5 text-[8.5px] leading-relaxed">
                <strong className="text-slate-900 block">Passo 1: Somar receitas de Comércio</strong>
                Vendas de mercadorias com ou sem emissão de NF.
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-1.5 text-[8.5px] leading-relaxed">
                <strong className="text-slate-900 block">Passo 2: Somar receitas de Serviços</strong>
                Prestação de serviços apurada no ano-calendário.
              </div>
              <div className="border border-slate-200 rounded p-1.5 text-[8px] bg-white flex justify-between items-center">
                <span>Informar se teve empregado contratado</span>
                <span className="font-bold text-slate-800">Sim / Não</span>
              </div>
            </div>
            <div className="mt-2 bg-[#FFF4D6] border border-[#FFC845]/50 rounded p-1.5 text-[8px] text-amber-900 font-medium">
              💡 Transmita dentro do prazo regulamentar para evitar multa por atraso.
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="group text-left cursor-pointer relative aspect-[1/1.414] bg-white rounded-xl overflow-hidden shadow-md border border-[#E3E8EF] hover:shadow-xl transition-all hover:-translate-y-1 p-3 flex flex-col justify-between select-none focus:outline-none focus:ring-2 focus:ring-[#13A3A0]"
    >
      {/* Top Header of Page */}
      <div>
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 text-[8px] text-slate-500 font-semibold tracking-wider">
          <span className="text-[#0F2D4A] font-bold">{badge}</span>
          <span>{pageNumber}</span>
        </div>
        <h4 className="text-[12px] font-extrabold text-[#10233A] font-display mt-1 leading-tight">
          {title}
        </h4>
      </div>

      {/* Main vector representation */}
      {renderContent()}

      {/* Bottom badge */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[7.5px] text-slate-500">
        <span className="truncate">{caption}</span>
        <span className="text-[#13A3A0] font-bold group-hover:underline shrink-0">
          Ampliar 🔍
        </span>
      </div>
    </div>
  );
};

interface BonusPranchetaProps {
  bonusNumber: number;
  title: string;
  pagesText: string;
  description: string;
  tag: string;
  imageUrl?: string;
  onClick?: () => void;
}

export const BonusPrancheta: React.FC<BonusPranchetaProps> = ({
  bonusNumber,
  title,
  pagesText,
  description,
  tag,
  imageUrl,
  onClick
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:bg-white/15 transition-all text-white ${
        onClick ? 'cursor-pointer hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-[#FFC845]' : ''
      }`}
    >
      {/* Top Capsule */}
      <div className="flex items-center justify-between mb-3">
        <span className="bg-[#FFC845] text-[#0F2D4A] font-extrabold text-xs px-2.5 py-0.5 rounded-full font-display uppercase tracking-wider">
          BÔNUS {bonusNumber}
        </span>
        <span className="text-white/80 text-xs font-semibold">
          {pagesText}
        </span>
      </div>

      {/* Moldura tipo Prancheta em CSS */}
      <div className="relative my-4 mx-auto w-full max-w-[230px] aspect-[1/1.414] bg-[#E8EDF2] rounded-xl shadow-xl border-2 border-[#CBD5E1] p-1.5 flex flex-col items-center justify-between text-slate-800 rotate-1 group-hover:rotate-0 transition-all duration-200">
        {/* Clipe metálico superior */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 rounded-t-md shadow-md border border-slate-600 flex items-center justify-center z-10">
          <div className="w-7 h-1.5 bg-slate-700/60 rounded-full" />
        </div>

        {/* Conteúdo da folha na prancheta */}
        {imageUrl && !imageError ? (
          <div className="w-full h-full rounded-lg overflow-hidden bg-white shadow-inner flex items-center justify-center">
            <img
              src={imageUrl}
              alt={title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-white rounded-lg p-3 flex flex-col justify-between shadow-sm border border-slate-200">
            <div>
              <div className="text-[10px] font-bold text-[#0F2D4A] border-b pb-1 border-slate-200 mb-1.5">
                {title}
              </div>
              <div className="space-y-1.5 text-[8px] text-slate-600">
                <div className="h-2 bg-slate-200 rounded w-4/5" />
                <div className="h-2 bg-slate-200 rounded w-full" />
                <div className="h-2 bg-slate-200 rounded w-2/3" />
                <div className="p-1.5 bg-[#F6F8FB] border border-slate-200 rounded mt-2 text-[7.5px] text-slate-700 font-medium">
                  {tag}
                </div>
              </div>
            </div>
            <div className="text-[8px] text-slate-400 text-center font-bold">
              PDF PARA IMPRIMIR E PREENCHER
            </div>
          </div>
        )}
      </div>

      {/* Título e Texto explicativo */}
      <div className="mt-2 text-center">
        <h4 className="font-extrabold text-base text-white font-display leading-snug">
          {title}
        </h4>
        <p className="text-white/80 text-xs mt-1 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Cápsula de inclusão */}
      <div className="mt-3 text-center">
        <span className="inline-block bg-[#13A3A0]/30 border border-[#13A3A0]/60 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
          Incluso no plano completo
        </span>
      </div>
    </div>
  );
};
