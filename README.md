# Kontiva.ai — Landing Empresas

Landing page da **Kontiva.ai** focada em empresas (médias e grandes), com a pauta da **operação da reforma tributária** para o time fiscal e financeiro interno: caixa do split payment, créditos de IBS/CBS protegidos contra a inadimplência dos fornecedores, repricing de contratos e a operação dos dois sistemas na transição.

Compartilha o design system e a arquitetura da landing de escritórios contábeis (referência: `Bluemetrics-Growth/kontiva---lp-s`, deploy em `kontiva-lp-s.vercel.app`). A copy e os dados de demonstração são próprios de empresas (times internos).

## Stack

Projeto **Astro** (estático). Build `astro build`, saída em `dist/`, deploy pela Vercel (projeto `kontivaempresas`).

- `src/pages/index.astro` — a página, compõe os componentes de seção.
- `src/layouts/Base.astro` — layout com `<head>` (metadata, canonical, Open Graph, JSON-LD), preload do hero para o LCP e o JavaScript global (reveal on scroll, tracking no dataLayer, formulário de demo).
- `src/components/*.astro` — Header, Hero, ProofBar, UrgencyCards, Ruler, HowItWorks, SecondAgent, ChatMcp, WhyBelieve, LeadForm, Faq, Footer, WhatsAppFloat.
- `src/styles/tokens.css` — tokens de design (cores, tipografia, radii, sombras). `src/styles/lp.css` — layout e componentes.
- `content/facts.ts` — fonte única dos números da página (valor, fonte, data, ressalva, data de revalidação).
- `public/` — assets estáticos: `favicon.svg`, foto do hero em variantes responsivas (`hero-empresas-{800,1600,2400}.{avif,webp,jpg}`), logos em `public/assets/`.

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local
npm run build    # gera dist/
npm run preview  # serve o dist/
```

## Histórico

Esta LP nasceu como um arquivo HTML único (`index.html`, CSS e JS inline). Foi migrada para Astro, mantendo o conteúdo e as telas do produto de empresas e ganhando build system, componentes, centralização de fatos e metadata completa.

## Conteúdo

- PT-BR. CTA principal: **Agende a demo**, com WhatsApp como canal de apoio (botão flutuante e fallback do formulário).
- Empresa-exemplo dos dados de demonstração: Grupo Meridiano (22 CNPJs, competência 08/2026). Números ilustrativos.
- Regra de estilo: proibido o travessão longo. Use vírgula, ponto ou dois pontos.

Kontiva é uma empresa BlueMetrics.
