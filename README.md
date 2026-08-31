# Kontiva.ai — Landing Empresas

Landing page da **Kontiva.ai** focada em empresas (médias e grandes), com a pauta da **operação da reforma tributária** para o time fiscal e financeiro interno: caixa do split payment, créditos de IBS/CBS protegidos contra a inadimplência dos fornecedores, repricing de contratos e a operação dos dois sistemas na transição.

Recriada a partir da estrutura visual e da abordagem da landing de escritórios contábeis (referência: `Bluemetrics-Growth/kontiva---lp-s`, deploy em `kontiva-lp-s.vercel.app`). Não é uma cópia: a estrutura, o design system e o padrão de **telas reais do sistema** (o "appframe") são reaproveitados; a copy e os dados de demonstração são próprios de empresas (times internos), não de escritórios.

## O que mudou em relação à versão anterior

- Saíram os mockups abstratos e a foto de resultados. Entraram recreações fiéis das **telas reais do produto** (dashboard, simulação da operação, fornecedores, fluxo de caixa do split, repricing de contratos e chat/MCP), renderizadas em HTML/CSS dentro de um frame de aplicativo.
- Estrutura alinhada à LP de referência: hero com dashboard, prova de engenharia, urgência (split, crédito condicionado, a janela), a régua de posicionamento, os quatro passos do agente, o segundo agente (Repricing), chat & MCP, cinco motivos para confiar, formulário de demo e FAQ.
- Copy adaptada para empresas: "sua operação / seu time fiscal e financeiro" no lugar de "carteira de clientes / escritório"; ERPs de empresa (SAP, TOTVS, Oracle, Senior, planilhas); o segundo agente é o de **Repricing** (protege a margem), não o de honorários.

## Estrutura

- `index.html` — a landing (entrada do deploy), arquivo único e autossuficiente (CSS inline, fontes via Google Fonts). Cópia idêntica em `Kontiva Landing Empresas.html`.
- `assets/` — logos (`kontiva-logo-color.png`, `kontiva-logo-light.png`) e `favicon.svg`. A landing usa o lockup de texto `Kontiva.ai` no topo, como a referência.

## Deploy

Site estático de arquivo único. Basta servir a raiz do repositório (`index.html`) em `empresas.kontiva`.

## Conteúdo

- PT-BR. CTA principal: **Agende a demo** (formulário de agendamento), com WhatsApp como canal de apoio (botão flutuante e fallback do formulário).
- Empresa-exemplo dos dados de demonstração: Grupo Meridiano (22 CNPJs, competência 08/2026). Números ilustrativos.

Kontiva é uma empresa BlueMetrics.
