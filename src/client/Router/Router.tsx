import React from 'react';
import { Route, Switch } from 'react-router';
import { Login, Todo } from '../Components/index';

const Router = () => {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="(/)?" component={Todo} />
		</Switch>
	);
};
export default Router;
