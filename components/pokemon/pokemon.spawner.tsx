import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from './ui/pokemon.spinner';
import { selectPkmnList } from 'redux/pokemon/pokemon.selectors';
import { pokemonActions } from 'redux/pokemon/pokemon.slice';

const Pkmn = dynamic(() => import('./pokemon.component'));

const PokemonSpawner = (): JSX.Element => {
  const dispatch = useDispatch();
  const pkmnList = useSelector(selectPkmnList);

  useEffect(() => {
    dispatch(pokemonActions.fetchPokemonStart());
  }, [dispatch]);

  return (
    <>
      {!pkmnList.length ? (
        <Spinner />
      ) : (
        pkmnList.map(({ sprites, name }, i) => {
          const sprite: string | null =
            sprites.versions['generation-viii'].icons.front_default ?? '';

          return <Pkmn key={i} sprite={sprite} name={name} />;
        })
      )}
    </>
  );
};

export default PokemonSpawner;
