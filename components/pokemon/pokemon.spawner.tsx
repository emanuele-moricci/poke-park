import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

interface IPokemonSpawnerProps {
  pkmnCount: number;
}

const PokemonSpawner = ({ pkmnCount }: IPokemonSpawnerProps): JSX.Element => {
  const [pkmn, setPkmn] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const list = [];
    for (let index = 0; index < pkmnCount; index++) {
      list.push(
        <Pokemon
          key={index}
          sprite={
            'https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/muk.png'
          }
        />
      );
    }

    setPkmn(list);
  }, [pkmnCount]);

  return <div>{pkmn}</div>;
};

export default PokemonSpawner;
