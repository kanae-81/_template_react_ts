import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todo } from '../reducks/todo/operations';
import { push } from 'connected-react-router';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [title, settitle] = useState<string>('');
    const [text, settext] = useState<any>('')
    const onSubmit = () => {
        if (title === '' || text === '') {
            alert('入力してください');
            return;
        }
        settitle('');
        settext('');
        dispatch(todo(title, text));
    };
    return (
        <React.Fragment>
            <h2>Todo</h2>
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

export default AddTodo;
