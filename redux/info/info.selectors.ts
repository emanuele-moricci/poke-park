import { RootState } from 'redux/root.store';
import { createSelector } from 'reselect';

const selectInfo = (state: RootState) => state.info;

export const selectInfoOpen = createSelector([selectInfo], (info) => info.open);
export const selectInfoPkmn = createSelector([selectInfo], (info) => info.pkmn);
