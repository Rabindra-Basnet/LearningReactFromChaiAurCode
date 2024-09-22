import { useState } from "react";
import { useTodo } from "../contexts";

export default function TodoForm() {
  const [todos, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todos) return;
    addTodo({ todos, completed: false });
    setTodo("");
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todos}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write your tasks"
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </main>
  );
}
