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
 * CTAs padronizados. O CTA principal e sempre a demo, e todo CTA leva ao
 * agendamento (#agendar).
 */
export const CTA_PRIMARIO = "Agendar minha demo";
export const CTA_HEADER = "Agendar demo";
export const CTA_ANCORA = "#agendar";

/**
 * Microcopy da demo (PRD de copy, secao 4). A duracao ainda pode mudar: troque
 * DEMO_DURACAO e o "30 minutos" do texto da oferta (FreeDemo.astro). DEMO_CURTA vai na oferta e no sticky; DEMO_MICROCOPY no
 * hero e na secao Reforma 2027.
 */
export const DEMO_DURACAO = "30 min";
export const DEMO_CURTA = `Gratuita · ${DEMO_DURACAO}`;
export const DEMO_MICROCOPY = `${DEMO_CURTA} · com o perfil da sua empresa`;

/** Fronteira gratuito x pago. Texto unico usado em toda a pagina. */
export const DEMO_LIMITE = "Demo com seus dados: 1 CNPJ, 1 cenário e resultado resumido.";

/** Container GTM e identificador da LP nos eventos (PRD secao 10 e 20). */
export const GTM_ID = "GTM-MNVPH77L";
export const LP_ID = "empresas";
export const LP_VERSION = "empresas-v4";
