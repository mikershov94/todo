import React from 'react';
import './SearchPanel.sass';

class SearchPanel extends React.Component {
	constructor() {
		super();
		this.state = {
			term: '',
		};

		this.onSearchChange = (e) => {
			const term = e.target.value;

			this.setState({
				term: term,
			});

			this.props.onSearchItems(term);
		};

	}

	render() {
		return (
			<input 
					className="search-input form-control"
					placeholder="search"
					value={ this.state.term }
					onChange={ this.onSearchChange } />
		);
	}
}

export default SearchPanel;