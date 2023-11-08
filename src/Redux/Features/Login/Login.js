import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [{ id: 1, text: "This is some value" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todos = {
        id: nanoid(),
        text: action.payload,
      };
      state.todo.push(todos);
      // state.todo = [...state.todo, todos];
      console.log(state.todo, "This is State Todo");
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
