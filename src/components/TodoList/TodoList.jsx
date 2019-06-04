import React from 'react';

import TodoListItem from './../TodoListItem';
import './TodoList.sass';

const TodoList = ({ data, onDelete }) => {

	const elements = data.map((item) => {

		const { id, ...itemProps } = item;

		return(
			<li key={id} className='list-group-item todo-list-item'>
				<TodoListItem { ...itemProps } onDelete={ () => onDelete(id) } />
			</li>
		);
	})

	return(
		<ul className='list-group todo-list'>
			{ elements }
		</ul>
	);
}

export default TodoList;