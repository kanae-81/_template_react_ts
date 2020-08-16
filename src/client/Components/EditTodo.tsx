import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edittodo } from '../reducks/todo/operations';
import { push } from 'connected-react-router';

import {
    Button,
    TextField,
    Box
} from '@material-ui/core';

import {
    Create,
    KeyboardReturn,
} from '@material-ui/icons';

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
					<TextField
                        label="Title"
                        type="text"
                        defaultValue={title}
                        variant="filled"
                        size="small"
                        onChange={(e) => {
                            settitle(e.target.value);
                        }}
                    />
                </label>
                <br></br>
                <label htmlFor="text">
					<TextField
                        type="text"
                        label="text"
                        variant="filled"
                        defaultValue={text}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            settext(e.target.value);
                        }}
                    />
                </label>
			</div>
            <Box component="span" m={1}>
                <Button variant="contained" color="primary" startIcon={<Create />} onClick={() => onSubmit()} >編集</Button>
            </Box>
            <Box component="span" m={1}>
                <Button variant="outlined" color="primary" startIcon={<KeyboardReturn />} onClick={() => dispatch(push('/'))}>戻る</Button>
            </Box>

        </React.Fragment>
    );
};

export default EditTodo;
