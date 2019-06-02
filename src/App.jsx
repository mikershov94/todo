import React from 'react';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import './App.sass';

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
		<div className="wrapper">
			<div className="container">
				<AppHeader toDo={toDo} done={done} />
				<div className="row">
					<div className="col-9 search-panel">
						<SearchPanel />
					</div>
					<div className="col-3 item-status-filter">
						<ItemStatusFilter />
					</div>
				</div>
				<TodoList data={ todoData } />
			</div>
		</div>
	);
}

export default App;