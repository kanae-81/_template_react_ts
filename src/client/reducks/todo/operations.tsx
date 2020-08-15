import { addTodo } from './actions';
import { push } from 'connected-react-router';

export const todo = (title: any, text: any) => {
    return async (dispatch: any) => {
		const pushTodo = addTodo(title, text);
        dispatch(pushTodo);
        dispatch(push('/'));
    }
}
