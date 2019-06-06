import React from 'react';
import './AddItemForm.sass';

class AddItemForm extends React.Component {
	constructor() {
		super();
		this.state = {
			label: '',
		};

		this.onLabelChange = (e) => {
			this.setState({
				label: e.target.value,
			});
		};

		this.onFormSubmit = (e) => {
			e.preventDefault();
			this.props.addItem(this.state.label);
			this.setState({
				label: '',
			})
		};
	}

	render() {

		return(
			<form className="add-item-form"
						onSubmit={ this.onFormSubmit } >
				<div className="row">
					<div className="col-10">
						<input type="text"
									 className="form-control"
									 onChange={this.onLabelChange}
									 value={ this.state.label }
									 placeholder="What need to be done" />
					</div>
					<div className="col">
						<button 
								type="button"
								className="btn btn-outline-primary"
								onClick={ this.onFormSubmit }
						>
						Add Task
						</button>
					</div>
				</div>
			</form>
		);
	}
}
	

export default AddItemForm;