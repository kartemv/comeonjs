import { createSlice } from '@reduxjs/toolkit'

export const gameReducer = createSlice({
  name: 'game',
  initialState: {
    code: null
  },
  reducers: {
    setGame: (state, action) => {
      state.code = action.payload;
    },
    exitGame: (state) => {
      state.code = null;
    },
  },
});

export const { setGame, exitGame } = gameReducer.actions;
export default gameReducer.reducer;
