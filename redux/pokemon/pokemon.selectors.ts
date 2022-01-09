import { RootState } from 'redux/root.store';
import { createSelector } from 'reselect';

const selectPokemon = (state: RootState) => state.pokemon;

export const selectUrl = createSelector(
  [selectPokemon],
  (pkmn) => pkmn.originUrl
);
export const selectPkmnList = createSelector(
  [selectPokemon],
  (pkmn) => pkmn.pkmnList
);
export const selectPkmnListError = createSelector(
  [selectPokemon],
  (pkmn) => pkmn.fetchError
);
