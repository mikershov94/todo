import React from 'react';

import AppHeader from './../components/AppHeader';
import SearchPanel from './../components/SearchPanel';
import TodoList from './../components/TodoList';
import ItemStatusFilter from './../components/ItemStatusFilter';
import './App.sass';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			//данные для отображения (возможно получены с сервера)
			todoData: [
						{ id: 1, label: 'Drink Coffee', important: false },
						{ id: 2, label: 'Build Awesome App', important: true },
						{ id: 3, label: 'Have a lunch', important: false },
			],
		};

		this.handlerDelete = (id) => {
			this.setState( ({ todoData }) => {
				const idx = todoData.findIndex( (el) => el.id === id );

				const before = todoData.slice(0, idx);
				const after = todoData.slice(idx + 1);

				const newData = [ ...before, ...after ];

				return {
					todoData: newData,
				};

			} )
		};
	}

	render() {
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
					<TodoList data={ this.state.todoData } onDelete={ this.handlerDelete } />
				</div>
			</div>
		);
	}
	
}

export default App;