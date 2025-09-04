import { FiPlus } from "react-icons/fi";
import { useState } from "react";

function AddTodo({ onNewItem }) {

	const [TodoName, setTodoName] = useState("");
	const [TodoDueDate, setTodoDueDate] = useState("");

	function onTodoNameChange(event) {
		let value = event.target.value;
		console.log(value);
		setTodoName(value)
	}

	function onTodoDueDateChange(event) {
		let value = event.target.value;
		console.log(value);
		setTodoDueDate(value)
	}


	const AddButtonClicked = () => {
		if (TodoName && TodoDueDate) {
			onNewItem(TodoName, TodoDueDate)
			setTodoName("");
			setTodoDueDate("");
		} else {
			alert("Please enter both a todo name and a due date.");
		}
	}

	return (
		<div className="container my-4">
			<div className="row g-3 align-items-center bg-light p-4 rounded shadow-sm">

				<div className="col-md-6">
					<input
						type="text"
						className="form-control"
						placeholder="Enter your task..."
						onChange={onTodoNameChange}
						value={TodoName}
					/>
				</div>

				<div className="col-md-4">
					<input
						type="date"
						className="form-control"
						onChange={onTodoDueDateChange}
						value={TodoDueDate}
					/>
				</div>

				<div className="col-md-2 d-grid">
					<button className="btn btn-success d-flex align-items-center justify-content-center" onClick={AddButtonClicked}>
						<FiPlus className="me-2" /> Add
					</button>
				</div>

			</div>
		</div>
	);
};

export default AddTodo;