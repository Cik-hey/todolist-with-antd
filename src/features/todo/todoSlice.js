import { createSlice } from "@reduxjs/toolkit";

const initTodos = [
    {
      id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
      text: "todo example",
      done: false,
    },
    {
      id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
      text: "first todo item",
      done: false,
    },
  ];
  
  const todoSlice = createSlice({
    name: "todo",
      initialState: initTodos,
      reducers: {
        addTodo: (state, action) => {
          const todoText = action.payload;
          // console.log(action);
          const todo = {
            id: Date.now(),
            text: todoText,
            done: false,
          };
          state.push(todo)
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            return state.filter((todo) => todo.id !== id);
            //delete the item with the id in action.payload in the array
        },
      },
  });

  export const { addTodo } = todoSlice.actions;
  export const { deleteTodo } = todoSlice.actions;
  export default todoSlice;