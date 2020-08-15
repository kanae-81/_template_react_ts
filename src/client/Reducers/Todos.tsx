import { ADD_TODO } from '../Actions/Todo';
import initialState from '../Store/initialState';

export default (state: any = initialState.todos, action: any) => {
	const data = action.payload;
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [...state.todos, { title: data.title, text: data.text }],
			};
		default:
			return state;
	}
};
