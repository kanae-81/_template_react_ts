import React from 'react';
import { Route, Switch } from 'react-router';
import { Todo, AddTodo, EditTodo, SignUp, SignIn } from '../Components/index';

const Router = () => {
	return (
		<Switch>
			<Route exact path="/signin" component={SignIn} />
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="(/)?" component={Todo} />
			<Route exact path="/add" component={AddTodo} />
			<Route exact path="/edit" component={EditTodo} />
		</Switch>
	);
};
export default Router;
