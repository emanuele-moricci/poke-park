import type { Pokemon } from 'pokenode-ts';
import { randX, randY } from 'utils/randomFns';

import Pkmn from './Pokemon';

interface IPokemonSpawnerProps {
  pkmnList: Pokemon[];
}

const PokemonSpawner = ({ pkmnList }: IPokemonSpawnerProps): JSX.Element => {
  return (
    <>
      {pkmnList.map((pkmn, i) => {
        const sprite: string | null =
          pkmn.sprites.versions['generation-viii'].icons.front_default ?? '';

        const startX = randX();
        const startY = randY();

        return <Pkmn key={i} sprite={sprite} startX={startX} startY={startY} />;
      })}
    </>
  );
};

export default PokemonSpawner;
