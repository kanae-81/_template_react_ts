import React from 'react';
import { Route, Switch } from 'react-router';
import { Login, Todo, AddTodo } from '../Components/index';

const Router = () => {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="(/)?" component={Todo} />
			<Route exact path="/add" component={AddTodo} />
		</Switch>
	);
};
export default Router;
