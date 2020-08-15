import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import todos from '../reducks/todo/reducers';

export const store = (history: any) => {
	return createStore(
		combineReducers({
			// stateのカテゴリを記述
			router: connectRouter(history),
			todos: todos,
		}),
		applyMiddleware(routerMiddleware(history), thunk),
	);
};
