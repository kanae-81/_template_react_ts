import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edittodo } from '../reducks/todo/operations';
import { push } from 'connected-react-router';

const EditTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: any) => state.todos.todos);
    const id = location.hash.substr(1);
    const [title, settitle] = useState<string>(todos[id].title);
    const [text, settext] = useState<any>(todos[id].text);
    const onSubmit = () => {
        if (title === '' || text === '') {
            alert('入力してください');
            return;
        }
        dispatch(edittodo(id, title, text));
    };
    return (
        <React.Fragment>
            <h2>編集</h2>
            <div>
                <label htmlFor="title">
                    タイトル：
					<input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            settitle(e.target.value);
                        }}
                    />
                </label>
                <br></br>
                <label htmlFor="text">
                    内容：
					<input
                        type="text"
                        value={text}
                        onChange={(e) => {
                            settext(e.target.value);
                        }}
                    />
                </label>
			</div>
            <input type="submit" onClick={() => onSubmit()} />
            <button onClick={() => dispatch(push('/'))}>戻る</button>
        </React.Fragment>
    );
};

export default EditTodo;
