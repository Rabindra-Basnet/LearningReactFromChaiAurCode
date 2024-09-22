import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
// import AddTodoEdit from "./components/TodoAddEdit";

function App() {
  return (
    <>
      <h1>React with redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
