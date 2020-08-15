// アクションクリエーターの定義（view側で、あるイベントを掴んだ時に、適切な状態宣言を行うための仕組み）
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// ここをちゃんとアロー関数にしないとだめだった
export const addTodo = (title: any, text: any) => {
	return {
		type: ADD_TODO,
		payload: {
			title: title,
			text: text,
		},
	};
};

export const editTodo = (id: any, title: any, text: any) => {
	return {
		type: EDIT_TODO,
		payload: {
			id: id,
			title: title,
			text: text,
		},
	};
};

export const deleteTodo = (id: any) => {
	return {
		type: DELETE_TODO,
		payload: {
			id: id,
		},
	};
};
