/**
 * Dados das secoes da LP (PRD de redesign, secao 7). O markup dos componentes
 * so renderiza o que esta aqui. A copy e a mesma da versao anterior; a unica
 * troca e o "·" por virgula nos metadados.
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
    estado: "done", status: "Emissão concluída",
    risco: { k: "Compras", t: "Preço bruto engana", d: "O fornecedor mais barato pode gerar menos crédito e custar mais no final." },
    ajuda: { t: "Compara fornecedores pelo custo depois do crédito, e não pelo preço da nota.", tag: "Análise por IA" },
  },
  {
    n: "02", titulo: "Pagamento", texto: "Sua empresa paga pela guia tradicional, split ou RAD.", ico: icoPag,
    estado: "done", status: "Pagamento processado",
    risco: { k: "Pagamento", t: "Forma de pagamento mal escolhida", d: "Em algumas operações, split ou RAD protegem melhor o crédito." },
    ajuda: { t: "Simula guia, split e RAD e indica a forma que protege melhor o crédito.", tag: "Aprovação humana" },
  },
  {
    n: "03", titulo: "Recolhimento", texto: "O fornecedor recolhe IBS/CBS, e isso precisa ser confirmado.", ico: icoForn,
    estado: "pending", status: "Aguardando confirmação",
    risco: { k: "Fornecedor", t: "Recolhimento sem confirmação", d: "Se o fornecedor não recolhe certo, o crédito fica em risco." },
    ajuda: { t: "Confere o recolhimento de cada fornecedor e avisa quando algo não bate.", tag: "Fonte verificada" },
  },
  {
    n: "04", titulo: "Crédito", texto: "O crédito é liberado e volta para o caixa.", ico: icoCadeado,
    estado: "locked", status: "Aguarda a etapa 3",
    risco: { k: "Caixa", t: "Crédito travado", d: "Sem o crédito no prazo, o capital de giro fica menos previsível." },
    ajuda: { t: "Projeta o efeito no caixa mês a mês e mostra onde o crédito aperta.", tag: "Análise por IA" },
  },
];

export const mudancas = [
  "O fornecedor que não recolhe leva o seu crédito junto.",
  "Crédito travado vira capital de giro parado.",
];

/* ---------- Reforma 2027 ---------- */

export const marcos = [
  { when: "2026", what: "O agente mapeia fornecedores e créditos.", now: true },
  { when: "Jan/2027", what: "CBS plena. Seu crédito passa a depender do recolhimento de quem vende para você." },
  { when: "A partir de 2027", what: "Split payment e RAD entram aos poucos e são facultativos. Cada operação pede uma escolha." },
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
    label: "Crédito e fornecedores",
    title: "Seu crédito depende de quem vende para você.",
    risk: "Sem acompanhamento, você descobre o crédito que não veio quando o caixa já sentiu.",
    how: "O agente confere nota e recolhimento de cada fornecedor e avisa onde há crédito em risco.",
    metric: "R$ 214.700 em crédito potencial sob revisão, 7 fornecedores exigem revisão",
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
    label: "Compras e custo real",
    title: "O menor preço bruto pode não ser o menor custo.",
    risk: "O fornecedor mais barato na tabela pode custar mais depois do crédito.",
    how: "O agente compara fornecedores pelo custo real, com crédito, regime e forma de pagamento na conta.",
    metric: "Fornecedor A × Fornecedor B, custo comparado depois do crédito",
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
    label: "Preço, contratos e margem",
    title: "Sua margem pode mudar sem o seu preço mudar.",
    risk: "Contratos longos e tabelas antigas perdem margem aos poucos, e ninguém vê a tempo.",
    how: "O agente cruza contratos e custos com IBS/CBS e aponta quais preços revisar. O reajuste só sai com aprovação do seu time.",
    metric: "Contrato 24 meses, margem pressionada, revisão recomendada",
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
    label: "Caixa e capital de giro",
    title: "A reforma muda quando o dinheiro entra e quando o crédito aparece.",
    risk: "Split payment e RAD são graduais e facultativos, mas cada operação pede uma escolha entre proteger o crédito e preservar caixa.",
    how: "O agente simula recolhimento tradicional, split e RAD nas operações elegíveis e mostra o efeito no capital de giro mês a mês.",
    metric: "Cenário tradicional × split/RAD, impacto mês a mês no caixa",
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
    legenda: "Cada fornecedor com regime, ramo (CNAE) e situação de crédito de IBS/CBS.",
    alt: "Tela de fornecedores do Kontiva com indicadores de ativos, sem regime e crédito presumido, e a lista de fornecedores com regime, ramo e situação de crédito de IBS/CBS. Nomes ocultados.",
  },
  {
    id: "nova-simulacao", w: 466, h: 590,
    url: "app.kontiva.ai/simulacoes",
    titulo: "Nova simulação",
    legenda: "Um cenário por ano e por regime tributário, montado em poucos campos.",
    alt: "Formulário de nova simulação do Kontiva com empresa, nome da simulação, ano do cenário e regime tributário Lucro Presumido.",
  },
  {
    id: "cronograma", w: 626, h: 592,
    url: "app.kontiva.ai/simulacoes/cronograma",
    titulo: "Cronograma da reforma",
    legenda: "As alíquotas de IBS, CBS e ICMS/ISS que o cálculo usa em cada ano, até 2033.",
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
  "1 CNPJ e 1 cenário, com os seus dados",
  "Resultado resumido de crédito, fornecedores, preço e caixa",
  "Próximos passos recomendados",
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
  { t: "Mostra a origem", d: "Cada número vem com fonte e memória de cálculo." },
  { t: "Espera sua aprovação", d: "Nada é aplicado sem revisão, e fica registrado quem aprovou." },
];

/* ---------- FAQ ---------- */

export const faqs = [
  { q: "A Kontiva substitui meu contador?", a: "Não. A Kontiva instrumenta, simula e monitora a operação. A decisão continua com sua empresa, e seu contador pode acompanhar os dados e a memória de cálculo." },
  { q: "A demo gratuita é completa?", a: "Não. Ela usa 1 CNPJ, 1 cenário e mostra um resultado resumido. O simulador com vários cenários e o acompanhamento mensal fazem parte da versão contratada." },
  { q: "Split payment será obrigatório em 2027?", a: "Não. Split payment e RAD começam de forma gradual e facultativa, em operações elegíveis. A decisão depende da operação, do meio de pagamento e da estratégia de proteção de crédito e caixa." },
  { q: "A Kontiva garante economia tributária?", a: "Não. A Kontiva simula cenários a partir dos dados disponíveis, mostra riscos e apoia decisões. Ela não substitui contador, advogado tributarista ou decisão da empresa." },
  { q: "Preciso trocar de ERP?", a: "Não. A Kontiva pode trabalhar com ERP, documentos fiscais, planilhas e integrações conforme o caso." },
  { q: "A IA executa ações sozinha?", a: "Não. O agente aponta riscos e propõe ações. Seu time aprova pela interface e fica registrado quem aprovou o quê." },
];
