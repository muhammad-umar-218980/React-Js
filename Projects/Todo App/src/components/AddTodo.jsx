import { FiPlus } from "react-icons/fi";

function AddTodo() {
	return (
		<div className="container my-4">
			<div className="row g-3 align-items-center bg-light p-4 rounded shadow-sm">

				<div className="col-md-6">
					<input
						type="text"
						className="form-control"
						placeholder="Enter your task..."
					/>
				</div>

				<div className="col-md-4">
					<input
						type="date"
						className="form-control"
					/>
				</div>

				<div className="col-md-2 d-grid">
					<button className="btn btn-success d-flex align-items-center justify-content-center">
						<FiPlus className="me-2" /> Add
					</button>
				</div>

			</div>
		</div>
	);
};

export default AddTodo;