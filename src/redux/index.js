import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import cartReducer from "./cart/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
