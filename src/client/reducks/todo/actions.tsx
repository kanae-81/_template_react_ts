// アクションクリエーターの定義（view側で、あるイベントを掴んだ時に、適切な状態宣言を行うための仕組み）
export const LISTEN_TODO = 'LISTEN_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// ここをちゃんとアロー関数にしないとだめだった
export const listenTodoAction = (todos: any) => {
	return {
		type: LISTEN_TODO,
		payload: todos,
	};
}

export const addTodoAction = (id: any, title: any, text: any) => {
	return {
		type: ADD_TODO,
		payload: {
			id: id,
			status: 'created',
			title: title,
			text: text,
		},
	};
};

export const editTodoAction = (id: any, title: any, text: any) => {
	return {
		type: EDIT_TODO,
		payload: {
			id: id,
			title: title,
			text: text,
		},
	};
};

export const completeTodoAction = (id: any) => {
	return {
		type: COMPLETE_TODO,
		payload: {
			id: id,
		},
	};
};

export const deleteTodoAction = (id: any) => {
	return {
		type: DELETE_TODO,
		payload: {
			id: id,
		},
	};
};
