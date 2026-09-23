/**
 * Dados das secoes da LP (PRD de redesign, secao 7). O markup dos componentes
 * so renderiza o que esta aqui. Copy revisada no tom da campanha Reforma 2027.
 */

/* ---------- Etapas do credito (hero e tabela da nova logica) ---------- */

export type EstadoEtapa = "done" | "pending" | "locked";

export interface Etapa {
  n: string;
  titulo: string;
  texto: string;
  ico: string; // paths SVG (viewBox 24)
  estado: EstadoEtapa;
  status: string;
  risco: { k: string; t: string; d: string };
  ajuda: { t: string; tag: string };
}

const icoCompra = '<path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/>';
const icoPag = '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 14h4"/>';
const icoForn = '<path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>';
const icoCadeado = '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>';

export const etapas: Etapa[] = [
  {
    n: "01", titulo: "Compra", texto: "O fornecedor vende e emite a nota.", ico: icoCompra,
    estado: "done", status: "Nota emitida",
    risco: { k: "Compras", t: "O mais barato pode sair mais caro.", d: "Menos crédito, custo final maior." },
    ajuda: { t: "Compara fornecedores pelo custo depois do crédito, não pelo preço da nota.", tag: "Análise por IA" },
  },
  {
    n: "02", titulo: "Pagamento", texto: "Você paga por guia, split ou RAD.", ico: icoPag,
    estado: "done", status: "Pago",
    risco: { k: "Pagamento", t: "Forma de pagamento errada.", d: "Em algumas operações, split ou RAD protegem melhor o crédito." },
    ajuda: { t: "Simula guia, split e RAD e indica a opção mais segura para cada operação.", tag: "Aprovação humana" },
  },
  {
    n: "03", titulo: "Recolhimento", texto: "O fornecedor precisa recolher IBS/CBS.", ico: icoForn,
    estado: "pending", status: "Sem confirmação",
    risco: { k: "Fornecedor", t: "Recolhimento sem confirmação", d: "Se o fornecedor não recolhe, o crédito fica em risco." },
    ajuda: { t: "Acompanha o recolhimento de cada fornecedor e avisa quando algo não bate.", tag: "Fonte verificada" },
  },
  {
    n: "04", titulo: "Crédito", texto: "Só então o crédito volta para o caixa.", ico: icoCadeado,
    estado: "locked", status: "Travado na etapa 3",
    risco: { k: "Caixa", t: "Crédito fora do prazo.", d: "O caixa sente antes de todo mundo." },
    ajuda: { t: "Projeta o efeito no caixa mês a mês e mostra onde aperta.", tag: "Análise por IA" },
  },
];

export const mudancas = [
  "Um fornecedor que não recolhe leva o seu crédito junto.",
  "Crédito travado é capital de giro parado.",
  "O crédito passa a mexer no caixa.",
];

/* ---------- Reforma 2027 ---------- */

export const marcos = [
  { when: "2026", what: "Mapeie fornecedores, contratos e créditos.", now: true },
  { when: "Jan/2027", what: "CBS plena. Seu crédito passa a depender do fornecedor." },
  { when: "2027 em diante", what: "Split payment e RAD entram aos poucos e são facultativos. Cada operação pede uma escolha." },
];

/* ---------- Como opera (abas) ---------- */

export type Tom = "ok" | "risk" | "neutral";
export interface Aba {
  id: string;
  label: string;
  title: string;
  risk: string;
  how: string;
  metric: string;
  cta: string;
  screen: string;
  screenTag: string;
  rows: { b: string; s: string; badge: string; tone: Tom }[];
  toggle?: string;
}

