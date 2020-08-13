// アクションクリエーターの定義（view側で、あるイベントを掴んだ時に、適切な状態宣言を行うための仕組み）
export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TEXT = 'CHANGE_TEXT';

// ここをちゃんとアロー関数にしないとだめ
export const addTodo = () => ({
	type: ADD_TODO,
});

export const changeText = () => ({
	type: CHANGE_TEXT,
	text: 'a',
});
