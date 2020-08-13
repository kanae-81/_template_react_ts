// アクションクリエーターの定義（view側で、あるイベントを掴んだ時に、適切な状態宣言を行うための仕組み）
export const ADD_TODO = 'ADD_TODO';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AGE = 'CHANGE_AGE';

// ここをちゃんとアロー関数にしないとだめ
export const addTodo = () => ({
	type: ADD_TODO,
});

export const changeName = (e: any) => ({
	type: CHANGE_NAME,
	name: e.target.value,
});

export const changeAge = (e: any) => ({
	type: CHANGE_AGE,
	age: e.target.value,
});
