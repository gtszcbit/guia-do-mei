import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <aside aria-label="Aviso editorial" className="w-full bg-[#E04F43] text-white text-center py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide shadow-sm relative z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span>Guia em PDF</span>
        <span aria-hidden="true" className="opacity-60">•</span>
        <span>Edição 2026</span>
        <span aria-hidden="true" className="opacity-60">•</span>
        <span>Leia no celular ou imprima</span>
      </div>
    </aside>
  );
};
