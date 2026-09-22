/**
 * Fonte unica dos numeros da pagina (PRD secao 6.9).
 *
 * Regra: nenhum numero da secao 5 do PRD pode ficar hardcoded no JSX. Todo
 * componente que renderiza um fato tambem renderiza a fonte (em <small> ou
 * tooltip). Cada item tem valor, rotulo, fonte, data da fonte, ressalva e a
 * data de revalidacao (o bloco de pressao e a aliquota tem validade curta).
 *
 * Este arquivo comeca na Fase 1 com o que o hero precisa (calendario do
 * countdown). Os numeros do bloco de pressao, do caso do Presumido e da
 * timeline entram nas Fases 2 e 3.
 */

export interface Fact {
  value: string;
  label: string;
  source: string;
  sourceDate: string; // ISO
  caveat?: string;
  reviewBy?: string; // ISO
}

export const facts = {
  /** Marco do countdown do hero: CBS em aliquota plena. */
  cbsPlena: {
    value: "01/01/2027",
    label: "CBS em regime pleno, PIS e Cofins extintos",
    source: "LC 214/2025, arts. 126 e 127 do ADCT",
    sourceDate: "2025-01-16",
  },
  /** Segundo marco do countdown (apos 01/01/2027): avanco do IBS. */
  ibsAvanco: {
    value: "01/01/2029",
    label: "IBS avanca sobre ICMS e ISS, transicao dos dois sistemas",
    source: "EC 132/2023",
    sourceDate: "2023-12-20",
  },
} as const satisfies Record<string, Fact>;

/** Datas alvo do componente de contagem regressiva do hero (ISO, meia-noite local). */
export const countdown = {
  primary: "2027-01-01",
  secondary: "2029-01-01",
} as const;
