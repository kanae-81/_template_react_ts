import { listenTodoAction, addTodoAction, editTodoAction, deleteTodoAction } from './actions';
import { push } from 'connected-react-router';
import { FirebaseTimestamp, db } from '../../../firebase';


const todoRef = db.collection('todos');

export const listenTodos = (uid: any) => {
    return async (dispatch: any) => {
        todoRef.doc(uid).collection('todolist').get()
            .then(snapshot => {
                let data: any = [];
                snapshot.forEach((doc) => {
                    const todo = doc.data();
                    data = [...data, {id:doc.id, title: todo.title, text: todo.text}]
                });
                dispatch(listenTodoAction(data));
            })
    }
}

export const addtodo = (uid:any, title: any, text: any) => {
    return async (dispatch: any) => {
        if(title === '' || text === '') {
            alert('入力してください');
            return;
        }
        const timeStamp = FirebaseTimestamp.now();
        const id = todoRef.doc().id;
        const pushTodo = addTodoAction(id, title, text);
        const data = {
            id: id,
            title: title,
            text: text,
            create_at: timeStamp
        }

        return todoRef.doc(uid).collection('todolist').doc(id).set(data)
            .then(() => {
                dispatch(pushTodo);
                dispatch(push('/'));
            }).catch((error: any) => {
                throw new Error(error);
            })
    }
}

export const edittodo = (uid: any, id: any, title: any, text: any) => {
    return async (dispatch: any) => {
        if (title === '' || text === '') {
            alert('入力してください');
            return;
        }
        const timeStamp = FirebaseTimestamp.now();
        const data = {
            id: id,
            title: title,
            text: text,
            updated_at: timeStamp
        }

        return todoRef.doc(uid).collection('todolist').doc(id).update(data)
            .then(() => {
                dispatch(editTodoAction(id, title, text));
                dispatch(push('/'));
            })
    }
}

export const deletetodo = (uid: any, id: any) => {
    return async (dispatch: any) => {

        return todoRef.doc(uid).collection('todolist').doc(id).delete()
        .then(() => {
                dispatch(push('/'));
                dispatch(deleteTodoAction(id));
            }).catch((error: any) => {
                throw new Error(error);
            })

    }
}

