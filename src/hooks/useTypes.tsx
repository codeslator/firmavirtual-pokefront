import { useQuery } from "@tanstack/react-query"
import { typesActions } from "../services"

const useProducts = () => {
  const { isLoading, isError, data: types = [], isFetching, error } = useQuery({
    queryKey: ['types'],
    queryFn: ()  => typesActions.getAllTypes(),
    staleTime: 1000 * 60 * 60,
  })
  
  return {
    error,
    isError,
    isLoading,
    isFetching,
    types
  }
}

export default useProducts;