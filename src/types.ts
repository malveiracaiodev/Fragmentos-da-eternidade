export interface Character {
  id: string;
  name: string;
  title: string;
  role: string;
  description: string;
  affinity: string;
  stats: {
    strength: number;
    ether: number;
    shadows: number;
    will: number;
  };
  imageUrl: string;
  relic: string;
  lore: {
    base: string;
    origin?: string; // Só aparece após o "desbloquear()"
  };
  unlockKey?: string; // Ex: 'caleb_origin' ou 'kylo_appearance'
}