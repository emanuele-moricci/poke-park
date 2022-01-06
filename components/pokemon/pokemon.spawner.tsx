import { useEffect, useState } from 'react';
import type { Pokemon } from 'pokenode-ts';

import Pkmn from './Pokemon';

interface IPokemonSpawnerProps {
  pkmnCount: number;
  pkmnList: Pokemon[];
}

const PokemonSpawner = ({
  pkmnCount,
  pkmnList,
}: IPokemonSpawnerProps): JSX.Element => {
  const [pkmn, setPkmn] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const list = [];
    for (let index = 0; index < pkmnCount; index++) {
      const sprite: string | null = pkmnList[index].sprites.front_default;
      if (!sprite) continue;

      list.push(<Pkmn key={index} sprite={sprite} />);
    }

    setPkmn(list);
  }, [pkmnCount, pkmnList]);

  return <div>{pkmn}</div>;
};

export default PokemonSpawner;
