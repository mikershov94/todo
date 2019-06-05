import React from 'react';
import './TodoListItem.sass';


const TodoListItem = ({ label, important, done, onDelete, onToggleImportant, onToggleDone }) => {
	let classNames = "col-9 todo-list-item-label"

	if (important) {
		classNames += " important";
	};

	if (done) {
		classNames += " done";
	};


	return (
		<div className="d-flex row todo-list-item">
			<div
				className={ classNames }
				onClick={ onToggleDone }
			>
			{ label }
			</div>
			<div className="d-flex col">
				<div className="btns">
					<button
						type="button" 
						className="btn btn-outline-success btn-sm "
						onClick={ onToggleImportant }>
						<i className="material-icons">priority_high</i>
					</button>

					<button
						type="button" 
						className="btn btn-outline-danger btn-sm"
						onClick={ onDelete } >
						<i className="material-icons">delete</i>
					</button>
				</div>
			</div>
		</div>
	);
};


export default TodoListItem;