import TodoItem from "./TodoItem"

function TodoItems({todos}){
	return (
		<>
			{todos.map((todo, index) => (
				<TodoItem key={index} itemName={todo.itemName} dueDate={todo.dueDate} />
			))}
		</>
	);
}

export default TodoItems;