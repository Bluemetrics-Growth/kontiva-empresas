/**
 * Constantes compartilhadas da LP (strings unicas, PRD bug #1 e secao 10).
 * A string de WhatsApp fica centralizada aqui, usada pelo footer, pelo botao
 * flutuante e pelo fallback do formulario.
 */

export const WHATSAPP_NUM = "5551926343014";
export const WHATSAPP_MSG =
  "Olá, quero agendar a demo da Kontiva com os dados da minha empresa.";

/** Link de WhatsApp com a mensagem pre-preenchida. */
export const whatsappHref = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
  WHATSAPP_MSG
)}`;

/** CTAs padronizados (PRD v3 secao 16). No maximo tres labels. */
export const CTA_PRIMARIO = "Ver o Kontiva na minha operação";
export const CTA_SECUNDARIO = "Agendar uma demo";
export const CTA_CONTEXTUAL = "Simular minha operação";
export const CTA_ANCORA = "#agendar";

/** Container GTM e identificador da LP nos eventos (PRD secao 10 e 20). */
export const GTM_ID = "GTM-MNVPH77L";
export const LP_ID = "empresas";
export const LP_VERSION = "empresas-v3";
