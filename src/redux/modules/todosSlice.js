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
        `${process.env.REACT_APP_TODOS_URL}/todos/${payload.id}`,
        {
          title: payload.title,
          content: payload.content,
          writer: payload.writer,
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//----------PUt-------------//

//----------delete------------//
export const deleteList = createAsyncThunk("DELETE_TODO", async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_TODOS_URL}/todos/${id}`
  );
  return id;
});

//----------delete------------//

//------------post------------------//
export const addList = createAsyncThunk("ADD_TODO", async (newList) => {
  // createAsyncThunk => 비동기 통신&전역상태관리 사용하려면 이 함수 써
  // createAsyncThunk(key값, async함수)
  // async(payload === 내가 전달 해야하는 값 & 내가 써야 하는 값 , thunkAPI)
  // const newList = {
  //   id: Date.now(),
  //   title: titleValue,
  //   writer: writerValue,
  //   content: contentValue,
  // };
  const response = await axios.post(
    `${process.env.REACT_APP_TODOS_URL}/todos`,
    newList
  );
  return response.data;
});

//------------post------------------//

//--------get------------//
export const __getTodos = createAsyncThunk("getTodos", async (_, thunkAPI) => {
  // _ 첫번째 인자값 사용하지 않는데, 두번째 값은 사용해야 할때
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_TODOS_URL}/todos`
    );
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
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
