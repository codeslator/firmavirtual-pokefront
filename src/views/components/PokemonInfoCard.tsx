import { FC } from 'react';
import { Badge, Button, Card, Progress } from 'react-daisyui';
import { Ability, Pokemon, Type } from '../../interfaces';
import PokemonTypeBadge from './PokemonTypeBadge';

interface PokemonInfoCardProps {
  pokemon: Pokemon;
}

const PokemonInfoCard: FC<PokemonInfoCardProps> = ({ pokemon }) => {

  const playCry = () => {
    const cry = new Audio(pokemon.cry_url);
    cry.play();
  }

  return (
    <Card side="lg" className="mb-3 lg:items-start shadow-lg hover:bg-zinc-900 hover:bg-opacity-50 hover:transition ease delay-100">
      <Card.Image src={pokemon.image_url} alt={pokemon.name} />
      <Card.Body>
        <Card.Title tag="h2" className="text-2xl">
          #{pokemon.id} - {pokemon.name}
        </Card.Title>
        <></>
        <div className="flex flex-row items-center m-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className={`w-5 h-5 me-2 text-primary flex-shrink-0`} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3s3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3s-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
          </svg>
          <span className="text-lg font-semibold">{pokemon.class}</span>
        </div>
        <p>{pokemon.description}</p>
        <div className="w-12/12 lg:w-8/12 2xl:w-6/12 flex flex-row">
          {pokemon.types.map((type: Type) => (
            <PokemonTypeBadge key={type.id} keyName={type.key} typeName={type.name} />
          ))}
        </div>
        <div className="w-12/12 lg:w-10/12 xl:w-8/12 2xl:w-full flex flex-row">
          <span className="text-lg font-bold">Habilidades:</span>
          <div className="mx-2">
            {pokemon.abilities.map((ability: Ability) => (
              <Badge size="lg" color="accent" outline className="mr-2" key={ability.key}>
                {ability.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <span className="text-lg font-bold">Estadisticas Base: </span>
          <div className="flex flex-row items-center m-0">
            <span className="w-5/12 sm:w-3/12 md:w-4/12 xl:w-2/12 text-sm">PS</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.hp} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-5/12 sm:w-3/12 md:w-4/12 xl:w-2/12 text-sm">Ataque</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.attack} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-5/12 sm:w-3/12 md:w-4/12 xl:w-2/12 text-sm">Defensa</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.defense} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-5/12 sm:w-3/12 md:w-4/12 xl:w-2/12 text-sm">Ataque Especial</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.special_attack} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-5/12 sm:w-3/12 md:w-4/12 xl:w-2/12 text-sm">Defensa Especial</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.special_defense} />
          </div>
          <div className="flex flex-row items-center m-0">
            <span className="w-5/12 sm:w-3/12 md:w-4/12 xl:w-2/12 text-sm">Velocidad</span>
            <Progress max={255} color="accent" className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-10/12" value={pokemon.stats.speed} />
          </div>
        </div>

        <Card.Actions className="justify-start">
          <Button
            onClick={playCry}
            size="sm"
            color="primary"
            startIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className={`w-5 h-5 me-2 flex-shrink-0`} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3s3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3s-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
          </svg>
            }
          >
            Grito
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default PokemonInfoCard;