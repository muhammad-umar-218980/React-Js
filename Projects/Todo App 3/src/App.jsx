import TodoHeader from "./components/TodoHeader"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {

  // let todos = [
  //   { itemName: "Learn React", dueDate: "25-08-2025" },
  //   { itemName: "Have Coffee", dueDate: "28-08-2025" },
  //   { itemName: "Write Code", dueDate: "30-08-2025" },
  //   { itemName: "Have Biryani", dueDate: "31-08-2025" }
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (todoItemName, todoItemDueDate) => {
    console.log(`Todo Item : ${todoItemName} added with Due Date : ${todoItemDueDate}`)

    // const newItems = [...todoItems, { itemName: todoItemName, dueDate: todoItemDueDate }];

    /*
    
    setTodoItems((currentItems) =>{

      const newItems = [...currentItems, { itemName: todoItemName, dueDate: todoItemDueDate }]

      return newItems;
    });
    
    */

// OR
    setTodoItems((currentItems) =>
      [...currentItems, { itemName: todoItemName, dueDate: todoItemDueDate }]
    );

  }

  const deleteItem = function (itemName) {
    const newItems = todoItems.filter(item => item.itemName !== itemName);
    setTodoItems(newItems);
  }

  return (
    <>
      <TodoHeader />
      <AddTodo onNewItem={addNewItem} />
      <TodoItems todos={todoItems} onDeleteItem={deleteItem} />
    </>
  );
}

export default App