export const abas: Aba[] = [
  {
    id: "credito",
    label: "Crédito",
    title: "Seu crédito depende de quem vende para você.",
    risk: "Você descobre o crédito que não veio quando o caixa já sentiu.",
    how: "Confere nota e recolhimento de cada fornecedor e mostra quem gera crédito e quem precisa de revisão.",
    metric: "R$ 214.700 em crédito sob revisão. 7 fornecedores exigem revisão.",
    cta: "Ver meu risco de crédito",
    screen: "Fornecedores",
    screenTag: "Risco de crédito",
    rows: [
      { b: "Aurora Insumos", s: "recolhimento confirmado", badge: "Gera crédito", tone: "ok" },
      { b: "Nordeste Log", s: "crédito parcial", badge: "Simples", tone: "neutral" },
      { b: "Vertex Peças", s: "sem confirmação", badge: "Revisar", tone: "risk" },
      { b: "Meta Serviços", s: "sem confirmação", badge: "Revisar", tone: "risk" },
    ],
  },
  {
    id: "compras",
    label: "Compras",
    title: "O fornecedor mais barato pode sair mais caro.",
    risk: "Comparar pelo preço da nota esconde o custo real depois do crédito.",
    how: "Compara fornecedores pelo custo real, com crédito, regime e forma de pagamento na conta.",
    metric: "Fornecedor A × Fornecedor B, custo depois do crédito.",
    cta: "Comparar meus fornecedores",
    screen: "Comparativo de compra",
    screenTag: "Custo depois do crédito",
    rows: [
      { b: "Fornecedor A", s: "menor preço bruto", badge: "Maior risco de crédito", tone: "risk" },
      { b: "Fornecedor B", s: "preço maior", badge: "Crédito mais previsível", tone: "ok" },
      { b: "Custo real", s: "mesmo cenário, mesmo prazo", badge: "Para decisão", tone: "neutral" },
    ],
  },
  {
    id: "margem",
    label: "Preço",
    title: "O contrato pode perder margem sem o preço mudar.",
    risk: "Contrato reajustado só por índice não enxerga o novo custo tributário.",
    how: "Cruza contratos e custos com IBS/CBS e aponta quais preços revisar. O reajuste só sai com aprovação do seu time.",
    metric: "Contrato de 24 meses, margem pressionada, revisão recomendada.",
    cta: "Avaliar minha margem",
    screen: "Contratos e preços",
    screenTag: "Memória de cálculo",
    rows: [
      { b: "Contrato 24 meses", s: "reajuste por IPCA", badge: "Margem pressionada", tone: "risk" },
      { b: "Custo tributário novo", s: "IBS/CBS por fora", badge: "Recalculado", tone: "neutral" },
      { b: "Preço sob revisão", s: "com memória de cálculo", badge: "Para aprovação", tone: "ok" },
    ],
    toggle: "Nada é aplicado sem aprovação do seu time",
  },
  {
    id: "caixa",
    label: "Caixa",
    title: "O caixa sente antes de todo mundo.",
    risk: "Prazo de crédito e forma de recolhimento mudam o capital de giro sem aviso.",
    how: "Simula recolhimento tradicional, split e RAD nas operações elegíveis e mostra o efeito no caixa mês a mês.",
    metric: "Cenário tradicional × split/RAD, impacto mês a mês.",
    cta: "Simular meu caixa",
    screen: "Fluxo de caixa",
    screenTag: "Simulação mês a mês",
    rows: [
      { b: "Recolhimento tradicional", s: "crédito com prazo de restituição", badge: "Cenário 1", tone: "neutral" },
      { b: "Split/RAD", s: "operações elegíveis: crédito mais protegido, possível impacto no capital de giro", badge: "Facultativo", tone: "neutral" },
      { b: "Capital de giro", s: "em jogo conforme fornecedor, forma de pagamento e estratégia de recolhimento", badge: "A simular", tone: "risk" },
    ],
    toggle: "Comparar: cenário tradicional × split/RAD",
  },
];

/* ---------- Telas reais ---------- */

