import { Shield, Sparkles, Zap, Award, Droplets, Gauge, SprayCan, Car } from 'lucide-react';

export const SERVICES = [
  {
    id: 'manutencao',
    title: 'Tratamento de Manutenção',
    description: 'Limpeza técnica detalhada para manter a proteção e o brilho do veículo.',
    icon: Droplets,
    details: 'Pré Lavagem;\nLavagem;\nLavagem de Tapetes;\nAspiração Interna Completa;\nLimpeza Interna Básica com APC;\nLimpeza dos vidros;\nPneu pretinho;',
    price: 'Hatch R$80,00\nSedan R$100,00',
    videoUrl: 'https://www.instagram.com/reel/DIHrxosRq5e/?igsh=d245ZGphZjZ3cWV3'
  },
  {
    id: 'detalhado',
    title: 'Tratamento Detalhado',
    description: 'Um processo minucioso para devolver a aparência de zero km ao seu carro.',
    icon: Sparkles,
    details: 'Lavagem Detalhada Externa \n(incluído pré lavagem;\nDesincrustação de Emblemas;\nDetalhamento de Rodas e Caixas de Rodas;\nLavagem de Tapetes;\nAspiração Interna Completa (incluído porta malas);\nLimpeza do Estepe;\nLimpeza Detalhada Interna (incluído saídas de ar, colunas, painel e console);\nLimpeza dos vidros;\nSelante nos Pneus;\nProteção de Pintura;\nRevitalização de Plásticos Internos e Externos;',
    price: 'Hatch R$150,00\nSedan R$170,00',
    videoUrl: 'https://www.instagram.com/reel/DNBZqZdR3t7/?igsh=NDV4cjY2Ym4xa2Zi'
  },
  {
    id: 'interna',
    title: 'Higienização Interna',
    description: 'Limpeza profunda e esterilização de estofados, painéis e carpetes.',
    icon: SprayCan,
    details: 'Todos os itens do Tratamento Detalhado +\nDesmontagem dos Bancos;\nHigienização nos bancos (tecido ou couro);\nHigienização no forro de teto e carpete;\n* No serviço de higienização o veículo é totalmente sanitizado o que impede a proliferação de fungos e bactérias por até 6 meses',
    price: 'A partir de R$450',
    videoUrl: 'https://www.instagram.com/reel/DOSG3u8jdyO/?igsh=ZnB2bzI1NWk4MW95'
  },
  {
    id: 'pintura',
    title: 'Correção de Pintura',
    description: 'Remoção de riscos e marcas para um reflexo perfeito e profundo.',
    icon: Car,
    details: 'Polimento Comercial + Cristalização > A partir de R$450\nPolimento Técnico + vitrificação > A partir de R$1200\nPolimento e Vitrificação de Farol (1 ano de proteção) > A partir de R$120\nRestauração de Farol com vapor de polímero (2 anos de proteção) > A partir de R$ 200 (o par)',
    price: 'A partir de R$450',
    videoUrl: 'https://www.instagram.com/reel/DNW49gotb3k/?igsh=MTg5ZG91dmY3emNiYg%3D%3D'
  },
  {
    id: 'extras',
    title: 'Serviços Extras',
    description: 'Soluções específicas para necessidades pontuais do seu veículo.',
    icon: Gauge,
    details: 'Enceramento: R$50,00\nRemoção de chuva ácida dos vidros +  cristalização de para-brisa: R$100,00\nEnceramento técnico (com descontaminação de pintura: R$150,00\nLavagem técnica de motor: R$120,00\nAplicação de Verniz de motor: R$50,00',
    price: 'Variável',
    videoUrl: 'https://www.instagram.com/reel/DM3i-LwxZyE/?igsh=MWF4cnFqc3hjZWRrYQ%3D%3D'
  }
];

export const BENEFITS = [
  {
    title: 'Organização Profissional',
    description: 'Processos padronizados que garantem eficiência e previsibilidade.',
    icon: Shield
  },
  {
    title: 'Mais Vendas',
    description: 'Um visual impactante que atrai clientes de alto padrão.',
    icon: Zap
  },
  {
    title: 'Autoridade no Mercado',
    description: 'Posicione sua marca como referência em estética automotiva.',
    icon: Award
  },
  {
    title: 'Atendimento Premium',
    description: 'Experiência do cliente elevada desde o primeiro contato.',
    icon: Sparkles
  }
];