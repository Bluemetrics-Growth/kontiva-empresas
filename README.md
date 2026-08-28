# Kontiva.ai — Landing Empresas

Landing page da **Kontiva.ai** focada em empresas (médias e grandes), com a pauta do **Agente Tributário**: o copiloto fiscal e financeiro para atravessar a reforma tributária (caixa com split payment, créditos de IBS/CBS protegidos contra a inadimplência dos fornecedores e repricing de contratos).

Projeto standalone, separado da landing de escritórios de contabilidade. Mantém o mesmo design system (cores, tipografia, card radar, animações) da landing principal.

## Estrutura

- `index.html` — a landing (entrada do deploy). Cópia idêntica em `Kontiva Landing Empresas.html`.
- `assets/` — logos (`kontiva-logo-light.png`, `kontiva-logo-color.png`).
- `uploads/` — imagem da seção de resultados.

## Deploy

É um site estático de arquivo único. Basta servir a raiz do repositório (`index.html`) em `empresas.kontiva`.

## Conteúdo

- PT-BR por padrão, com toggle PT/EN (atributos `data-pt`/`data-en`).
- CTA principal sempre no WhatsApp.
- Calculadora: caixa imobilizado pelo split payment + créditos em risco.
- Planos por faixa de faturamento, sem cobrar por usuário.

Kontiva é uma empresa BlueMetrics.
