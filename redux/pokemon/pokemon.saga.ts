import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import type { Pokemon } from 'pokenode-ts';

import { pokemonActions } from './pokemon.slice';
import { selectUrl } from './pokemon.selectors';

import { getErrorMessage } from 'utils/reduxFns';

export function* PokemonSagas() {
  yield all([call(onFetchPokemonStart)]);
}

export function* onFetchPokemonStart() {
  yield takeLatest(pokemonActions.fetchPokemonStart.type, fetchPokemon);
}

export function* fetchPokemon(): Generator {
  try {
    const url = yield select(selectUrl);

    const apiResponse = (yield fetch(
      `${url}/api/get-pokemon-list`
    )) as Response;
    const { pkmnList } = (yield apiResponse.json()) as { pkmnList: Pokemon[] };

    yield put(pokemonActions.fetchPokemonSuccess(pkmnList));
  } catch (error) {
    console.error(error);
    yield put(pokemonActions.fetchPokemonFailure(getErrorMessage(error)));
  }
}
