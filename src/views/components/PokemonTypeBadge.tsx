import { FC } from 'react';
import { getTypeBadgeImage } from '../../global/functions';

interface PokemonTypeBadgeProps {
  keyName: string;
  typeName: string;
}

const PokemonTypeBadge: FC<PokemonTypeBadgeProps> = ({ typeName, keyName }) => {
  return (
    <div className={`bg-pokemon-${keyName} text-white text-sm w-full font-medium me-2 px-2.5 py-0.5 rounded flex flex-row justify-center items-center`}>
      <img src={getTypeBadgeImage(keyName)} className="w-5" />
      <span className="mx-2 uppercase">{typeName}</span>
    </div>
  );
};

export default PokemonTypeBadge;