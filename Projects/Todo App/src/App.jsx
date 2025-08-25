import TodoHeader from "./components/TodoHeader"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <>
      <TodoHeader />
      <AddTodo />
      <TodoItem itemName = "Learn React" dueDate = "25-08-2025" />
      <TodoItem itemName = "Have Coffee" dueDate = "28-08-2025" />
    </>
  );
}

export default App