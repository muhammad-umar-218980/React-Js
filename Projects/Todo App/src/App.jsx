import TodoHeader from "./components/TodoHeader"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";

function App() {

  let todos = [
    { itemName: "Learn React", dueDate: "25-08-2025" },
    { itemName: "Have Coffee", dueDate: "28-08-2025" },
    { itemName: "Write Code", dueDate: "30-08-2025" },
    { itemName: "Have Biryani", dueDate: "31-08-2025" }
  ];

  return (
    <>
      <TodoHeader />
      <AddTodo />
      <TodoItems todos={todos} />
    </>
  );
}

export default App