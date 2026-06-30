import { capitulo1 } from './chapters/capitulo1';

// Tipagens do Sistema de História e Cenas
export interface ParagraphBlock {
  id?: string; // Mantido para retrocompatibilidade
  tipo: 'paragrafo' | 'dialogo' | 'video';
  texto?: string;
  src?: string;
}

export interface Scene {
  tituloCena: string;
  conteudo: ParagraphBlock[];
}

export interface Chapter {
  id: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  cenas: Scene[];
}

// Exportação Centralizada dos Capítulos (Puxando os dados reais de capitulo1.ts)
export const CHAPTERS: Chapter[] = [
  capitulo1 as unknown as Chapter
];

// Armas e Artefatos do Universo
export const weapons: any[] = [
  {
    id: 'art-1',
    name: 'Espada do Alvorecer',
    type: 'Lâmina Rúnica',
    bearer: 'Caleb',
    description: 'Uma arma antiga forjada com fragmentos de éter solidificado, capaz de cortar a própria estrutura do espaço quando canalizada corretamente.',
    effect: 'Causa dano baseado na vontade do portador e ilumina caminhos ocultos.',
    etherCost: 30,
    imageUrl: 'https://images.unsplash.com/photo-1595152230535-0ad216c76ec2?auto=format&fit=crop&q=80&w=600',
    unlockId: null
  },
  {
    id: 'art-2',
    name: 'Foice do Julgamento',
    type: 'Arma de Haste',
    bearer: 'Revelado no Cap 2',
    description: 'Um artefato sombrio desvelado em meio aos confrontos do Capítulo 2. Suas runas drenam a vitalidade do ambiente.',
    effect: 'Aumenta o dano conforme a energia residual ao redor e corrompe as defesas inimigas.',
    etherCost: 45,
    imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=600',
    unlockId: 'unlock_weapon_scythe'
  },
  {
    id: 'art-3',
    name: 'Égide de Éter',
    type: 'Relíquia Protetora',
    bearer: 'Revelado no Cap 2',
    description: 'Um escudo rúnico impenetrável composto por matrizes de éter purificado, capaz de repelir ataques dimensionais.',
    effect: 'Cria uma barreira estática que reflete projéteis e purifica efeitos negativos.',
    etherCost: 25,
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
    unlockId: 'unlock_weapon_aegis'
  }
];