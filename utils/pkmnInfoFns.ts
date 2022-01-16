/**
  __________       __                                   .___        _____       
  \______   \____ |  | __ ____   _____   ____   ____    |   | _____/ ____\____  
   |     ___/  _ \|  |/ // __ \ /     \ /  _ \ /    \   |   |/    \   __\/  _ \ 
   |    |  (  <_> )    <\  ___/|  Y Y  (  <_> )   |  \  |   |   |  \  | (  <_> )
   |____|   \____/|__|_ \\___  >__|_|  /\____/|___|  /  |___|___|  /__|  \____/ 
                       \/    \/      \/            \/            \/       

 * This file contains several helper functions used to extrapolate data from the `pokenode-ts` API.
 * 
 */
import type { PokemonStat, PokemonType } from 'pokenode-ts';
import {
  faBolt,
  faBrain,
  faBug,
  faCube,
  faDatabase,
  faDragon,
  faDrumSteelpan,
  faFireAlt,
  faGhost,
  faHamsa,
  faSeedling,
  faSnowflake,
  faStar,
  faTint,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import {
  faQuestion,
  faBullseye,
  faFistRaised,
  faFeatherAlt,
  faSkull,
} from '@fortawesome/free-solid-svg-icons';

export type TypeData = {
  color: string;
  name?: string;
  icon: IconDefinition;
};

export type FullStatData = {
  name: string;
  value: number;
};

const getTypeData = (name: string): TypeData => {
  switch (name) {
    case 'normal':
      return toTypeData('#A8A878', faBullseye);
    case 'fighting':
      return toTypeData('#C03028', faFistRaised);
    case 'flying':
      return toTypeData('#A890F0', faFeatherAlt);
    case 'poison':
      return toTypeData('#A040A0', faSkull);
    case 'ground':
      return toTypeData('#E0C068', faDrumSteelpan);
    case 'rock':
      return toTypeData('#B8A038', faCube);
    case 'bug':
      return toTypeData('#A8B820', faBug);
    case 'ghost':
      return toTypeData('#705898', faGhost);
    case 'steel':
      return toTypeData('#B8B8D0', faDatabase);
    case 'fire':
      return toTypeData('#F08030', faFireAlt);
    case 'water':
      return toTypeData('#6890F0', faTint);
    case 'grass':
      return toTypeData('#78C850', faSeedling);
    case 'electric':
      return toTypeData('#F8D030', faBolt);
    case 'psychic':
      return toTypeData('#F85888', faBrain);
    case 'ice':
      return toTypeData('#98D8D8', faSnowflake);
    case 'dragon':
      return toTypeData('#7038F8', faDragon);
    case 'dark':
      return toTypeData('#705848', faHamsa);
    case 'fairy':
      return toTypeData('#EE99AC', faStar);
    default:
      return toTypeData('#FFFFFF', faQuestion);
  }
};

const toTypeData = (color: string, icon: IconDefinition): TypeData => {
  return {
    color,
    icon,
  };
};

/**
 * This function parses the API Types object into a more readable format
 * and associates both a color and an icon to every given type.
 *
 * @param types The types array of the pokemon (either single or multi-typed)
 */
export const parsePkmnTyping = (types: PokemonType[]): TypeData[] =>
  types.map(({ type }) => {
    const { color, icon } = getTypeData(type.name);

    return {
      color,
      name: type.name,
      icon,
    };
  });

/**
 * This function parses the API Stats object into a more readable format.
 *
 * @param stats The stats array of a pokemon
 */
export const parsePkmnStats = (stats: PokemonStat[]): FullStatData[] => {
  return stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));
};
