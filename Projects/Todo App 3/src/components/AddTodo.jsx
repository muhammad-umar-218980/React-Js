import { FiPlus } from "react-icons/fi";
// import { useState } from "react";
import {useRef} from "react";

function AddTodo({ onNewItem }) {

	// const [TodoName, setTodoName] = useState("");
	// const [TodoDueDate, setTodoDueDate] = useState("");

	// function onTodoNameChange(event) {
	// 	let value = event.target.value;
	// 	setTodoName(value)
	// }

	// function onTodoDueDateChange(event) {
	// 	let value = event.target.value;
	// 	setTodoDueDate(value)
	// }

	const TodoNameRef = useRef();
	const TodoDueDateRef = useRef();



	const AddButtonClicked = (event) => {
		event.preventDefault();
		console.log(event);
		// if (TodoName && TodoDueDate) {
		// 	onNewItem(TodoName, TodoDueDate)
		// 	setTodoName("");
		// 	setTodoDueDate("");
		// } else {
		// 	alert("Please enter both a todo name and a due date.");
		// }
		const todoName = TodoNameRef.current.value;
		const todoDueDate = TodoDueDateRef.current.value;

		if (todoName && todoDueDate) {
			onNewItem(todoName, todoDueDate);
			TodoNameRef.current.value = "";
			TodoDueDateRef.current.value = "";
		} else {
			alert("Please enter both a todo name and a due date.");
		}
	}

	return (
		<div className="container my-4">
			<form className="row g-3 align-items-center bg-light p-4 rounded shadow-sm" onSubmit={AddButtonClicked}>

				<div className="col-md-6">
					<input
						type="text"
						className="form-control"
						placeholder="Enter your task..."
						ref = {TodoNameRef}
						// onChange={onTodoNameChange}
						// value={TodoName}
					/>
				</div>

				<div className="col-md-4">
					<input
						type="date"
						className="form-control"
						ref = {TodoDueDateRef}
						// onChange={onTodoDueDateChange}
						// value={TodoDueDate}
					/>
				</div>

				<div className="col-md-2 d-grid">
					<button className="btn btn-success d-flex align-items-center justify-content-center" >
						<FiPlus className="me-2" /> Add
					</button>
				</div>

			</form>
		</div>
	);
};

export default AddTodo;