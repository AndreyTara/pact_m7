import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  // reducers: {
  //   // Виконається в момент старту HTTP-запиту
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   // Виконається якщо HTTP-запит завершився успішно
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   // Виконається якщо HTTP-запит завершився з помилкою
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const tasksReducer = tasksSlice.reducer;
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
