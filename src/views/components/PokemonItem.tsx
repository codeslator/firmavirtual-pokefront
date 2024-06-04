import { FC } from 'react';
import { Badge, Card, Progress } from 'react-daisyui';
import PokemonTypeBadge from './PokemonTypeBadge';
// import { Pokemon } from '../../interfaces';

interface PokemonItemProps {
  // pokemon: Pokemon;
}

const PokemonItem: FC<PokemonItemProps> = ({ }) => {
  return (
    <Card className="border border-gray-200 shadow-md  dark:border-gray-700">
      <Card.Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Shoes" />
      <Card.Body>
        <Card.Title tag="h3">
          Number - Name
        </Card.Title>
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">HP</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={10} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">ATK</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={10} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">DEF</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={10} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">SpA</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={10} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">SpD</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={10} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">SPD</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={10} />
          </div>
        </div>
        <Card.Actions className="grid grid-cols-2 md:grid-cols-1 2xl:grid-cols-2">
          <PokemonTypeBadge keyName="grass" typeName='Planta' />
          <PokemonTypeBadge keyName="grass" typeName='Planta' />
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default PokemonItem;