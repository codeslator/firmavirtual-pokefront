import { firmaVirtualApi } from "../apis";
import { Pokemon, PokemonResults } from "../interfaces";

export type OrderType = 'ASC' | 'DESC';

export interface GetAllPokemonOptions {
  page?: number;
  limit?: number;
  sort?: string;
  order?: OrderType;
}

export const getAllPokemon = async ({ page, limit, sort = 'id', order = 'ASC' }: GetAllPokemonOptions): Promise<PokemonResults> => {
  const params = new URLSearchParams({
    page: page!.toString(),
    limit: limit!.toString(),
    sort,
    order
  });
  console.log(params.toString());
  const { data } = await firmaVirtualApi.get<PokemonResults>(`/pokemon?${params}`);
  return data;
};


export const getPokemonById = async (id: number): Promise<Pokemon> => {
  const { data } = await firmaVirtualApi.get<Pokemon>(`/pokemon/${id}`);
  return data;
};
