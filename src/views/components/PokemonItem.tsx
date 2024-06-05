import { FC } from 'react';
import { Card, Progress } from 'react-daisyui';
import PokemonTypeBadge from './PokemonTypeBadge';
import { Pokemon, Type } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../global';

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem: FC<PokemonItemProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const goToPokemonDetails = () => {
    navigate(`${ROUTES.POKEMON}/${pokemon.id}`)
  }

  return (
    <Card
    className="border border-gray-200 shadow-md  dark:border-gray-700 hover:bg-zinc-900 hover:bg-opacity-50 hover:cursor-pointer hover:shadow-xl hover:transition ease delay-100"
    onClick={goToPokemonDetails}
    >
      <Card.Image src={pokemon.image_url} alt="Shoes" />
      <Card.Body>
        <Card.Title tag="h3">
          #{pokemon.id} - {pokemon.name}
        </Card.Title>
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">HP</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.hp} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">ATK</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.attack} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">DEF</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.defense} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">SpA</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.special_attack} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">SpD</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.special_defense} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-1/12 sm:w-2/12 md:w-3/12 xl:w-2/12 text-[12px]">SPD</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.speed} />
          </div>
        </div>
        <Card.Actions className="grid grid-cols-2 md:grid-cols-1 2xl:grid-cols-2">
          {pokemon.types.map((type: Type) => (
            <PokemonTypeBadge key={type.id} keyName={type.key} typeName={type.name} />
          ))}
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default PokemonItem;