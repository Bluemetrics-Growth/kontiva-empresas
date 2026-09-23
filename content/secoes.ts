/**
 * Dados das secoes da LP (PRD de redesign, secao 7). O markup dos componentes
 * so renderiza o que esta aqui. Copy revisada no tom da campanha Reforma 2027.
 */

/* ---------- Etapas do credito (card do hero) ---------- */

export type EstadoEtapa = "done" | "pending" | "locked";

export interface Etapa {
  n: string;
  titulo: string;
  texto: string;
  ico: string; // paths SVG (viewBox 24)
  estado: EstadoEtapa;
  status: string;
}

const icoCompra = '<path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/>';
const icoPag = '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 14h4"/>';
const icoForn = '<path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>';
const icoCadeado = '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>';

export const etapas: Etapa[] = [
  { n: "01", titulo: "Compra", texto: "O fornecedor vende e emite a nota.", ico: icoCompra, estado: "done", status: "Nota emitida" },
  { n: "02", titulo: "Pagamento", texto: "Você paga por guia, split ou RAD.", ico: icoPag, estado: "done", status: "Pago" },
  { n: "03", titulo: "Recolhimento", texto: "O fornecedor precisa recolher IBS/CBS.", ico: icoForn, estado: "pending", status: "Sem confirmação" },
  { n: "04", titulo: "Crédito", texto: "Só então o crédito volta para o caixa.", ico: icoCadeado, estado: "locked", status: "Travado na etapa 3" },
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

/* ---------- Jornada do credito (secao #credito) ---------- */
/* Etapas e frentes numa jornada so. Cada etapa abre um painel com o risco, a
   acao da Kontiva e o mockup que antes ficava na aba correspondente. Os
   status repetem os do card do hero, de proposito. */

export type Tom = "ok" | "risk" | "neutral";
export type EstadoJornada = "neutral" | "critical" | "attention";

export interface EtapaJornada {
  id: string;
  n: string;
  nome: string;
  icon: "shoppingCart" | "wallet" | "shieldAlert" | "trendingDown";
  status: string;
  estado: EstadoJornada;
  falha: { t: string; d: string };
  kontiva: string;
  tag: string;
  exemplo: string;
  cta: string;
  mock: {
    screen: string;
    screenTag: string;
    rows: { b: string; s: string; badge: string; tone: Tom }[];
    toggle?: string;
  };
}

export const jornada: EtapaJornada[] = [
  {
    id: "compra", n: "01", nome: "Compra", icon: "shoppingCart", status: "Nota emitida", estado: "neutral",
    falha: { t: "O mais barato pode sair mais caro.", d: "Menos crédito, custo final maior." },
    kontiva: "Compara fornecedores pelo custo real, com crédito, regime e forma de pagamento na conta.",
    tag: "Análise por IA",
    exemplo: "Fornecedor A × Fornecedor B, custo depois do crédito.",
    cta: "Comparar meus fornecedores",
    mock: {
      screen: "Comparativo de compra", screenTag: "Custo depois do crédito",
      rows: [
        { b: "Fornecedor A", s: "menor preço bruto", badge: "Maior risco de crédito", tone: "risk" },
        { b: "Fornecedor B", s: "preço maior", badge: "Crédito mais previsível", tone: "ok" },
        { b: "Custo real", s: "mesmo cenário, mesmo prazo", badge: "Para decisão", tone: "neutral" },
      ],
    },
  },
  {
    id: "pagamento", n: "02", nome: "Pagamento", icon: "wallet", status: "Pago", estado: "neutral",
    falha: { t: "Forma de pagamento errada.", d: "Em algumas operações, split ou RAD protegem melhor o crédito." },
    kontiva: "Simula guia, split e RAD nas operações elegíveis e mostra o efeito no capital de giro mês a mês.",
    tag: "Aprovação humana",
    exemplo: "Cenário tradicional × split/RAD, impacto mês a mês.",
    cta: "Simular meu caixa",
    mock: {
      screen: "Fluxo de caixa", screenTag: "Simulação mês a mês",
      rows: [
        { b: "Recolhimento tradicional", s: "crédito com prazo de restituição", badge: "Cenário 1", tone: "neutral" },
        { b: "Split/RAD", s: "operações elegíveis: crédito mais protegido, possível impacto no capital de giro", badge: "Facultativo", tone: "neutral" },
        { b: "Capital de giro", s: "em jogo conforme fornecedor, forma de pagamento e estratégia de recolhimento", badge: "A simular", tone: "risk" },
      ],
      toggle: "Comparar: cenário tradicional × split/RAD",
    },
  },
  {
    id: "recolhimento", n: "03", nome: "Recolhimento", icon: "shieldAlert", status: "Sem confirmação", estado: "critical",
    falha: { t: "Recolhimento sem confirmação.", d: "Se o fornecedor não recolhe, o crédito fica em risco." },
    kontiva: "Acompanha o recolhimento de cada fornecedor e mostra quem gera crédito e quem precisa de revisão.",
    tag: "Fonte verificada",
    exemplo: "R$ 214.700 em crédito sob revisão. 7 fornecedores exigem revisão.",
    cta: "Ver meu risco de crédito",
    mock: {
      screen: "Fornecedores", screenTag: "Risco de crédito",
      rows: [
        { b: "Aurora Insumos", s: "recolhimento confirmado", badge: "Gera crédito", tone: "ok" },
        { b: "Nordeste Log", s: "crédito parcial", badge: "Simples", tone: "neutral" },
        { b: "Vertex Peças", s: "sem confirmação", badge: "Revisar", tone: "risk" },
        { b: "Meta Serviços", s: "sem confirmação", badge: "Revisar", tone: "risk" },
      ],
    },
  },
  {
    id: "caixa-margem", n: "04", nome: "Caixa e margem", icon: "trendingDown", status: "Travado na etapa 3", estado: "attention",
    falha: {
      t: "O caixa sente antes de todo mundo.",
      d: "O crédito que atrasa aperta o capital de giro, e o contrato que não foi revisto perde margem sem o preço mudar.",
    },
    kontiva: "Projeta o efeito no caixa mês a mês, cruza contratos com IBS/CBS e aponta quais preços revisar. O reajuste só sai com aprovação do seu time.",
    tag: "Análise por IA",
    exemplo: "Contrato de 24 meses, margem pressionada, revisão recomendada.",
    cta: "Avaliar minha margem",
    mock: {
      screen: "Contratos e preços", screenTag: "Memória de cálculo",
      rows: [
        { b: "Contrato 24 meses", s: "reajuste por IPCA", badge: "Margem pressionada", tone: "risk" },
        { b: "Custo tributário novo", s: "IBS/CBS por fora", badge: "Recalculado", tone: "neutral" },
        { b: "Preço sob revisão", s: "com memória de cálculo", badge: "Para aprovação", tone: "ok" },
      ],
      toggle: "Nada é aplicado sem aprovação do seu time",
    },
  },
];

/* ---------- Plataforma (carrossel) ---------- */
/* Slides 1, 2 e 4 usam capturas da interface (public/images/telas). Nao ha
   captura de comparacao de cenarios nem de acoes priorizadas nos repos da LP
   de empresas e de escritorios: os slides 3 e 5 sao mockups em HTML/CSS com
   dados ilustrativos coerentes com o resto da pagina. */

export interface SlideBase { id: string; titulo: string; descricao: string; url: string }
export interface SlideImagem extends SlideBase { tipo: "imagem"; w: number; h: number; alt: string }
export interface SlideCenarios extends SlideBase {
  tipo: "cenarios"; alt: string;
  anos: string[];
  linhas: { k: string; v: string[]; total?: boolean }[];
}
export interface SlideAcoes extends SlideBase {
  tipo: "acoes"; alt: string;
  acoes: { prioridade: "Alta" | "Média"; titulo: string; origem: string }[];
}
export type Slide = SlideImagem | SlideCenarios | SlideAcoes;

export const slides: Slide[] = [
  {
    id: "fornecedores", tipo: "imagem", w: 1145, h: 575,
    titulo: "Fornecedores",
    descricao: "Veja quem gera crédito e quem precisa de revisão, por regime, CNAE e risco de IBS/CBS.",
    url: "app.kontiva.ai/fornecedores",
    alt: "Interface da plataforma Kontiva: fornecedores com indicadores de ativos, sem regime e crédito presumido, e a lista com regime, ramo e situação de crédito de IBS/CBS. Nomes ocultados.",
  },
  {
    id: "nova-simulacao", tipo: "imagem", w: 466, h: 590,
    titulo: "Nova simulação",
    descricao: "Ano e regime em poucos campos. A Kontiva calcula IBS e CBS para o perfil da sua empresa.",
    url: "app.kontiva.ai/simulacoes",
    alt: "Interface da plataforma Kontiva: formulário de nova simulação com empresa, nome da simulação, ano do cenário e regime tributário Lucro Presumido.",
  },
  {
    id: "comparar", tipo: "cenarios",
    titulo: "Comparar cenários",
    descricao: "2027, 2029 e 2033 lado a lado: como a carga tributária da sua empresa muda na transição.",
    url: "app.kontiva.ai/simulacoes/comparar",
    alt: "Interface da plataforma Kontiva: comparação da carga tributária em 2027, 2029 e 2033, com IBS/CBS, ICMS/ISS e carga total. Dados ilustrativos.",
    anos: ["2027", "2029", "2033"],
    linhas: [
      { k: "Carga IBS/CBS", v: ["9,4%", "11,2%", "27,1%"] },
      { k: "ICMS/ISS", v: ["17,2%", "15,5%", "0,0%"] },
      { k: "Carga total", v: ["26,6%", "26,7%", "27,1%"], total: true },
    ],
  },
  {
    id: "cronograma", tipo: "imagem", w: 626, h: 592,
    titulo: "Cronograma da Reforma",
    descricao: "As alíquotas de IBS, CBS, ICMS e ISS de cada ano, até 2033.",
    url: "app.kontiva.ai/simulacoes/cronograma",
    alt: "Interface da plataforma Kontiva: tabela do cronograma da Reforma com as alíquotas de IBS, CBS e a fração de ICMS/ISS cobrada de 2026 a 2033.",
  },
  {
    id: "prioridades", tipo: "acoes",
    titulo: "Prioridades",
    descricao: "O que fazer primeiro, em ordem de impacto. Cada ação espera a aprovação do seu time.",
    url: "app.kontiva.ai/acoes",
    alt: "Interface da plataforma Kontiva: lista de ações priorizadas por impacto, todas aguardando aprovação do time. Dados ilustrativos.",
    acoes: [
      { prioridade: "Alta", titulo: "Revisar recolhimento de Vertex Peças", origem: "Crédito sob revisão" },
      { prioridade: "Alta", titulo: "Revisar recolhimento de Meta Serviços", origem: "Crédito sob revisão" },
      { prioridade: "Média", titulo: "Repassar IBS/CBS no contrato de 24 meses", origem: "Margem pressionada" },
      { prioridade: "Média", titulo: "Simular split/RAD nas vendas para SP", origem: "Capital de giro" },
    ],
  },
];

/* ---------- Comparativo ---------- */

export type Celula = "yes" | "no" | "part";
export const comparativo = {
  criterios: [
    { k: "Responde dúvidas", curto: "Dúvidas" },
    { k: "Simula cenários", curto: "Cenários" },
    { k: "Monitora fornecedores", curto: "Fornec." },
    { k: "Opera todo mês", curto: "Todo mês" },
  ],
  solucoes: [
    { name: "Chatbot", icon: "messageSquare", frase: "Responde quando você pergunta.", cells: ["yes", "no", "no", "no"] as Celula[] },
    { name: "Consultoria", icon: "fileText", frase: "Entrega um relatório com data.", cells: ["yes", "yes", "part", "no"] as Celula[] },
    { name: "ERP", icon: "database", frase: "Registra o que já aconteceu.", cells: ["part", "part", "part", "part"] as Celula[] },
  ],
  kontiva: { name: "Kontiva", frase: "Acompanha, simula e avisa, todo mês.", cells: ["yes", "yes", "yes", "yes"] as Celula[] },
  label: { yes: "Sim", no: "Não", part: "Parcial" } as Record<Celula, string>,
} as const;

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
