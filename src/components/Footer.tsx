import React from 'react';
import { landingConfig } from '../config/landingConfig';

export const Footer: React.FC = () => {
  const { vendor, delivery } = landingConfig;

  return (
    <footer className="bg-[#0A2036] text-[#A2B4C7] py-8 px-5 sm:px-6 border-t border-white/10 text-center text-[13px] leading-relaxed">
      <div className="max-w-[860px] mx-auto space-y-4">

        {/* Nome do produto e direitos autorais */}
        <div className="font-bold text-white text-sm sm:text-base font-display">
          {vendor.brandName} — {vendor.year}
        </div>

        <p className="text-white/80">
          © {vendor.year} {vendor.sellerName}. Todos os direitos reservados sobre o material autoral próprio.
        </p>

        {/* Aviso de independência institucional */}
        <p className="text-[#89A0B8] text-xs">
          <strong>Aviso legal:</strong> {vendor.disclaimer}
        </p>

        {/* Orientação oficial */}
        <p className="text-[#89A0B8] text-xs">
          {vendor.officialGuidance}
        </p>

        {/* Links de suporte, privacidade e termos */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-4 text-xs text-white/70 flex-wrap">
          <a
            href={`mailto:${delivery.supportEmail}`}
            className="hover:text-white transition-colors underline underline-offset-2"
          >
            Suporte ({delivery.supportEmail})
          </a>
          <span aria-hidden="true" className="opacity-40">•</span>
          <span className="text-white/60">
            Termos de Uso
          </span>
          <span aria-hidden="true" className="opacity-40">•</span>
          <span className="text-white/60">
            Política de Privacidade
          </span>
        </div>

      </div>
    </footer>
  );
};
