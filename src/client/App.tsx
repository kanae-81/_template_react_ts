import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import Todo from './Components/Todo';

const app = (): JSX.Element => {
	return (
		<>
			<h2>Hello world.</h2>
			<Todo />
		</>
	);
};

export default app;
