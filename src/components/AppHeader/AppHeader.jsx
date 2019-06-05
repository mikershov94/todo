import React from 'react';
import './AppHeader.sass';

const AppHeader = ({ toDo, done, }) => {
	return (
		<div className="app-header d-flex d-row">
			<h1>My Todo List</h1>
			<h2>{toDo} more to do, {done} done</h2>
		</div>
	);
}

export default AppHeader;