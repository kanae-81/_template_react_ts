import React from 'react';
import { Route, Switch } from 'react-router';
import {
	Todo,
	AddTodo,
	EditTodo,
	SignUp,
	SignIn,
	Home,
	Shuzo,
} from '../Components/index';
import Auth from '../Auth';
import Reset from '../Components/templates/Reset/Reset';
import CompleteTodo from '../Components/templates/CompleteTodo/CompleteTodo';

const Router = () => {
	return (
		<Switch>
			<Route exact path="/signin" component={SignIn} />
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/signin/reset" component={Reset} />
			<Auth>
				<Route exact path="(/)?" component={Home} />
				<Route exact path="(/shuzo)" component={Shuzo} />
				<Route exact path="(/todo)" component={Todo} />
				<Route exact path="(/complete)" component={CompleteTodo} />
				<Route exact path="/add" component={AddTodo} />
				<Route path="/edit(/:id)?" component={EditTodo} />
			</Auth>
		</Switch>
	);
};
export default Router;
