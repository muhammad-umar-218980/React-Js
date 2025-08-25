import { FiTrash2, FiEdit } from "react-icons/fi";

function TodoItem({ itemName, dueDate }) {
	return (
		<div className="container my-4">
			<div className="row g-3 align-items-center bg-light p-4 rounded shadow-sm">
				<div className="col-md-5">
					<p className="form-control-static">{itemName}</p>
				</div>

				<div className="col-md-3">
					<p className="form-control-static">{dueDate}</p>
				</div>

				<div className="col-md-2 d-grid">
					<button className="btn btn-warning d-flex align-items-center justify-content-center">
						<FiEdit className="me-2" /> Edit
					</button>
				</div>

				<div className="col-md-2 d-grid">
					<button className="btn btn-danger d-flex align-items-center justify-content-center">
						<FiTrash2 className="me-2" /> Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;