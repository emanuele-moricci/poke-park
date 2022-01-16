import { createSlice } from '@reduxjs/toolkit';
import { Pokemon } from 'pokenode-ts';

type InitialStateType = {
  open: boolean;
  pkmn: Pokemon | null;
};

const initialState: InitialStateType = {
  open: false,
  pkmn: null,
};

const slice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setDrawerOpen: (state, action) => {
      state.open = true;
      state.pkmn = action.payload;
    },
    setDrawerClosed: (state) => {
      state.open = false;
      state.pkmn = null;
    },
  },
});

export const infoActions = slice.actions;
export default slice.reducer;
