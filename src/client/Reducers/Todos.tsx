import { TEST } from '../Actions/Todo';

const initialState = {
	todo: 'しょきち',
	todos: [],
};

export default (state: any = initialState, action: any) => {
	switch (action.type) {
		case TEST:
			console.log(action.type);
			return state;
		default:
			return state;
	}
};
