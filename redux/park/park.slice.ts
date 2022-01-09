import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  darkMode: boolean;
  play: 'STOPPED' | 'PLAYING' | 'PAUSED';
};

const initialState: InitialStateType = {
  darkMode: false,
  play: 'STOPPED',
};

const slice = createSlice({
  name: 'park',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    togglePlay: (state) => {
      state.play =
        state.play === 'STOPPED' || state.play === 'PAUSED'
          ? 'PLAYING'
          : 'STOPPED';
    },
  },
});

export const parkActions = slice.actions;
export default slice.reducer;
