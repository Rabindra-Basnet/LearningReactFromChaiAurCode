import { useState } from "react";
import { useTodo } from "../contexts";

export default function TodoLists({ todo }) {
  const [edit, setEdit] = useState(false);
  const [msg, setMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: msg });
    setEdit(false);
  };
  return (
    <main>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-100 text-black

         ${todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
          `}
      >
        <input
          type="checkbox"
          value={todo.complete}
          onChange={toggleCompleted}
          className="cursor-pointer"
        />

        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className={`border outline-none resize-none w-full bg-transparent
             rounded-lg ${
               edit ? "border-black/10 px-2" : "border-transparent"
             } ${todo.complete ? "line-through" : ""} `}
          readOnly
        />
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.complete) return;
            // edit ? editTodo() : setEdit((value) => !value);

            if (edit) {
              editTodo();
            } else setEdit((prev) => !prev);
          }}
        >
          {edit ? "📁" : "✏️"}
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </main>
  );
}
