import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./reducers/user";
import gameReducer from "./reducers/game";

export default configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
  },
})
