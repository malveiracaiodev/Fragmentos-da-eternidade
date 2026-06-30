// Importe apenas o TIPO (com letra maiúscula e singular) se precisar tipar algo 
import { capitulo1 } from './data/chapters/capitulo1'; // Caminho para o arquivo modularizado[cite: 20]

// Se você precisar exportar a tipagem dos blocos de parágrafos
export interface ParagraphBlock {
  id?: string;
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

// Exportação unificada dos capítulos usando o seu arquivo real[cite: 20]
export const CHAPTERS: Chapter[] = [
  capitulo1 as unknown as Chapter
];

// Suas armas rúnicas continuam aqui embaixo...
export const weapons: any[] = [
  // ... seus dados de armas
];