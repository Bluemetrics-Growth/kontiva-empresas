/**
 * Fonte unica dos numeros da pagina (PRD secao 6.9).
 *
 * Regra: nenhum numero da secao 5 do PRD pode ficar hardcoded no JSX. Todo
 * componente que renderiza um fato tambem renderiza a fonte (em <small> ou
 * tooltip). Cada item tem valor, rotulo, fonte, data da fonte, ressalva e a
 * data de revalidacao (o bloco de pressao e a aliquota tem validade curta).
 *
 * Nenhum numero fora da secao 5 do PRD entra aqui.
 */

export interface Fact {
  value: string;
  label: string;
  source: string;
  sourceDate?: string; // ISO
  caveat?: string;
  reviewBy?: string; // ISO
}

export const facts = {
  // --- Calendario (PRD 5.1) ---
  cbsPlena: {
    value: "01/01/2027",
    label: "CBS em regime pleno, PIS e Cofins extintos",
    source: "LC 214/2025, arts. 126 e 127 do ADCT",
    sourceDate: "2025-01-16",
  },
  ibsAvanco: {
    value: "01/01/2029",
    label: "IBS avanca sobre ICMS e ISS, transicao dos dois sistemas",
    source: "EC 132/2023",
    sourceDate: "2023-12-20",
  },

  // --- Bloco de pressao (PRD 5.7 e 6.3) ---
  maturidadeAlta: {
    value: "9%",
    label: "das empresas estão no nível mais alto de maturidade fiscal para a reforma",
    source: "Levantamento apresentado em fórum de gestão fiscal, ago/2026",
    sourceDate: "2026-08-01",
    reviewBy: "2026-11-30",
  },
  naoMapearam: {
    value: "62%",
    label: "ainda não mapearam os efeitos da reforma no próprio negócio",
    source: "Panorama do Contas a Pagar 2026, Qive com Opinion Box",
    sourceDate: "2026-01-01",
    reviewBy: "2026-11-30",
  },
  aliquotaEstimadaCombinada: {
    value: "27,91%",
    label:
      "é a estimativa de alíquota combinada com que o Comitê Gestor trabalhou em julho de 2026, acima do teto de referência de 26,5%",
    source: "Resolução CGIBS nº 14/2026",
    sourceDate: "2026-07-31",
    caveat: "Estimativa para projeção de arrecadação. Não é alíquota definitiva.",
    reviewBy: "2026-11-30",
  },

  // --- Lucro Presumido (PRD 5.5 e 6.4, caso Secretaria de Finanças de Rondônia) ---
  pisCofinsPresumido: {
    value: "3,65%",
    label: "PIS e Cofins hoje no Lucro Presumido, cumulativo, sem crédito",
    source: "Regime atual, PRD 5.5",
  },
  cbsEstimadaPresumido: {
    value: "9,2%",
    label: "alíquota de referência estimada da CBS, não cumulativa, em 2027",
    source: "Estimativa de referência, PRD 5.5",
    caveat: "Estimativa. Não é alíquota definitiva.",
    reviewBy: "2026-11-30",
  },
  casoRondoniaFaturamento: {
    value: "R$ 70 milhões",
    label: "faturamento anual da consultoria de tecnologia no Presumido",
    source: "Secretaria de Finanças do Estado de Rondônia",
    sourceDate: "2026-01-01",
  },
  casoRondoniaHoje: {
    value: "R$ 2,5 milhões",
    label: "desembolso atual de PIS e Cofins",
    source: "Secretaria de Finanças do Estado de Rondônia",
    sourceDate: "2026-01-01",
  },
  casoRondoniaProjecao: {
    value: "R$ 6,2 milhões",
    label: "projeção de CBS em 2027",
    source: "Secretaria de Finanças do Estado de Rondônia",
    sourceDate: "2026-01-01",
    caveat: "Projeção divulgada. Não é valor definitivo.",
  },
  casoRondoniaAumento: {
    value: "R$ 3,6 milhões",
    label: "aumento por ano",
    source: "Secretaria de Finanças do Estado de Rondônia",
    sourceDate: "2026-01-01",
  },

  // --- Reprecificação (PRD 5.4 e 6.4) ---
  seteMomentos: {
    value: "sete",
    label: "momentos distintos de revisão de preço, margem e contrato entre 2026 e 2033",
    source: "Análise setorial da reforma, 2026",
  },

  // --- Caixa (PRD 5.6 e 6.4) ---
  ate60Dias: {
    value: "até 60 dias",
    label: "para a restituição de créditos ser processada na guia tradicional em 2027",
    source: "Receita Federal e análise setorial, 2026",
  },
} as const satisfies Record<string, Fact>;

/** Datas alvo do componente de contagem regressiva do hero (ISO, meia-noite local). */
export const countdown = {
  primary: "2027-01-01",
  secondary: "2029-01-01",
} as const;

/**
 * Marcos da timeline "O relógio" (PRD 6.2). O texto e canonico do PRD. A fonte
 * de cada marco esta na secao 5.1 (LC 214/2025, EC 132/2023, Receita Federal,
 * Resolucao CGSN 186/2026, CGIBS).
 */
export interface Marco {
  periodo: string;
  titulo: string;
  texto: string;
  fonte: string;
}

export const timeline: Marco[] = [
  {
    periodo: "2026",
    titulo: "Ano de teste",
    texto:
      "CBS a 0,9% e IBS a 0,1%, compensáveis. Carga não muda. O que muda é a informação: os campos dos novos tributos já são obrigatórios na nota.",
    fonte: "LC 214/2025",
  },
  {
    periodo: "set/2026",
    titulo: "Janela de opção",
    texto:
      "Prazo da janela de opção para o primeiro semestre de 2027. Quem não decide, decide por omissão.",
    fonte: "Receita Federal, Resolução CGSN 186/2026",
  },
  {
    periodo: "out/2026",
    titulo: "Alíquota vai ao Senado",
    texto:
      "A proposta de alíquota de referência vai ao Senado. Até lá, ninguém precifica 2027 com número fechado.",
    fonte: "CGIBS",
  },
  {
    periodo: "jan/2027",
    titulo: "A conta vira",
    texto:
      "PIS e Cofins são extintos. A CBS entra em alíquota plena. O IBS segue em teste. Seu crédito passa a depender do recolhimento do fornecedor.",
    fonte: "LC 214/2025, arts. 126 e 127 do ADCT",
  },
  {
    periodo: "2027",
    titulo: "Split facultativo",
    texto:
      "O split payment é facultativo e gradual, dependendo da integração de mais de 200 instituições financeiras. Na guia tradicional, o crédito pode levar até 60 dias para voltar.",
    fonte: "Receita Federal, 30/08/2026",
  },
  {
    periodo: "2028",
    titulo: "Split obrigatório (previsão)",
    texto:
      "A Receita Federal comunicou a obrigatoriedade B2B para 2028. Previsão anunciada, ainda sem ato publicado.",
    fonte: "Receita Federal, 30/08/2026",
  },
  {
    periodo: "2029 › 2033",
    titulo: "Dois sistemas",
    texto:
      "ICMS e ISS caem, IBS sobe. Seis anos operando o sistema velho e o novo ao mesmo tempo. A simplificação só chega no fim.",
    fonte: "EC 132/2023",
  },
];

/** Tag obrigatoria em toda tela de produto (PRD 7.4). */
export const seloExemplo = "Exemplo ilustrativo · dados de demonstração";
