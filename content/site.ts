/**
 * Constantes compartilhadas da LP (strings unicas, PRD bug #1 e secao 10).
 * A string de WhatsApp fica centralizada aqui, usada pelo footer, pelo botao
 * flutuante e pelo fallback do formulario.
 */

export const WHATSAPP_NUM = "5551926343014";
export const WHATSAPP_MSG =
  "Olá, quero agendar a demo gratuita da Kontiva com os dados da minha empresa.";

/** Link de WhatsApp com a mensagem pre-preenchida. */
export const whatsappHref = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
  WHATSAPP_MSG
)}`;

/**
 * CTAs padronizados. O CTA principal e sempre a demo gratuita, e o limite da
 * demo aparece junto dos CTAs principais.
 */
export const CTA_PRIMARIO = "Agendar demo gratuita";
export const CTA_HEADER = "Demo gratuita";
export const CTA_ANCORA = "#agendar";

/** Fronteira gratuito x pago. Texto unico usado em toda a pagina. */
export const DEMO_LIMITE = "Gratuita, com os seus dados: 1 CNPJ, 1 cenário.";

/** Container GTM e identificador da LP nos eventos (PRD secao 10 e 20). */
export const GTM_ID = "GTM-MNVPH77L";
export const LP_ID = "empresas";
export const LP_VERSION = "empresas-v4";
