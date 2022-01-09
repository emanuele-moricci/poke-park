import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  darkMode: boolean;
};

const initialState: InitialStateType = {
  darkMode: false,
};

const slice = createSlice({
  name: 'park',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const parkActions = slice.actions;
export default slice.reducer;
