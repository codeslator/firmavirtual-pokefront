import { POKEMON_TYPE } from ".";
import AstralBadge from '../views/assets/images/astral.png';
import BugBadge from '../views/assets/images/bug.svg';
import DarkBadge from '../views/assets/images/dark.svg';
import DragonBadge from '../views/assets/images/dragon.svg';
import ElectricBadge from '../views/assets/images/electric.svg';
import FairyBadge from '../views/assets/images/fairy.svg';
import FightingBadge from '../views/assets/images/fighting.svg';
import FireBadge from '../views/assets/images/fire.svg';
import FlyingBadge from '../views/assets/images/flying.svg';
import GhostBadge from '../views/assets/images/ghost.svg';
import GrassBadge from '../views/assets/images/grass.svg';
import GroundBadge from '../views/assets/images/ground.svg';
import IceBadge from '../views/assets/images/ice.svg';
import NormalBadge from '../views/assets/images/normal.svg';
import PoisonBadge from '../views/assets/images/poison.svg';
import PsychicBadge from '../views/assets/images/psychic.svg';
import RockBadge from '../views/assets/images/rock.svg';
import SteelBadge from '../views/assets/images/steel.svg';
import WaterBadge from '../views/assets/images/water.svg';

export const getTypeBadgeImage = (type: string) => {
  switch (type) {
    case POKEMON_TYPE.DARK: return DarkBadge;
    case POKEMON_TYPE.BUG: return BugBadge;
    case POKEMON_TYPE.DRAGON: return DragonBadge;
    case POKEMON_TYPE.ELECTRIC: return ElectricBadge;
    case POKEMON_TYPE.FAIRY: return FairyBadge;
    case POKEMON_TYPE.FIGHTING: return FightingBadge;
    case POKEMON_TYPE.FIRE: return FireBadge;
    case POKEMON_TYPE.FLYING: return FlyingBadge;
    case POKEMON_TYPE.GHOST: return GhostBadge;
    case POKEMON_TYPE.GRASS: return GrassBadge;
    case POKEMON_TYPE.GROUND: return GroundBadge;
    case POKEMON_TYPE.ICE: return IceBadge;
    case POKEMON_TYPE.NORMAL: return NormalBadge;
    case POKEMON_TYPE.POISON: return PoisonBadge;
    case POKEMON_TYPE.PSYCHIC: return PsychicBadge;
    case POKEMON_TYPE.ROCK: return RockBadge;
    case POKEMON_TYPE.STEEL: return SteelBadge;
    case POKEMON_TYPE.WATER: return WaterBadge;
    case POKEMON_TYPE.STELLAR: return AstralBadge;
  }
}