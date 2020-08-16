import { addTodoAction, editTodoAction, deleteTodoAction } from './actions';
import { push } from 'connected-react-router';
// import axios from 'axios'

export const addtodo = (title: any, text: any) => {
    return async (dispatch: any) => {
        if(title === '' || text === '') {
            alert('入力してください');
            return;
        }
        const pushTodo = addTodoAction(title, text);
        dispatch(pushTodo);
        dispatch(push('/'));
    }
}

export const edittodo = (id: any, title: any, text: any) => {
    return async (dispatch: any) => {
        const pushTodo = editTodoAction(id, title, text);
        dispatch(pushTodo);
        dispatch(push('/'));
    }
}

export const deletetodo = (id: any) => {
    return async (dispatch: any) => {
        dispatch(deleteTodoAction(id));
        dispatch(push('/'));
    }
}
