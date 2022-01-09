import { combineReducers } from 'redux';

import parkReducer from './park/park.slice';
import pokemonReducer from './pokemon/pokemon.slice';

const rootReducer = combineReducers({
  park: parkReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;
