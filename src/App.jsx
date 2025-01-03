import { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./components/TodoContext";
function App() {
  const [todos, setTodo] = useState([]);
  const addTodo = (todo) => {
    setTodo((prev) => {
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  };

  const editTodo = (id, editedTodo) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? editedTodo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };
  const completeTodo = (id) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    if (todos && todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  return (
    <TodoProvider
      value={{ todos, addTodo, completeTodo, deleteTodo, editTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem key={todo.id} todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
