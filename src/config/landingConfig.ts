/**
 * Configuração central da Landing Page do Guia Visual do MEI — Edição 2026.
 * Todos os preços, links de checkout, textos de entrega, garantias e caminhos
 * de imagens são editáveis neste arquivo único.
 */

export interface TestimonialItem {
  id: string;
  name: string;
  context: string;
  rating: number;
  comment: string;
  avatarUrl?: string;
}

export interface LandingConfig {
  product: {
    name: string;
    edition: string;
    guidePages: number;
    kitPages: number;
    bonusCount: number;
    format: string;
    subheadline: string;
  };
  pricing: {
    // Valores provisórios baseados na referência para fins de layout e prévia visual
    isProvisional: boolean;
    completo: {
      id: string;
      title: string;
      badge: string;
      price: number;
      checkoutUrl: string; // Se vazio, exibe modal explicativo
      installments?: string;
      features: string[];
    };
    basico: {
      id: string;
      title: string;
      badge: string;
      price: number;
      checkoutUrl: string; // Se vazio, exibe modal explicativo
      features: string[];
    };
    orderBump?: {
      id: string;
      title: string;
      price: number;
      originalPrice: number;
      checkoutUrl: string;
      savings: number;
      diffFromBasico: number;
    };
  };
  delivery: {
    channelText: string;
    immediateAccess: string;
    guaranteeDays: number;
    guaranteeText: string;
    supportEmail: string;
    supportSchedule: string;
  };
  vendor: {
    brandName: string;
    year: number;
    disclaimer: string;
    officialGuidance: string;
    sellerName: string; // Preencher antes do lançamento
    contactUrl?: string;
    termsUrl?: string;
    privacyUrl?: string;
  };
  images: {
    // Se o usuário fornecer imagens em /public/assets, basta preencher os caminhos aqui
    heroCover: string;
    kitMockup: string;
    samplePages: {
      das: string;
      pix: string;
      faturamento: string;
      declaracao: string;
    };
    bonusCovers: {
      calendario: string;
      receitas: string;
      conferencia: string;
      dicionario: string;
    };
  };
  testimonials: TestimonialItem[]; // Vazio por padrão: nenhuma avaliação inventada
}

export const landingConfig: LandingConfig = {
  product: {
    name: "Guia Visual do MEI",
    edition: "Edição 2026",
    guidePages: 50,
    kitPages: 71,
    bonusCount: 4,
    format: "PDF em alta resolução (A4)",
    subheadline: "Entenda as obrigações do seu MEI e aprenda a organizar guias, notas e declarações com um passo a passo visual e fácil de consultar."
  },
  pricing: {
    isProvisional: true, // Valores de prévia visual
    completo: {
      id: "plano-completo",
      title: "PACOTE COMPLETO",
      badge: "GUIA + 4 BÔNUS",
      price: 37.90,
      checkoutUrl: "https://pay.cakto.com.br/n5reynj_1238088",
      features: [
        "Guia principal com 50 páginas A4 estruturadas",
        "Nove procedimentos em tutoriais visuais ilustrados",
        "DAS, notas, receitas e declaração anual DASN-Simei",
        "Consultas, pendências e orientação sobre parcelamento",
        "Contribuições e requisitos previdenciários explicados",
        "Bônus 1: Calendário de obrigações 2026/2027 (5 páginas)",
        "Bônus 2: Registro mensal de receitas para preencher (4 páginas)",
        "Bônus 3: Conferência da situação do MEI (5 páginas)",
        "Bônus 4: Dicionário visual do MEI (7 páginas)",
        "Conjunto completo com 71 páginas em 5 arquivos PDF"
      ]
    },
    basico: {
      id: "plano-basico",
      title: "PLANO BÁSICO",
      badge: "APENAS O GUIA",
      price: 19.90,
      checkoutUrl: "https://pay.cakto.com.br/6t7mgvm",
      features: [
        "Guia principal com 50 páginas A4",
        "Acesso imediato",
        "Sem os 4 bônus"
      ]
    },
    orderBump: {
      id: "order-bump-completo",
      title: "PACOTE COMPLETO (UPGRADE ESPECIAL)",
      price: 24.90,
      originalPrice: 37.90,
      checkoutUrl: "https://pay.cakto.com.br/3aatg4w",
      savings: 13.00,
      diffFromBasico: 5.00
    }
  },
  delivery: {
    channelText: "Receba o acesso direto no seu e-mail cadastrado logo após a confirmação.",
    immediateAccess: "Acesso imediato para download e impressão",
    guaranteeDays: 7,
    guaranteeText: "Se dentro de 7 dias você avaliar que o material não ajudou na sua organização, solicite o reembolso integral pelo canal de suporte.",
    supportEmail: "suporte@guiavisualdomei.com.br", // Configurável
    supportSchedule: "Atendimento em dias úteis, de segunda a sexta-feira"
  },
  vendor: {
    brandName: "Guia Visual do MEI",
    year: 2026,
    disclaimer: "Material educativo independente. Não possui qualquer vínculo, patrocínio ou representação com órgãos públicos ou governamentais.",
    officialGuidance: "Para emissões oficiais, consulte sempre o Portal do Empreendedor e o Gov.br. Este guia organiza o entendimento e não substitui a consulta contábil para casos específicos.",
    sellerName: "Guia Visual do MEI Publicações Educativas",
    contactUrl: "#contato",
    termsUrl: "#termos",
    privacyUrl: "#privacidade"
  },
  images: {
    // Caminhos configuráveis; caso estejam vazios ou arquivos locais não existam, o app exibe mockups elegantes
    heroCover: "/assets/aistudio/capa_guia_visual_mei_2026.png",
    kitMockup: "/assets/aistudio/Kit_Guia_Visual_do_MEI_transparente_1f467d91.png",
    samplePages: {
      das: "/assets/aistudio/amostra_das_mensal.png",
      pix: "/assets/aistudio/amostra_receitas_pix.png",
      faturamento: "/assets/aistudio/amostra_faturamento.png",
      declaracao: "/assets/aistudio/amostra_declaracao_anual.png"
    },
    bonusCovers: {
      calendario: "/assets/aistudio/Calend_rio_de_obriga__es_do_MEI-1_d2be0b3d.png",
      receitas: "/assets/aistudio/Registro_mensal_de_receitas_do_MEI-2_a5d8246e.png",
      conferencia: "/assets/aistudio/Confer_ncia_da_situa__o_do_MEI-3_74de4ed4.png",
      dicionario: "/assets/aistudio/Dicion_rio_visual_do_MEI-4_3209dbf2.png"
    }
  },
  // Conforme instrução: componente é alimentado por array; se vazio, a seção fica oculta
  testimonials: []
};

/**
 * Retorna valor formatado em reais com Intl.NumberFormat
 */
export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}
