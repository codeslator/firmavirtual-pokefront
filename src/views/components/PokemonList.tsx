import { FC, useState } from 'react';
import { PokemonItem } from '.';
import { usePokemon } from '../../hooks';
import { Pokemon } from '../../interfaces';
import { Button } from 'react-daisyui';
import { VerticalCardSkeleton } from '../common';

interface PokemonListProps { }

const PokemonList: FC<PokemonListProps> = ({ }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const { data, isFetching } = usePokemon({ page, limit });

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleStartPage = () => {
    setPage(1);
  };

  const handleEndPage = () => {
    setPage(Math.ceil(data?.count / limit));
  };

  const handleLimit = (offset: number) => {
    setLimit(offset);
  };

  console.log(data)
  return (
    <>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-flow-row gap-4">
        {isFetching && (
          <>
            <VerticalCardSkeleton />
            <VerticalCardSkeleton />
            <VerticalCardSkeleton />
            <VerticalCardSkeleton />
            <VerticalCardSkeleton />
            <VerticalCardSkeleton />
          </>
        )}
        {(data.results.length > 0) && (
          <>
            {data.results.map((pokemon: Pokemon) => (
              <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))}
          
          </>
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <Button
            color="accent"
            onClick={handleStartPage}
            disabled={page <= 1}
            className="mr-2"
          >
            Primera Página
          </Button>
          <Button
            color="accent"
            onClick={handlePreviousPage}
            disabled={page <= 1}
            className="mr-2"
          >
            Anterior
          </Button>

        </div>
        <span className="text-md my-5">Página {page} de {Math.ceil(data?.count / limit)}</span>
        <div>
          <Button
            color="accent"
            onClick={handleNextPage}
            disabled={page >= Math.ceil(data?.count / limit)}
            className="ml-2"
          >
            Siguiente
          </Button>
          <Button
            color="accent"
            onClick={handleEndPage}
            disabled={page >= Math.ceil(data?.count / limit)}
            className="ml-2"
          >
            Última Página
          </Button>
        </div>
      </div>
    </>
  );
};

export default PokemonList;