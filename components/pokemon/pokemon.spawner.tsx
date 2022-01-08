import type { Pokemon } from 'pokenode-ts';

import Pkmn from './pokemon.component';

interface IPokemonSpawnerProps {
  pkmnList: Pokemon[];
}

const PokemonSpawner = ({ pkmnList }: IPokemonSpawnerProps): JSX.Element => {
  return (
    <>
      {pkmnList.map(({ sprites, name }, i) => {
        const sprite: string | null =
          sprites.versions['generation-viii'].icons.front_default ?? '';

        return <Pkmn key={i} sprite={sprite} name={name} />;
      })}
    </>
  );
};

export default PokemonSpawner;
