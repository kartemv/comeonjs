import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
  name: 'user',
  initialState: {
    username: null,
    player: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.player = action.payload.player;
    },
    removeUser: (state) => {
      state.username = null;
      state.player = null;
    },
  },
});

export const { setUser, removeUser } = userReducer.actions;
export default userReducer.reducer;
