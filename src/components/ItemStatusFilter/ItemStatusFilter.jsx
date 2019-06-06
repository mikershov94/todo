import React from 'react';
import './ItemStatusFilter.sass';


class ItemStatusFilter extends React.Component {
	constructor() {
		super();
		this.buttons = [
			{ name: 'all', label: 'All' },
			{ name: 'active', label: 'Active' },
			{ name: 'done', label: 'Done' },
		];
	}

	render() {
		const { onClickFilter, filter } = this.props;

		const buttons = this.buttons.map(({name, label}) => {
			const isActive = filter === name;
			const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

			return(
				<button type="button"
								className={`btn ${clazz}`}
								key={name}
								onClick={ () => onClickFilter(name) }	>{label}</button>
			);
		});

		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
}

export default ItemStatusFilter;