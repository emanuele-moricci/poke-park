import { RootState } from 'redux/root.store';
import { createSelector } from 'reselect';

const selectPark = (state: RootState) => state.park;

export const selectMode = createSelector([selectPark], (park) => park.darkMode);
