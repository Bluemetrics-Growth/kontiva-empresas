/**
 * Constantes compartilhadas da LP (strings unicas, PRD bug #1 e secao 10).
 * A string de WhatsApp fica centralizada aqui, usada pelo footer, pelo botao
 * flutuante e pelo fallback do formulario.
 */

export const WHATSAPP_NUM = "5551926343014";
export const WHATSAPP_MSG =
  "Olá, quero solicitar o diagnóstico gratuito da Kontiva para a minha empresa.";

/** Link de WhatsApp com a mensagem pre-preenchida. */
export const whatsappHref = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
  WHATSAPP_MSG
)}`;

/**
 * CTAs padronizados (PRD revisao LP empresas, secoes 4.1, 5.1 e 6.2). O CTA
 * principal e sempre o diagnostico gratuito, e o limite do diagnostico aparece
 * junto dos CTAs principais.
 */
export const CTA_PRIMARIO = "Quero meu diagnóstico gratuito";
export const CTA_SECUNDARIO = "Ver como funciona na prática";
export const CTA_HEADER = "Diagnóstico gratuito";
export const CTA_ANCORA = "#agendar";

/** Fronteira gratuito x pago (PRD 4.7). Texto unico usado em toda a pagina. */
export const DIAG_LIMITE = "Diagnóstico limitado: 1 CNPJ, 1 cenário e resultado resumido.";

/** Container GTM e identificador da LP nos eventos (PRD secao 10 e 20). */
export const GTM_ID = "GTM-MNVPH77L";
export const LP_ID = "empresas";
export const LP_VERSION = "empresas-v3";
