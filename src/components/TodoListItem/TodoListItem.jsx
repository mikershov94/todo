import React from 'react';
import './TodoListItem.sass';


class TodoListItem extends React.Component {
	constructor() {
		super();
		this.state = {
			done: false,
			important: false,
		};

		this.handlerClickLabel = () => {
			this.setState( (state) => {
				return {
					done: !state.done,
				}
			});
		};

		this.handlerImportant = () => {
			this.setState( (state) => {
				return {
					important: !state.important,
				}
			});
		}
	}

	render() {
		const { label, onDelete } = this.props;
		const { done, important } = this.state;

		let classNames = "col-9 todo-list-item-label"
		if (done) {
			classNames += " done"
		}

		if (important) {
			classNames += " important"
		}

		return (
		<div className="d-flex row todo-list-item">
			<div
				className={ classNames }
				onClick={ onDelete }
			>
				{ label }
			</div>
			<div className="d-flex col">
				<div className="btns">
					<button
						type="button" 
						className="btn btn-outline-success btn-sm "
						onClick={ this.handlerImportant }>
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
	}

}


export default TodoListItem;