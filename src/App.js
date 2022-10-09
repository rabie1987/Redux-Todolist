import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TodoList from "./components/Todolist/TodoList";
import Filter from "./components/filter/Filter";

function App() {
  return (
    <div className="App">
      <h1 className="heading">To-Do List</h1>
      <AddTask />
      <Filter />
      <TodoList />
    </div>
  );
}
export default App;
