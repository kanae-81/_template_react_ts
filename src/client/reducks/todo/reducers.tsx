import { LISTEN_TODO, ADD_TODO, EDIT_TODO, COMPLETE_TODO, DELETE_TODO } from './actions';
import initialState from '../../Store/initialState';

export default (state: any = initialState.todos, action: any) => {
	const data = action.payload;
	const targetData = state.todos.find((element: any) => element.id === data.id);
	const targetNum = state.todos.indexOf(targetData);
	switch (action.type) {
		case LISTEN_TODO:
			if(data){
				return {
					todos: data,
				};
			}
			return state;
		case ADD_TODO:
		case EDIT_TODO:
			return state;
		case COMPLETE_TODO:
			state.todos[targetNum].status = 'completed';
			return {
				todos: state.todos
			};
		case DELETE_TODO:
			state.todos.splice(targetNum, 1);
			return {
				todos: state.todos
			};
		default:
			return state;
	}
};
