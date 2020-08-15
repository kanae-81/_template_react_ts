import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './actions';
import initialState from '../../Store/initialState';

export default (state: any = initialState.todos, action: any) => {
	const data = action.payload;
	switch (action.type) {
		case ADD_TODO:
			console.log(action.type)
			return {
				todos: [...state.todos, { title: data.title, text: data.text }],
			};

		case EDIT_TODO:
			console.log(action.type)
			state.todos[data.id] = { title: data.title, text: data.text };
			return state;

		case DELETE_TODO:
			state.todos.splice(data.id, 1);
			return state;
		default:
			return state;
	}
};
