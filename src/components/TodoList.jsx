import React from 'react';

import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ data }) => {

	const elements = data.map((item) => {

		const { id, ...itemProps } = item;

		return(
			<li key={id} className='list-group-item todo-list-item'>
				<TodoListItem { ...itemProps } />
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