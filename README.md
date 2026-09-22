# Kontiva.ai — Landing Empresas

Landing page da **Kontiva.ai** para **empresas** (Lucro Presumido e Lucro Real enxuto) sobre a **operação da Reforma Tributária**: crédito de IBS/CBS que depende do recolhimento do fornecedor, compras e custo real, preço e margem, caixa e capital de giro. Público: dono de empresa, financeiro, controller e gestores. A Kontiva lê, cruza, simula, monitora e alerta. A decisão continua com a empresa.

Compartilha o design system e a arquitetura da landing de escritórios contábeis (referência: `Bluemetrics-Growth/kontiva---lp-s`, deploy em `kontiva-lp-s.vercel.app`). A copy e os dados de demonstração são próprios de empresas (times internos).

## Stack

Projeto **Astro** (estático). Build `astro build`, saída em `dist/`, deploy pela Vercel (projeto `kontivaempresas`).

- `src/pages/index.astro` — a página, compõe os componentes de seção.
- `src/layouts/Base.astro` — layout com `<head>` (metadata, canonical, Open Graph, JSON-LD), preload do hero para o LCP e o JavaScript global (reveal on scroll, tracking no dataLayer, formulário de demo).
- `src/components/*.astro` — na ordem da página: Header, Hero, CountdownTo2027, CreditHook, ProductTabs (seção unificada "O que muda na prática e como a Kontiva opera cada decisão"), ProductScreens (telas reais), Compare, FreeDemo, Trust (IA auditável), LeadForm2, Faq, Footer, WhatsAppFloat, StickyCta.
- `src/styles/tokens.css` — tokens de design (cores, tipografia, radii, sombras). `src/styles/lp.css` — layout e componentes.
- `content/facts.ts` — fonte única dos números da página (valor, fonte, data, ressalva, data de revalidação).
- `public/` — assets estáticos: `favicon.svg`, foto do hero em variantes responsivas (`hero-empresas-{800,1600,2400}.{avif,webp,jpg}`), logos em `public/assets/`.

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local
npm run build    # gera dist/
npx astro check  # TypeScript (requer @astrojs/check e typescript)
npm run preview  # serve o dist/
```

## Histórico

Esta LP nasceu como um arquivo HTML único (`index.html`, CSS e JS inline). Foi migrada para Astro, mantendo o conteúdo e as telas do produto de empresas e ganhando build system, componentes, centralização de fatos e metadata completa.

## Conteúdo

- PT-BR. CTA principal: **Agendar demo gratuita**, sempre com o limite visível (1 CNPJ, 1 cenário, resultado resumido; texto único em `content/site.ts`). WhatsApp como canal de apoio (botão flutuante e fallback do formulário).
- Esta LP não mostra preços. Simulador com vários cenários, acompanhamento mensal e vários CNPJs aparecem como "versão completa".
- Hero sem elementos sobrepostos à área das pessoas na foto.
- Telas reais em `public/images/telas/` (webp + jpg): capturas do sistema recortadas na área de conteúdo (sem barra lateral nem usuário logado), com nomes de fornecedores pixelados. Origem: capturas do repositório `kontiva---LP-s`.
- Split payment e RAD: sempre descritos como graduais e facultativos a partir de 2027.
- Contador regressivo para 01/01/2027 00:00 (BRT), client-side, com fallback estático `--`.
- Empresa-exemplo dos dados de demonstração: Grupo Meridiano (22 CNPJs, competência 08/2026). Números ilustrativos.
- Regra de estilo: proibido o travessão longo. Use vírgula, ponto ou dois pontos.

Kontiva é uma empresa BlueMetrics.
