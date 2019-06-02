import React from 'react';
import './TodoListItem.sass';

const TodoListItem = ({ label, important=false }) => {		//используем деструктуризацию объекта props
	const spanStyle = {
		color: important ? 'steelblue' : 'black',
		fontWeight: important ? 'bold' : 'normal'
	}

	return (
		<div className="d-flex row todo-list-item">
			<div
				className="col-9 todo-list-item-label" 
				style={ spanStyle }
			>
				{ label }
			</div>
			<div className="d-flex col">
				<div className="btns">
					<button
						type="button" 
						className="btn btn-outline-success btn-sm ">
						<i className="material-icons">priority_high</i>
					</button>

					<button
						type="button" 
						className="btn btn-outline-danger btn-sm">
						<i className="material-icons">delete</i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoListItem;