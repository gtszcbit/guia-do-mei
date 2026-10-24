import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export interface LightboxData {
  title: string;
  badge: string;
  pageNumber: string;
  description: string;
  bullets: string[];
  tips?: string;
  imageUrl?: string;
}

interface PageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  data: LightboxData | null;
  triggerElementRef?: HTMLElement | null;
}

export const PageLightbox: React.FC<PageLightboxProps> = ({
  isOpen,
  onClose,
  data,
  triggerElementRef
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      if (triggerElementRef) {
        triggerElementRef.focus();
      }
      return;
    }

    // Foco inicial no botão de fechar
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }

      // Trap focus
      if (e.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, triggerElementRef]);

  if (!isOpen || !data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A2036]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
      >
        {/* Cabeçalho do Lightbox */}
        <div className="bg-[#0F2D4A] text-white px-5 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#FFC845] text-[#0F2D4A] text-xs font-black px-2 py-0.5 rounded uppercase tracking-wider">
                {data.badge}
              </span>
              <span className="text-white/70 text-xs font-semibold">
                {data.pageNumber}
              </span>
            </div>
            <h3 id="lightbox-title" className="text-lg sm:text-xl font-bold font-display text-white mt-1">
              {data.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Fechar visualização"
            className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFC845]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Corpo com visualização detalhada da folha */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {data.imageUrl && (
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center p-2 shadow-inner">
              <img
                src={data.imageUrl}
                alt={data.title}
                className="max-h-[550px] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          )}

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {data.description}
          </p>

          <div className="bg-[#F6F8FB] border border-[#E3E8EF] rounded-xl p-4">
            <h4 className="text-xs font-bold text-[#0F2D4A] uppercase tracking-wider mb-2.5">
              Conteúdo detalhado desta seção no Guia:
            </h4>
            <ul className="space-y-2">
              {data.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#1E9E6A] font-extrabold mt-0.5">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {data.tips && (
            <div className="bg-[#FFF4D6] border border-[#FFC845]/60 rounded-xl p-3.5 text-xs text-amber-950 font-medium">
              💡 <strong>Orientação prática:</strong> {data.tips}
            </div>
          )}

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Formato oficial A4 em PDF de alta qualidade</span>
            <span className="font-semibold text-[#13A3A0]">Pronto para consulta digital ou impressão</span>
          </div>
        </div>

        {/* Rodapé da janela */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0F2D4A] hover:bg-[#1E4C78] text-white text-xs font-bold rounded-lg transition-colors"
          >
            Fechar Janela (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
