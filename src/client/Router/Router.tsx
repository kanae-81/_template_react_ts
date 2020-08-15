import React from 'react';
import { Route, Switch } from 'react-router';
import { Login, Todo, AddTodo, EditTodo } from '../Components/index';

const Router = () => {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="(/)?" component={Todo} />
			<Route exact path="/add" component={AddTodo} />
			<Route exact path="/edit" component={EditTodo} />
		</Switch>
	);
};
export default Router;
