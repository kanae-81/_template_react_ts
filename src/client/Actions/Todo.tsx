// アクションクリエーターの定義（view側で、あるイベントを掴んだ時に、適切な状態宣言を行うための仕組み）
export const ADD_TODO = 'ADD_TODO';

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
