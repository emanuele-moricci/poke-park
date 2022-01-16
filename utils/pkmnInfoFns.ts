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
import type { PokemonType } from 'pokenode-ts';
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

export type FullTypeData = {
  color: string;
  name: string;
  icon: IconDefinition;
};

type TypeData = {
  c: string;
  i: IconDefinition;
};

const getTypeData = (name: string): TypeData => {
  switch (name) {
    case 'normal':
      return { c: '#A8A878', i: faBullseye };
    case 'fighting':
      return { c: '#C03028', i: faFistRaised };
    case 'flying':
      return { c: '#A890F0', i: faFeatherAlt };
    case 'poison':
      return { c: '#A040A0', i: faSkull };
    case 'ground':
      return { c: '#E0C068', i: faDrumSteelpan };
    case 'rock':
      return { c: '#B8A038', i: faCube };
    case 'bug':
      return { c: '#A8B820', i: faBug };
    case 'ghost':
      return { c: '#705898', i: faGhost };
    case 'steel':
      return { c: '#B8B8D0', i: faDatabase };
    case 'fire':
      return { c: '#F08030', i: faFireAlt };
    case 'water':
      return { c: '#6890F0', i: faTint };
    case 'grass':
      return { c: '#78C850', i: faSeedling };
    case 'electric':
      return { c: '#F8D030', i: faBolt };
    case 'psychic':
      return { c: '#F85888', i: faBrain };
    case 'ice':
      return { c: '#98D8D8', i: faSnowflake };
    case 'dragon':
      return { c: '#7038F8', i: faDragon };
    case 'dark':
      return { c: '#705848', i: faHamsa };
    case 'fairy':
      return { c: '#EE99AC', i: faStar };
    default:
      return { c: '#FFFFFF', i: faQuestion };
  }
};

const constructTypeData = ({ type: { name } }: PokemonType): FullTypeData => {
  const { c, i } = getTypeData(name);

  return {
    color: c,
    name,
    icon: i,
  };
};

export const parsePkmnTyping = (types: PokemonType[]): FullTypeData[] =>
  types.map((type) => constructTypeData(type));
