import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import cartReducer from "./cart/reducer";
import gamesReducer from "./games/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gamesReducer,
  },
});
