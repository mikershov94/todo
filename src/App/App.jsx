import React from 'react';

import AppHeader from './../components/AppHeader';
import SearchPanel from './../components/SearchPanel';
import TodoList from './../components/TodoList';
import ItemStatusFilter from './../components/ItemStatusFilter';
import './App.sass';

class App extends React.Component {
	constructor() {
		super();
		this.maxId = 100;

		this.createTodoItem = (label) => {
			return {
				label,
				important: false,
				done: false,
				id: this.maxId++
			};
		};

		this.state = {
			//данные для отображения (возможно получены с сервера)
			todoData: [
						this.createTodoItem('Drink Coffee'),
						this.createTodoItem('Make Awesome App'),
						this.createTodoItem('Have a lunch'),
			],
			term: '',
			filter: 'all',
		};

		this.toggleProperty = (arr, id, propName) => {		//функция изменяет какое-либо свойство
			const idx = arr.findIndex((el) => el.id === id);	//в принятом массиве arr ищем
																												//индекс элемента, id которого равен принятому id
			const oldItem = arr[idx];						//определяем старый объект как элемент массива с найденным индексом idx
			const newItem = { ...oldItem,				//определяем новый объект:
					[propName]: !oldItem[propName] };		//старый объект со старыми свойствами кроме свояства с именем приянтым propName
																							//этому свойству присваиваем отрицательное значение свойства из старого объекта
																							//используя spread-оператор
			return[
				...arr.slice(0, idx),			//возвращаем объекты массива до idx
				newItem,									//возвращаем новый объект
				...arr.slice(idx + 1)			//возвращаем объекты массива после idx
			];													//в целом возврвщаем обновленный state с данными 

		}

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

		this.handlerAddItem = (text) => {
			//генерируем id
			const newItem = this.createTodoItem(text);

			//добавляем элемент в массив
			this.setState(({ todoData }) => {
				const newData = [
					...todoData,			//с помощью spread-оператора
					newItem,					//создаем новыфй массив, соединяя старый массив и новый элемент
				];

				return {
					todoData: newData,
				};
			});
		};

		this.onSearchItems = (term) => {
			this.setState({
				term: term,
			})
		};

		this.onClickFilter = (filter) => {
			this.setState({
				filter: filter,
			})
		};

		this.onToggleImportant = (id) => {
			this.setState(({ todoData }) => {		////вызываем setState
				return {
					todoData: this.toggleProperty(todoData, id, 'important'), //изменяем свойство в состоянии
				};
			})
		};

		this.onToggleDone = (id) => {
			this.setState(({ todoData }) => {	//вызываем setState
				return {
					todoData: this.toggleProperty(todoData, id, 'done'), //изменяем свойство в состоянии
				}
			})
		};

	}

	search(items, term) {
			if (term.length === 0) {
				return items;
			};

			return items.filter((item) => {
				return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
			});
	}

	filter(items, filter) {
		switch (filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default:
				return items;
		};
	}

	render() {
		const { todoData, term } = this.state;
		const doneCount = todoData
											.filter((el) => el.done).length; //фильтруем элементы массива todoData
																											// по свойству done со щначением true
		const todoCount = todoData.length - doneCount;		//от всех задач отнимаем сделанные
		const visibleItems = this.search(todoData, term);
		const filterData = this.filter(visibleItems, this.state.filter);

		return(
			<div className="wrapper">
				<div className="container">
					<AppHeader toDo={todoCount}		//передаем свойство для отображения текущих задач
										 done={doneCount}		//передаем свойство для отображения сделанных задач
										 />
					<div className="row">
						<div className="col-9 search-panel">
							<SearchPanel onSearchItems={ this.onSearchItems } />
						</div>
						<div className="col-3 item-status-filter">
							<ItemStatusFilter filter={ this.state.filter }
																onClickFilter={ this.onClickFilter } />
						</div>
					</div>
					<TodoList data={ filterData }
										onDelete={ this.handlerDelete }
										addItem={ this.handlerAddItem }
										onToggleImportant={ this.onToggleImportant }
										onToggleDone={ this.onToggleDone }
										 />
				</div>
			</div>
		);
	}
	
}

export default App;