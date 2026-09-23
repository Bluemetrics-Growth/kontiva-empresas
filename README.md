# Kontiva.ai, Landing Empresas

Landing page da **Kontiva.ai** para **empresas** (Lucro Presumido e Lucro Real enxuto) sobre a **operação da Reforma Tributária**: crédito de IBS/CBS que depende do recolhimento do fornecedor, compras e custo real, preço e margem, caixa e capital de giro. Público: dono de empresa, financeiro, controller e gestores. A Kontiva lê, cruza, simula, monitora e alerta. A decisão continua com a empresa.

Compartilha o design system e a arquitetura da landing de escritórios contábeis (referência: `Bluemetrics-Growth/kontiva---lp-s`, deploy em `kontiva-lp-s.vercel.app`). A copy e os dados de demonstração são próprios de empresas (times internos).

## Stack

Projeto **Astro** (estático). Build `astro build`, saída em `dist/`, deploy pela Vercel (projeto `kontivaempresas`).

- `src/pages/index.astro`: a página, compõe os componentes de seção.
- `src/layouts/Base.astro`: layout com `<head>` (metadata, canonical, Open Graph, JSON-LD) e o JavaScript global (tracking no dataLayer, barra fixa mobile).
- `src/components/*.astro`, na ordem da página: Header, Hero (com CreditChain, a cadeia do crédito animada), CountdownTo2027 (Reforma 2027), CreditHook (tabela única por etapa), ProductTabs + OperationPanel (abas com teclado), ProductScreens (Plataforma, `#plataforma`), Compare, FreeDemo, Trust (IA auditável), LeadForm2 (agendamento), Faq, Footer, WhatsAppFloat, StickyCta.
- `src/styles/tokens.css`: tokens do design system Kontiva (cores, tipografia, radii, sombras). Não mudam no redesign. `src/styles/lp.css`: layout e componentes.
- `content/secoes.ts`: dados das seções (etapas do crédito, abas, telas, comparativo, demo, FAQ). `content/facts.ts`: números com fonte. `content/site.ts`: CTAs, WhatsApp, GTM.
- `public/`: `favicon.svg`, telas reais em `public/images/telas/`, `og/og.png`, logos em `public/assets/`. Foto do hero em `public/images/hero-kontiva-empresas-*` (desktop 16:9 e recorte 4:5 no mobile, com preload por breakpoint).

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

- PT-BR. Posicionamento: **agente de IA fiscal-tributário** (nunca "copiloto"). CTA único: **Agendar minha demo**, sempre para `#agendar`. Microcopy da demo em constantes de `content/site.ts` (`DEMO_DURACAO`, `DEMO_CURTA`, `DEMO_MICROCOPY`): trocar a duração é uma edição só (mais o "30 minutos" do texto da oferta). "1 CNPJ" só aparece na FAQ 1 e na mensagem de sucesso do formulário. WhatsApp como canal de apoio (botão flutuante e fallback do formulário).
- GTM: todo CTA de agendamento tem `data-cta-location` e dispara `cta_click { cta_location }`; o formulário dispara `form_step1_complete` e `form_submit` (além dos eventos anteriores, mantidos).
- Esta LP não mostra preços. Simulador com vários cenários, acompanhamento mensal e vários CNPJs aparecem como "versão completa".
- Hero com foto de fundo (pessoas no terço direito, copy no espaço negativo à esquerda, nada sobreposto às pessoas) e, abaixo, a dor do crédito desenhada (cadeia Compra, Pagamento, Recolhimento, Crédito). É a única animação da página e respeita `prefers-reduced-motion`.
- Formulário: sem `FORM_ENDPOINT`, o envio abre o WhatsApp com os dados preenchidos (destino atual). Configurar o endpoint em `LeadForm2.astro` passa a enviar por POST com os mesmos campos.
- Telas do sistema (seção Plataforma) em `public/images/telas/` (webp + jpg): capturas do sistema recortadas na área de conteúdo (sem barra lateral nem usuário logado), com nomes de fornecedores pixelados. Origem: capturas do repositório `kontiva---LP-s`.
- Split payment e RAD: sempre descritos como graduais e facultativos a partir de 2027.
- Contador regressivo para 01/01/2027 00:00 (BRT), client-side, com fallback estático `--`.
- Empresa-exemplo dos dados de demonstração: Grupo Meridiano (22 CNPJs, competência 08/2026). Números ilustrativos.
- Regra de estilo: proibido o travessão longo. Use vírgula, ponto ou dois pontos.

Kontiva é uma empresa BlueMetrics.
