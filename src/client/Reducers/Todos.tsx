import { ADD_TODO, CHANGE_TEXT } from '../Actions/Todo';

const initialState = {
	todo: 'しょきち',
	todos: ['test'],
};

export default (state: any = initialState, action: any) => {
	switch (action.type) {
		case CHANGE_TEXT: {
			console.log(action)
			return state.todo;
		}
		case ADD_TODO: {
			console.log(action)
			const todos = state.todos;
			const todo = state.todo;
			return [...todos, todo];
		}
		default:
			return state;
	}
};
