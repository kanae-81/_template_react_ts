import {
	listenTodoAction,
	addTodoAction,
	editTodoAction,
	completeTodoAction,
	deleteTodoAction,
	returnTodoAction,
	sortTodoAction,
} from './actions';

import { push } from 'connected-react-router';
import { FirebaseTimestamp, db } from '../../../firebase';

const todoRef = db.collection('todos');
const validation = (title: any, text: any, deadLine: any) => {
	if (title === '' || text === '' || deadLine === '') {
		alert('入力してください');
		return;
	}
	return true;
};

const validationProgress = (progress: any) => {
	if (progress === '') {
		alert('入力してください');
		return;
	}else if(progress > 100 || progress < 0 ){
		alert('0~100の範囲で入力してください')
		return;
	}
	return true;
};

const validationDeadLine = (deadLine: any) => {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const date = today.getDate();

	const deadYear = Number(deadLine.split('-')[0]);
	const deadMonth = Number(deadLine.split('-')[1]);
	const deadDate = Number(deadLine.split('-')[2]);

	if( deadYear < year) {
		alert('過去の日付は選べません');
		return;
	} else if (deadYear === year){
		if(deadMonth < month) {
			alert('過去の日付は選べません');
			return;
		}else if (deadMonth === month){
			if(deadDate < date){
				alert('過去の日付は選べません');
				return;
			}
		}
	}
	return true;
};

export const listenTodos = (uid: any) => {
	return async (dispatch: any) => {
		todoRef
			.doc(uid)
			.collection('todolist')
			.get()
			.then((snapshot) => {
				let data: any = [];
				snapshot.forEach((doc) => {
					const todo = doc.data();
					data = [
						...data,
						{
							id: doc.id,
							status: todo.status,
							title: todo.title,
							text: todo.text,
							deadLine: todo.deadLine,
							progress: todo.progress,
							create_at: todo.create_at,
							updated_at: todo.updated_at,
						},
					];
				});

				// 期限順に並び替え
				data.sort(function (a: any, b: any) {
					if (a.deadLine < b.deadLine) {
						return -1;
					} else {
						return 1;
					}
				});
				dispatch(listenTodoAction(data));
			});
	};
};

export const addtodo = (uid:any, title: any, text: any, deadLine: any) => {
	return async (dispatch: any) => {
		const timeStamp = FirebaseTimestamp.now();
		const id = todoRef.doc().id;
		const data = {
			id: id,
			status: 'created',
			title: title,
			text: text,
			deadLine: deadLine,
			progress: '0',
			create_at: timeStamp,
			updated_at: timeStamp,
		};

		if (!(validation(title, text, deadLine) && validationDeadLine(deadLine))) {
			return;
		}

		return todoRef
			.doc(uid)
			.collection('todolist')
			.doc(id)
			.set(data)
			.then(() => {
				dispatch(addTodoAction(id, title, text, deadLine));
				dispatch(push('/todo'));
			})
			.catch((error: any) => {
				throw new Error(error);
			});
	};
};

export const edittodo = (uid: any, id: any, title: any, text: any, deadLine: any, progress: any) => {
	return async (dispatch: any) => {
		const timeStamp = FirebaseTimestamp.now();
		const data = {
			title: title,
			text: text,
			deadLine: deadLine,
			progress: progress,
			updated_at: timeStamp,
		}

		if (!(validation(title, text, deadLine) && validationProgress(progress) && validationDeadLine(deadLine))) {
			return;
		}

		return todoRef
			.doc(uid)
			.collection('todolist')
			.doc(id)
			.update(data)
			.then(() => {
				dispatch(editTodoAction(id, title, text, deadLine, progress));
				dispatch(push('/todo'));
			}).catch((error: any) => {
				throw new Error(error);
			})
	}
}

export const completedtodo = (uid: any, id: any) => {
	return async (dispatch: any) => {
		const timeStamp = FirebaseTimestamp.now();
		const data = {
			status: 'completed',
			updated_at: timeStamp,
		};
		return todoRef
			.doc(uid)
			.collection('todolist')
			.doc(id)
			.update(data)
			.then(() => {
				dispatch(completeTodoAction(id, data.updated_at));
			})
			.catch((error: any) => {
				throw new Error(error);
			});
	};
};

export const returntodo = (uid: any, id: any) => {
	return async (dispatch: any) => {
		const timeStamp = FirebaseTimestamp.now();
		const data = {
			status: 'created',
			updated_at: timeStamp,
		};
		return todoRef
			.doc(uid)
			.collection('todolist')
			.doc(id)
			.update(data)
			.then(() => {
				dispatch(returnTodoAction(id));
			})
			.catch((error: any) => {
				throw new Error(error);
			});
	};
};

export const deletetodo = (uid: any, id: any) => {
	return async (dispatch: any) => {
		return todoRef
			.doc(uid)
			.collection('todolist')
			.doc(id)
			.delete()
			.then(() => {
				dispatch(deleteTodoAction(id));
			})
			.catch((error: any) => {
				throw new Error(error);
			});
	};
};

export const sorttodo = (todos: any, sortName: any, sortType: any) => {
	return async (dispatch: any) => {
		const data: any = todos.todos;
		// 期限順に並び替え
		console.log(data);
		if (sortName === 'deadLine') {
			if (sortType === 'up') {
				data.sort(function (a: any, b: any) {
					if (a.deadLine < b.deadLine) {
						return -1;
					} else {
						return 1;
					}
				});
			} else if (sortType === 'down') {
				data.sort(function (a: any, b: any) {
					if (a.deadLine > b.deadLine) {
						return -1;
					} else {
						return 1;
					}
				});
			}
			// 進捗度順に並び替え
		} else if (sortName === 'progress') {
			if (sortType === 'up') {
				data.sort(function (a: any, b: any) {
					if (Number(a.progress) < Number(b.progress)) {
						return -1;
					} else {
						return 1;
					}
				});
			} else if (sortType === 'down') {
				data.sort(function (a: any, b: any) {
					if (Number(a.progress) > Number(b.progress)) {
						return -1;
					} else {
						return 1;
					}
				});
			}
		}
		console.log(data);
		dispatch(sortTodoAction(data));
	};
};
