export interface PokemonResults {
  results: Pokemon[];
  count: number;
}

export interface Pokemon {
  id: number;
  name: string;
  description: string;
  class: string;
  height: number;
  weight: number;
  image_url: string;
  cry_url: string;
  stats: Stats;
  types: Type[];
  abilities: Ability[];
}

export interface Ability {
  id: number;
  key: string;
  name: string;
}

export interface Type {
  id: number;
  key: string;
  name: string;
}

export interface Stats {
  id: number;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}
