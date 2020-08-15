import { addTodo, editTodo, deleteTodo } from './actions';
import { push } from 'connected-react-router';
// import axios from 'axios'

export const addtodo = (title: any, text: any) => {
    return async (dispatch: any) => {
		const pushTodo = addTodo(title, text);
        dispatch(pushTodo);
        dispatch(push('/'));
    }
}

export const edittodo = (id: any, title: any, text: any) => {
    return async (dispatch: any) => {
        const pushTodo = editTodo(id, title, text);
        dispatch(pushTodo);
        dispatch(push('/'));
    }
}

export const deletetodo = (id: any) => {
    return async (dispatch: any) => {
        dispatch(deleteTodo(id));
        dispatch(push('/'));
    }
}
