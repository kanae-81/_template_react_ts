import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import todos from '../reducks/todo/reducers';
import users from '../reducks/users/reducers';

export const store = (history: any) => {
	return createStore(
		combineReducers({
			// stateのカテゴリを記述
			router: connectRouter(history),
			users: users,
			todos: todos,
		}),
		applyMiddleware(routerMiddleware(history), thunk),
	);
};
