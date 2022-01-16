import { combineReducers } from 'redux';

import parkReducer from './park/park.slice';
import infoReducer from './info/info.slice';
import pokemonReducer from './pokemon/pokemon.slice';

const rootReducer = combineReducers({
  park: parkReducer,
  info: infoReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;
