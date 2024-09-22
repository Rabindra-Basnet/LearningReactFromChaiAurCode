// src/components/TodoList.js
function Todos({ todos, onEdit, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
        >
          <div className="text-white">{todo.text}</div>
          <div className="mx-2 flex gap-3">
            <button
              onClick={() => onEdit(todo)}
              className="text-black bg-yellow-500 border-0 px-3 py-2 focus:outline-none hover:bg-yellow-600 rounded text-base"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-black bg-red-500 border-0 px-3 py-2 focus:outline-none hover:bg-red-600 rounded text-base"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
