import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = c("tasks/fetchAll", async (_, thunkAPI) => {
  const ass = "Asds";
  try {
    const response = await axios.get("/tasks");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "../tasks/taskSlice";
// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// const url = "https://62584f320c918296a49543e7.mockapi.io";
// export const fetchTasks = () => async (dispatch) => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());

//     // HTTP-запит
//     const response = await axios.get("/tasks");

//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };

///-------------------------------------
// src/redux/operations.js

// import axios from "axios";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// const fetchTasks = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/tasks");
//   } catch (e) {}
// };
