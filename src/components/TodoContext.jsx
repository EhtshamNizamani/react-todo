import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "This is Todo",
      isCompleted: false,
    },
  ],

  addTodo: (todo) => {},
  editTodo: (id,todo) => {},
  deleteTodo: (id) => {},
  completeTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
