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
//----------PUt-------------//
export const editList = createAsyncThunk(
  "EDIT_TODO",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/todos/${payload.id}`,
        {
          title: payload.title,
          content: payload.content,
          writer: payload.writer,
        }
      );
      console.log("response", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      // console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//----------PUt-------------//

//----------delete------------//
export const deleteList = createAsyncThunk("DELETE_TODO", async (id) => {
  const response = await axios.delete(`http://localhost:4000/todos/${id}`);
  return id;
});

//----------delete------------//

//------------post------------------//

export const addList = createAsyncThunk("ADD_TODO", async (newList) => {
  const response = await axios.post("http://localhost:4000/todos", newList);
  return response.data;
});

//------------post------------------//

//--------get------------//
export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/todos");
      //   console.log("response", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//--------get------------//

//------------리듀서!!!-----------//
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
    [addList.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [deleteList.fulfilled]: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    [editList.fulfilled]: (state, aciton) => {
      state.todos.push(aciton.payload);
    },
  },
});

export default todosSlice.reducer;
