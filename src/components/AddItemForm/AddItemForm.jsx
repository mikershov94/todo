import React from 'react';
import './AddItemForm.sass';

const AddItemForm = ({ addItem }) => {
	return(
		<div>
			<button 
					type="button"
					className="btn btn-outline-primary"
					onClick={ () => addItem('Hello, world') }
			>
			Add Task
			</button>
		</div>
	);
}

export default AddItemForm;