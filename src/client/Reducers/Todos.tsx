import { ADD_TODO, CHANGE_NAME, CHANGE_AGE } from '../Actions/Todo';

const initialState = {
	name: '',
	age: '',
	todos: [],
};

export default (state: any = initialState, action: any) => {
	switch (action.type) {
		case CHANGE_NAME:
			return {
				name: action.name,
				age: state.age,
				todos: state.todos,
			};
		case CHANGE_AGE:
			return {
				name: state.name,
				age: action.age,
				todos: state.todos,
			};
		case ADD_TODO: {
			return {
				name: '',
				age: '',
				todos: [...state.todos, { name: state.name, age: state.age }],
			};
		}
		default:
			return state;
	}
};
