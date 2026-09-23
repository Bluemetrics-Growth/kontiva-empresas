# Kontiva.ai, Landing Empresas

Landing page da **Kontiva.ai** para **empresas** (Lucro Presumido e Lucro Real enxuto) sobre a **operação da Reforma Tributária**: crédito de IBS/CBS que depende do recolhimento do fornecedor, compras e custo real, preço e margem, caixa e capital de giro. Público: dono de empresa, financeiro, controller e gestores. A Kontiva lê, cruza, simula, monitora e alerta. A decisão continua com a empresa.

Compartilha o design system e a arquitetura da landing de escritórios contábeis (referência: `Bluemetrics-Growth/kontiva---lp-s`, deploy em `kontiva-lp-s.vercel.app`). A copy e os dados de demonstração são próprios de empresas (times internos).

## Stack

Projeto **Astro** (estático). Build `astro build`, saída em `dist/`, deploy pela Vercel (projeto `kontivaempresas`).

- `src/pages/index.astro`: a página, compõe os componentes de seção.
- `src/layouts/Base.astro`: layout com `<head>` (metadata, canonical, Open Graph, JSON-LD) e o JavaScript global (tracking no dataLayer, barra fixa mobile).
- `src/components/*.astro`, na ordem da página: Header, Hero (com CreditChain, a cadeia do crédito animada), CountdownTo2027 (Reforma 2027), CreditJourney (jornada do crédito: etapas clicáveis com painel e mockup, tabs no desktop e acordeão no mobile), PlatformCarousel (carrossel da interface da plataforma), Compare (colunas com a Kontiva em destaque), FreeDemo, Trust (IA auditável), LeadForm2 (agendamento), Faq, Footer, WhatsAppFloat, StickyCta.
- `src/components/Icon.astro` + `src/lib/icons.ts`: ícones SVG inline no desenho do lucide (o projeto não usa biblioteca de ícones).
- `src/styles/tokens.css`: tokens do design system Kontiva (cores, tipografia, radii, sombras). Não mudam no redesign. `src/styles/lp.css`: layout e componentes.
- `content/secoes.ts`: dados das seções (etapas do hero, jornada do crédito, slides da plataforma, comparativo, demo, FAQ). `content/facts.ts`: números com fonte. `content/site.ts`: CTAs, WhatsApp, GTM e a lista de domínios de e-mail pessoal bloqueados no formulário.
- `public/`: `favicon.svg`, capturas da interface em `public/images/telas/`, `og/og.png`, logos em `public/assets/`. Foto do hero em `public/images/hero-kontiva-empresas-*` (desktop 16:9 e recorte 4:5 no mobile, com preload por breakpoint).

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

- PT-BR. CTA principal: **Agendar demo gratuita**. A oferta (1 CNPJ, 1 cenário) aparece no bloco da demo, no CTA final, na mensagem de sucesso e no FAQ (texto único em `content/site.ts`). WhatsApp como canal de apoio (botão flutuante e fallback do formulário).
- Esta LP não mostra preços. Simulador com vários cenários, acompanhamento mensal e vários CNPJs aparecem como "versão completa".
- Hero com foto de fundo (pessoas no terço direito, copy no espaço negativo à esquerda, nada sobreposto às pessoas) e, abaixo, a dor do crédito desenhada (cadeia Compra, Pagamento, Recolhimento, Crédito). É a única animação automática da página (além do autoplay do carrossel, pausável) e respeita `prefers-reduced-motion`. O resto só se move em resposta ao usuário.
- Formulário em 2 etapas: nome, e-mail corporativo, WhatsApp e cargo; depois empresa, segmento, faturamento e regime. Selects com value em slug. E-mails pessoais são bloqueados no cliente e na função de envio. Sem `FORM_ENDPOINT`, o envio abre o WhatsApp com os dados preenchidos (destino atual). Configurar o endpoint em `LeadForm2.astro` passa a enviar por POST com o mesmo payload.
- Capturas da interface em `public/images/telas/` (webp + jpg), usadas nos slides 1, 2 e 4 do carrossel: recortadas na área de conteúdo (sem barra lateral nem usuário logado), com nomes de fornecedores pixelados. Origem: capturas do repositório `kontiva---LP-s`. Os slides 3 (Comparar cenários) e 5 (Prioridades) são mockups em HTML/CSS, porque não há captura dessas telas.
- Split payment e RAD: sempre descritos como graduais e facultativos a partir de 2027.
- Contador regressivo para 01/01/2027 00:00 (BRT), client-side, com fallback estático `--`.
- Empresa-exemplo dos dados de demonstração: Grupo Meridiano (22 CNPJs, competência 08/2026). Números ilustrativos.
- Regra de estilo: proibido o travessão longo. Use vírgula, ponto ou dois pontos.

Kontiva é uma empresa BlueMetrics.
