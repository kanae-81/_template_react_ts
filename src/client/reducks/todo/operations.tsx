import {
	listenTodoAction,
	addTodoAction,
	editTodoAction,
	completeTodoAction,
	deleteTodoAction,
} from './actions';

import { push } from 'connected-react-router';
import { FirebaseTimestamp, db } from '../../../firebase';

const todoRef = db.collection('todos');
const validation = (title: any, text: any) => {
	if (title === '' || text === '') {
		alert('入力してください');
		return;
	}
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
						},
					];
				});
				dispatch(listenTodoAction(data));
			});
	};
};

export const addtodo = (uid:any, title: any, text: any) => {
	return async (dispatch: any) => {
		validation(title, text);
		const timeStamp = FirebaseTimestamp.now();
		const id = todoRef.doc().id;
		const data = {
			id: id,
			status: 'created',
			title: title,
			text: text,
			create_at: timeStamp,
		};

		return todoRef
			.doc(uid)
			.collection('todolist')
			.doc(id)
			.set(data)
			.then(() => {
				dispatch(addTodoAction(id, title, text));
				dispatch(push('/todo'));
			})
			.catch((error: any) => {
				throw new Error(error);
			});
	};
};

export const edittodo = (uid: any, id: any, title: any, text: any) => {
	return async (dispatch: any) => {
		validation(title, text);
		const timeStamp = FirebaseTimestamp.now();
		const data = {
			title: title,
			text: text,
			updated_at: timeStamp,
		}

		return todoRef
			.doc(uid)
			.collection('todolist')
			.doc(id)
			.update(data)
			.then(() => {
				dispatch(editTodoAction(id, title, text));
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
				dispatch(completeTodoAction(id));
				dispatch(push('/todo'));
			})
			.catch((error: any) => {
				throw new Error(error);
			});
	};
};

export const deletetodo = (uid: any, id: any, path: any) => {
	return async (dispatch: any) => {
		return todoRef
			.doc(uid)
			.collection('todolist')
			.doc(id)
			.delete()
			.then(() => {
				dispatch(deleteTodoAction(id));
				dispatch(push(path));
			})
			.catch((error: any) => {
				throw new Error(error);
			});
	};
};
