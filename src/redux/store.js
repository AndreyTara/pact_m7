import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./start/slice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});
