import { ADD_TODO, CHANGE_TEXT } from '../Actions/Todo';
import { text } from 'express';

const initialState = {
	todo: '',
	todos: [],
};

export default (state: any = initialState, action: any) => {
	const inputText = action.text;
	switch (action.type) {
		case CHANGE_TEXT:
			// console.log(action);
			// state.todo = inputText;
			return state.todo;
		case ADD_TODO:
			state.todos = [...state.todos, state.todo];
			return { todos: [state.todos] };
		default:
			return state;
	}
};
