// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, removeTodo } from "../features/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
        >
          <div className="text-white">{todo.text}</div>
          <div className="mx-2 flex gap-3">
            <button
              onClick={() => dispatch(updateTodo(todo.text))}
              className="text-black bg-red-50 border-0  px-3 py-2    focus:outline-none hover:bg-red-600 rounded text-base"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-black bg-red-50 border-0  px-3 py-2  focus:outline-none hover:bg-red-600 rounded text-base"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </>
  );
}

export default Todos;
