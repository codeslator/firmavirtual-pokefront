import { useQuery } from "@tanstack/react-query";
import { pokemonActions } from "../services";

interface Options {
  id: number;
}

const usePokemonDetails = ({ id }: Options) => {
  const { isLoading, isError, data: pokemon, isFetching, error } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: ()  => pokemonActions.getPokemonById(id),
    staleTime: 1000 * 60 * 60,
  })
  
  return {
    error,
    isError,
    isLoading,
    isFetching,
    pokemon
  }
}

export default usePokemonDetails;