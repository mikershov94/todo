import React from 'react';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {

	//данные для отображения (возможно получены с сервера)
	const todoData = [
		{ id: 1, label: 'Drink Coffee', important: false },
		{ id: 2, label: 'Build Awesome App', important: true },
		{ id: 3, label: 'Have a lunch', important: false },
	];

	const toDo = 3;
	const done = 1;

	return(
		<div>
			<AppHeader toDo={toDo} done={done} />
			<SearchPanel />
			<TodoList data={ todoData } />
		</div>
	);
}

export default App;