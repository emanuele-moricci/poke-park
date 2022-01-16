import { createSlice } from '@reduxjs/toolkit';
import { Pokemon } from 'pokenode-ts';

type InitialStateType = {
  originUrl: string;
  pkmnList: Pokemon[];
  fetchError: string | null;
};

const initialState: InitialStateType = {
  originUrl: '',
  pkmnList: [],
  fetchError: null,
};

const slice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setOriginUrl: (state, action) => {
      state.originUrl = action.payload;
    },
    fetchPokemonStart: (state) => {
      state.pkmnList = [];
    },
    fetchPokemonSuccess: (state, action) => {
      state.pkmnList = action.payload;
    },
    fetchPokemonFailure: (state, action) => {
      state.fetchError = action.payload;
    },
  },
});

export const pokemonActions = slice.actions;
export default slice.reducer;
