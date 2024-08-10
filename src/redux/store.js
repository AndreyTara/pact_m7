import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./start/slice";
import { tasksReducer } from "./tasks/taskSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    tasks: tasksReducer,
  },
});
