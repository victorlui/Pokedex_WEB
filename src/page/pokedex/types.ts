export interface Pokemons {
  name?: string;
}

export interface Types {
  type: {
    name: string;
  };
}

export interface PokemonAbility {
  weight?: number;
  height?: number;
  types: Types[];
}
