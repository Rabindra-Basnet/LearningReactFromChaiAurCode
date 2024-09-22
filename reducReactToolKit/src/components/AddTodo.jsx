import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/TodoSlice";

export default function AddTodo() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch(addTodo(input));
    setInput("");
  };
  // const [editTodoId, setEditTodoId] = useState(null);

  // const addTodoHandler = () => {
  // editTodoId
  //   //   ? dispatch(
  //   //       updateTodo({
  //   //         id: editTodoId,
  //   //         text: input,
  //   //       })
  //   //     )
  //   //   :
  //   dispatch(addTodo(input));
  // };

  return (
    <form onSubmit={addTodoHandler} className="space-x- mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
        placeholder="Enter Your Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add
        {/* {editTodoId ? "Update" : "Add"} */}
      </button>
    </form>
  );
}
