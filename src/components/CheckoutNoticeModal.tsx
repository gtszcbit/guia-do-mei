import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import { formatCurrencyBRL } from '../config/landingConfig';

interface CheckoutNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: number;
}

export const CheckoutNoticeModal: React.FC<CheckoutNoticeModalProps> = ({
  isOpen,
  onClose,
  planName,
  planPrice
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-notice-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2036]/75 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 relative text-left"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>

        <h3 id="checkout-notice-title" className="text-xl font-bold font-display text-[#10233A]">
          Link de pagamento ainda não configurado
        </h3>

        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Você clicou para adquirir o <strong>{planName}</strong> por{' '}
          <strong>{formatCurrencyBRL(planPrice)}</strong>.
        </p>

        <div className="mt-4 p-3 bg-[#F6F8FB] border border-[#E3E8EF] rounded-xl text-xs text-slate-700 space-y-1.5">
          <p className="font-semibold text-[#0F2D4A]">
            Para o proprietário do material:
          </p>
          <p>
            Configure o link da sua plataforma de pagamento (Hotmart, Kiwify, Eduzz, etc.) na propriedade <code>checkoutUrl</code> dentro do arquivo:
          </p>
          <p className="font-mono bg-slate-200/70 p-1.5 rounded text-[11px] text-slate-800 break-all">
            src/config/landingConfig.ts
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0F2D4A] hover:bg-[#1E4C78] text-white text-xs font-bold rounded-xl transition-colors font-display uppercase tracking-wider"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
