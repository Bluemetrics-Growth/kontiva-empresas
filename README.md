# Kontiva · LP Empresas

Landing page de conversão do Kontiva para o público **Empresas** (`empresas.kontiva.ai`),
focada na reforma tributária: projeção de caixa do split payment, proteção de créditos de
IBS/CBS via monitoramento de fornecedores e sustentação do repricing dos contratos.

Mesma solução Kontiva da LP de Escritórios (`kontiva-lp-s`), mesmo sistema visual e mesma
estrutura de seções, com a narrativa recalibrada para o público de empresas.

## Stack

- [Astro](https://astro.build) (output estático)
- Sistema visual próprio em `src/styles/tokens.css` e `src/styles/lp.css` (ver `DESIGN.md` no repo de origem)
- Sem framework de UI; componentes `.astro` + JS vanilla progressivo (reveal on scroll, form, tracking via `dataLayer`)

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

- `src/pages/index.astro` — orquestra as seções
- `src/layouts/Base.astro` — head, SEO/OG, reveal on scroll, tracking
- `src/components/*.astro` — seções da LP
- `src/components/app-frames/*.astro` — mocks da interface do produto
- `src/data/showcase.ts` — dataset da operação-vitrine (números ilustrativos) + CTA e WhatsApp

## Deploy

Deploy estático na Vercel. O `vercel.json` fixa `framework: astro`, `buildCommand: astro build`
e `outputDirectory: dist`, então o build roda mesmo que o preset do projeto esteja em "Other".

## A ajustar

- `public/og/og.png` e `public/favicon.svg` foram herdados do projeto de Escritórios; trocar pela arte de Empresas quando disponível.
- Endpoint do formulário (`LEAD_ENDPOINT` em `src/components/LeadForm.astro`) está vazio: por ora o envio faz handoff via WhatsApp. Definir o endpoint (HubSpot/serverless) no deploy.
- Número de WhatsApp em `src/data/showcase.ts` (`WHATSAPP_NUM`).

_Kontiva é uma empresa BlueMetrics._
