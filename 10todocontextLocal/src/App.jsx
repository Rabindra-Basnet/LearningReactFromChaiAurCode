import { useEffect, useState } from "react";

import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoFormUI";
import TodoItem from "./components/TodoItemUI";

function App() {
  const [todos, setTodos] = useState([]);
  ///add
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  //update
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  //delete
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //toggle
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //for local storage in frontend get

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // set items
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <section className="w-full bg-[#172842] min-h-screen">
        <div className="py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Tasks
            </h1>
            <div className="mb-4">
              {/* todo forms goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3 ">
              {/* loop and add todo items here */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full truncate">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TodoProvider>
  );
}

export default App;
