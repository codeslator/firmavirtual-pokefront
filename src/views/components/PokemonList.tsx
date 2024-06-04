import { FC } from 'react';
import { PokemonItem } from '.';

interface PokemonListProps {}

const PokemonList: FC<PokemonListProps> = ({}) => {
  return (
    <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-flow-row gap-4">
      

      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
    </div>
  );
};

export default PokemonList;