import React from 'react';

const TodoListItem = ({ label, important=false }) => {		//используем деструктуризацию объекта props
	const spanStyle = {
		color: important ? 'tomato' : 'black'
	}

	return <span style={ spanStyle }>{ label }</span>;
}

export default TodoListItem;