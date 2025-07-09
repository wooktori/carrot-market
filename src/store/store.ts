import { configureStore } from "@reduxjs/toolkit";
import { regionSlice } from "./region";

export const store = configureStore({
  reducer: {
    region: regionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
