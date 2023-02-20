import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//--------initialState------//
const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};
//--------initialState------//

export const addList = createAsyncThunk("ADD_TODO", async (newList) => {
  const response = await axios.post("http://localhost:4000/todos", newList);
  return response.data;
});

//--------get------------//
export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/todos");
      console.log("response", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//--------get------------//

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { ADD_TODO } = todosSlice.actions;
export default todosSlice.reducer;
