import { useDispatch, useSelector } from "react-redux";
import { updateTodo, removeTodo, addTodo } from "../features/TodoSlice";
import { useState } from "react";

function TodoAddEdit() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState(""); // State to manage input text
  const [editTodoId, setEditTodoId] = useState(null); // To track which todo is being edited

  // Function to handle add or update based on editTodoId
  const handleAddOrUpdate = () => {
    editTodoId
      ? dispatch(
          updateTodo({
            id: editTodoId,
            text: inputText,
          })
        )
      : dispatch(addTodo(inputText));
    setInputText("");
  };

  const handleEdit = (todo) => {
    setEditTodoId(todo.id); // Set the current todo ID for editing
    setInputText(todo.text); // Prepopulate the input with the current todo text
  };

  return (
    <>
      <div>Todos</div>

      {/* Main input field for both adding and updating */}
      <div className="flex flex-1 items-center justify-center mx-1 gap-2">
        <textarea
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter todo"
          className="px-2 py-1 rounded"
        />
        <button
          onClick={handleAddOrUpdate}
          className="text-black bg-blue-500 border-0 px-3 py-2 focus:outline-none hover:bg-blue-600 rounded text-base"
        >
          {editTodoId ? "Update Todo" : "Add Todo"}{" "}
          {/* Button text changes based on edit mode */}
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="mx-2 flex gap-3">
              <button
                onClick={() => handleEdit(todo)}
                className="text-black bg-yellow-500 border-0 px-3 py-2 focus:outline-none hover:bg-yellow-600 rounded text-base"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-black bg-red-500 border-0 px-3 py-2 focus:outline-none hover:bg-red-600 rounded text-base"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoAddEdit;
