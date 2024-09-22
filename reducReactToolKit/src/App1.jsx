// src/App.js  for seperating the instruction we can do this defining all the methods and process on app file and using props validation
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "./features/TodoSlice";
import { useState } from "react";
import AddTodo from "./practiceComponents/AddTodo";
import Todos from "./practiceComponents/Todos";

function App() {
  const todos = useSelector((state) => state.todos); // Fetch todos from Redux store
  const dispatch = useDispatch();

  const [editingTodo, setEditingTodo] = useState(null); // State to track editing

  // Function to add a new todo
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  // Function to update an existing todo
  const handleUpdateTodo = (todo) => {
    dispatch(updateTodo(todo));
    setEditingTodo(null); // Reset editing state
  };

  // Function to handle editing mode
  const handleEditTodo = (todo) => {
    setEditingTodo(todo); // Set the todo to be edited
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {/* TodoForm Component */}
      <AddTodo
        addTodo={handleAddTodo}
        updateTodo={handleUpdateTodo}
        editingTodo={editingTodo}
      />

      {/* TodoList Component */}
      <Todos
        todos={todos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
