import React from 'react';

import TodoListItem from './../TodoListItem';
import AddItemForm from './../AddItemForm';
import './TodoList.sass';

const TodoList = ({ data, onDelete, addItem, onToggleImportant, onToggleDone }) => {

	const elements = data.map((item) => {

		const { id, ...itemProps } = item;

		return(
			<li key={id} className='list-group-item todo-list-item'>
				<TodoListItem { ...itemProps } 
											onDelete={ () => onDelete(id) }
											onToggleDone={ () => onToggleDone(id) }
											onToggleImportant={ () => onToggleImportant(id) }
											/>
			</li>
		);
	})

	return(
		<div>
			<ul className='list-group todo-list'>
				{ elements }
			</ul>
			<AddItemForm addItem = { addItem } />
		</div>
	);
}

export default TodoList;