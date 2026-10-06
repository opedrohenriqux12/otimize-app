import type { Scene, ProblemCard, RewardItem, MecCourse, PodcastTrack } from '../types';

export const SCENES: Scene[] = [
  { id: 1, slug: 'abertura', title: 'Otimize', subtitle: 'Otimizar o presente para construir o futuro' },
  { id: 2, slug: 'problema', title: 'O Desafio Atual', subtitle: 'As dores da geração conectada' },
  { id: 3, slug: 'solucao', title: 'A Solução Otimize', subtitle: 'Gamificação com propósito real' },
  { id: 4, slug: 'recompensas', title: 'Recompensas Reais', subtitle: 'Do digital ao físico: seu foco vale prêmios' },
  { id: 5, slug: 'sophia-ia', title: 'IA Sophia', subtitle: 'Copiloto de hábitos que descomplica metas' },
  { id: 6, slug: 'aprenda-mais', title: 'Integração MEC', subtitle: 'Estudos no Aprenda Mais validados em tempo real' },
  { id: 7, slug: 'podcasts', title: 'Conteúdo em Áudio', subtitle: 'Podcasts que geram pontos e conhecimento' },
  { id: 8, slug: 'mockups', title: 'Experimente a Interface', subtitle: 'Mockups 100% interativos em código vivo' },
  { id: 9, slug: 'open-source', title: 'Open Source', subtitle: 'Transparência, comunidade e código aberto' },
  { id: 10, slug: 'encerramento', title: 'Comece Agora', subtitle: 'Faça parte da revolução do uso consciente' }
];

export const PROBLEMS_DATA: ProblemCard[] = [
  {
    id: 'p1',
    icon: 'Smartphone',
    title: 'Uso excessivo de redes sociais',
    description: 'Rolar o feed sem perceber consome horas preciosas que poderiam ser dedicadas ao crescimento pessoal e aos estudos.',
    tag: 'Rotina & Telas'
  },
  {
    id: 'p2',
    icon: 'Target',
    title: 'Dificuldade de manter o foco',
    description: 'Distrações constantes dificultam manter uma rotina consistente de estudos para exames, ENEM ou cursos técnicos.',
    tag: 'Produtividade'
  },
  {
    id: 'p3',
    icon: 'ZapOff',
    title: 'Procrastinação e paralisia',
    description: 'Metas grandes e complexas assustam, gerando ansiedade e adiamento sistemático das tarefas importantes.',
    tag: 'Foco Mental'
  },
  {
    id: 'p4',
    icon: 'Award',
    title: 'Falta de recompensa imediata',
    description: 'Hábitos saudáveis demoram para gerar frutos visíveis. Falta um incentivo tangível no dia a dia.',
    tag: 'Motivação'
  },
  {
    id: 'p5',
    icon: 'BookOpen',
    title: 'Cursos do MEC pouco aproveitados',
    description: 'A plataforma Aprenda Mais oferece milhares de horas de aulas gratuitas, mas com baixo engajamento jovem.',
    tag: 'Educação'
  },
  {
    id: 'p6',
    icon: 'ShieldAlert',
    title: 'Apps de bloqueio punitivos',
    description: 'Aplicativos tradicionais apenas bloqueiam ou punem o usuário, criando frustração em vez de incentivo positivo.',
    tag: 'Experiência'
  }
];

export const REWARDS_DATA: RewardItem[] = [
  {
    id: 'r1',
    title: 'Gift Card iFood / Uber (R$ 30)',
    points: 300,
    category: 'digital',
    image: 'Utensils',
    description: 'Desconto em entregas ou viagens para facilitar sua rotina.'
  },
  {
    id: 'r2',
    title: 'Assinatura Spotify / Steam Voucher',
    points: 450,
    category: 'digital',
    image: 'Music',
    description: 'Meses de música sem anúncios ou créditos na sua conta de jogos.'
  },
  {
    id: 'r3',
    title: 'Livro Físico "Hábitos Atômicos"',
    points: 800,
    category: 'fisico',
    image: 'Book',
    description: 'Entrega física em casa do best-seller sobre transformação de rotina.'
  },
  {
    id: 'r4',
    title: 'Garrafa Térmica Otimize 750ml',
    points: 1200,
    category: 'fisico',
    image: 'Coffee',
    description: 'Kit de hidratação premium exclusivo com gravação a laser.'
  },
  {
    id: 'r5',
    title: 'Fone Bluetooth com Redução de Ruído',
    points: 2500,
    category: 'fisico',
    image: 'Headphones',
    description: 'Equipamento de alta fidelidade para estudos e podcasts em foco.'
  }
];

export const MEC_COURSES_DATA: MecCourse[] = [
  {
    id: 'm1',
    title: 'Lógica de Programação e Algoritmos',
    institution: 'Aprenda Mais MEC',
    hours: 40,
    points: 100,
    progress: 75,
    category: 'Tecnologia'
  },
  {
    id: 'm2',
    title: 'Fundamentos de Marketing Digital',
    institution: 'Aprenda Mais MEC',
    hours: 30,
    points: 75,
    progress: 100,
    category: 'Negócios'
  },
  {
    id: 'm3',
    title: 'Inglês Aplicado ao Mercado de Trabalho',
    institution: 'Aprenda Mais MEC',
    hours: 60,
    points: 150,
    progress: 40,
    category: 'Idiomas'
  }
];

export const PODCASTS_DATA: PodcastTrack[] = [
  {
    id: 'pod1',
    title: 'Foco no que Importa: Ergonomia & Saúde Mental',
    author: 'Otimize Cast #14',
    duration: '18 min',
    points: 50,
    category: 'Saúde & Foco'
  },
  {
    id: 'pod2',
    title: 'Como Vencer a Procrastinação nos Estudos',
    author: 'Otimize Cast #09',
    duration: '22 min',
    points: 60,
    category: 'Produtividade'
  },
  {
    id: 'pod3',
    title: 'Do Zero ao Primeiro Emprego na Tech',
    author: 'Otimize Cast #21',
    duration: '25 min',
    points: 70,
    category: 'Carreira'
  }
];
