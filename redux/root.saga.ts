import { all, call } from 'redux-saga/effects';
import { PokemonSagas } from './pokemon/pokemon.saga';

export default function* rootSaga() {
  yield all([call(PokemonSagas)]);
}