export const telas = [
  {
    id: "fornecedores", w: 1145, h: 575,
    url: "app.kontiva.ai/fornecedores",
    titulo: "Fornecedores",
    legenda: "Cada fornecedor classificado por regime, CNAE e situação de crédito de IBS/CBS.",
    alt: "Tela de fornecedores do Kontiva com indicadores de ativos, sem regime e crédito presumido, e a lista de fornecedores com regime, ramo e situação de crédito de IBS/CBS. Nomes ocultados.",
  },
  {
    id: "nova-simulacao", w: 466, h: 590,
    url: "app.kontiva.ai/simulacoes",
    titulo: "Nova simulação",
    legenda: "Ano e regime em poucos campos. O cenário sai pronto.",
    alt: "Formulário de nova simulação do Kontiva com empresa, nome da simulação, ano do cenário e regime tributário Lucro Presumido.",
  },
  {
    id: "cronograma", w: 626, h: 592,
    url: "app.kontiva.ai/simulacoes/cronograma",
    titulo: "Cronograma da Reforma",
    legenda: "As alíquotas de IBS, CBS, ICMS e ISS de cada ano, até 2033.",
    alt: "Tabela do cronograma da reforma no Kontiva com as alíquotas de IBS, CBS e a fração de ICMS/ISS cobrada de 2026 a 2033.",
  },
];

/* ---------- Comparativo ---------- */

export type Celula = "yes" | "no" | "part";
export const comparativo = {
  cols: ["Responde dúvidas", "Simula cenários", "Monitora fornecedores", "Opera todo mês"],
  rows: [
    { name: "Chatbot", cells: ["yes", "no", "no", "no"] as Celula[] },
    { name: "Consultoria", cells: ["yes", "yes", "part", "no"] as Celula[] },
    { name: "ERP", cells: ["part", "part", "part", "part"] as Celula[] },
    { name: "Kontiva", cells: ["yes", "yes", "yes", "yes"] as Celula[], hl: true },
  ],
  label: { yes: "Sim", no: "Não", part: "Parcial" } as Record<Celula, string>,
};

/* ---------- Demo gratuita ---------- */

export const demoInclui = [
  "Um cenário de 2027 com o regime e o perfil da sua empresa",
  "Onde o crédito de IBS/CBS fica exposto, fornecedor por fornecedor",
  "O que fazer antes de janeiro",
];
export const demoCompleta = [
  "Simulador com vários cenários",
  "Acompanhamento mensal",
  "Vários CNPJs e reprecificação em lote",
];

/* ---------- IA auditavel ---------- */

export const passosIA = [
  { t: "Lê", d: "XML, PDF, SPED e dados financeiros." },
  { t: "Cruza e simula", d: "Fornecedor, crédito, preço e caixa, por cenário." },
  { t: "Mostra a origem", d: "Cada número com fonte e memória de cálculo." },
  { t: "Espera aprovação", d: "Nada é aplicado sem o seu time, e fica registrado quem aprovou." },
];

/* ---------- FAQ ---------- */

export const faqs = [
  { q: "A Kontiva substitui meu contador?", a: "Não. Imposto passa a ser assunto de compras, comercial e financeiro também, e a Kontiva dá o número para essas conversas. Seu contador acompanha os dados e a memória de cálculo." },
  { q: "O que eu vejo na demo?", a: "Um cenário da Reforma rodando com o regime e o perfil da sua empresa: onde o crédito de IBS/CBS fica exposto, quais fornecedores pedem atenção e o efeito no caixa. A demo cobre 1 CNPJ e 1 cenário. A versão contratada roda vários CNPJs, vários cenários e o monitoramento mensal." },
  { q: "Split payment será obrigatório em 2027?", a: "Não. Split payment e RAD começam de forma gradual e facultativa, em operações elegíveis. A decisão depende da operação, do meio de pagamento e da estratégia de proteção de crédito e caixa." },
  { q: "A Kontiva garante economia tributária?", a: "Não. A Kontiva simula cenários a partir dos dados disponíveis, mostra riscos e apoia decisões. Ela não substitui contador, advogado tributarista ou decisão da empresa." },
  { q: "Preciso trocar de ERP?", a: "Não. A Kontiva pode trabalhar com ERP, documentos fiscais, planilhas e integrações conforme o caso." },
  { q: "O que a Kontiva faz sozinha?", a: "Lê documentos, cruza dados, simula cenários e aponta riscos. Qualquer ação que mude preço, pagamento ou cadastro espera a aprovação do seu time, e fica registrado quem aprovou." },
  { q: "Meus dados ficam seguros?", a: "Sim, o acesso é controlado e rastreável. Com certificado digital, a Kontiva lê só o necessário para a simulação e a operação fiscal." },
];
