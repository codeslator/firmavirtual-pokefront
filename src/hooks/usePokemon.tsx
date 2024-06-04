import { useQuery } from "@tanstack/react-query"
import { pokemonActions } from "../services"

interface Options {
  page: number,
  limit: number,
}

const useProducts = ({ page, limit }: Options) => {
  const { isLoading, isError, data = { results: [], count: 0 }, isFetching, error } = useQuery({
    queryKey: ['pokemon', { page, limit }],
    queryFn: ()  => pokemonActions.getAllPokemon({ page, limit }),
    // staleTime: 1000 * 60 * 60,
  })
  
  return {
    error,
    isError,
    isLoading,
    isFetching,
    data
  }
}

export default useProducts;