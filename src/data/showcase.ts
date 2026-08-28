/**
 * Dataset da operação-vitrine (PRD seção 7.1).
 * Um único grupo econômico fictício, história coerente em toda a LP.
 * Números ilustrativos, dados de demonstração. Trocar aqui muda em todos os frames.
 */

export const showcase = {
  competencia: '08/2026',

  // operação (grupo econômico exemplo)
  carteiraTotal: 14, // CNPJs do grupo (matriz, filiais e coligadas)
  contratosAtivos: '38 contratos ativos',
  impactoAlto: 5, // CNPJs com impacto alto na reforma (de 14)

  // tributário (CNPJ destaque)
  empresaDestaque: 'Vega Indústria Ltda.',
  creditosRecuperaveis: 'R$ 214.700', // créditos recuperáveis de períodos anteriores (60 meses)
  economiaAnualDestaque: 'R$ 63.960', // economia anual estimada no melhor cenário, um CNPJ
  buracoCaixaPico: 'R$ 137.000', // saída do imposto no split payment, mês de pico (2027)
  capitalGiro: 'R$ 118.000', // capital de giro extra sugerido no mês de pico

  // fornecedores
  fornecedoresTotal: 214,
  fornecedoresSemCredito: 7, // risco de glosa de crédito de IBS/CBS

  // recuperação de créditos (segundo agente)
  creditoEmRisco: 'R$ 103.950', // crédito de IBS/CBS em risco de glosa neste ciclo
  excedentesIdentificados: 'R$ 214.700', // créditos recuperáveis identificados no período
  recuperadoCiclo: 'R$ 18.400', // recuperado neste ciclo

  // chat / simulação
  ganhamRealMigracao: '5 CNPJs',
  ganhamRealValor: 'R$ 191 mil/ano somados',
} as const;

// Selos e disclaimers reutilizados nos frames
export const seloExemplo = 'Exemplo ilustrativo · dados de demonstração';
export const disclaimerTributario =
  'Simulação com base nos dados fornecidos. Não substitui parecer profissional.';
export const avisoFaseTestes =
  'Recurso em fase de testes. Valores finais das alíquotas e datas da reforma ainda podem sofrer mudanças.';

// CTA padrão (PRD seção 2)
export const CTA_PRIMARIO = 'Agende a demo com os dados da sua empresa';
export const CTA_ANCORA = '#agendar';

// WhatsApp (fallback / flutuante). Número da operação de Empresas.
export const WHATSAPP_NUM = '5551926343014';
export const WHATSAPP_MSG =
  'Olá, quero agendar a demo da Kontiva para a minha empresa.';
export const whatsappHref = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
