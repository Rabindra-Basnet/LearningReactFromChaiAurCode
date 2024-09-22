// src/components/TodoForm.js
import { useState, useEffect } from "react";

function AddTodo({ addTodo, updateTodo, editingTodo }) {
  const [inputText, setInputText] = useState("");

  // If editingTodo changes, update the input text with its text
  useEffect(() => {
    if (editingTodo) {
      setInputText(editingTodo.text);
    }
  }, [editingTodo]);

  const handleAddOrUpdate = () => {
    // Set error message for empty input
    // Prevent submission if input is blank
    // Clear error message if input is valid
    if (!inputText) return;

    // If we're in edit mode, update the existing todo
    // Clear the input field after adding/updating
    // Otherwise, add a new todo

    editingTodo
      ? updateTodo({ ...editingTodo, text: inputText })
      : addTodo(inputText);
    setInputText("");
  };

  return (
    <div>
      <input
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
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
    </div>
  );
}

export default AddTodo;
