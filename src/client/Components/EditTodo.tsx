import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edittodo } from '../reducks/todo/operations';
import { push } from 'connected-react-router';
import { getUserId } from '../reducks/users/selectors';

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
    const selector = useSelector((state: any) => state);
    const todos = useSelector((state: any) => state.todos.todos);
    const uid = getUserId(selector);

    let initialTitle = '';
    let initialText = '';

    let id = window.location.pathname.split('/')[1];
    if (id === 'edit') {
        id = window.location.pathname.split('/edit/')[1];
        const targetData = todos.find((element: any) => element.id === id);
        initialTitle = targetData.title;
        initialText = targetData.text;
    }

    const [title, setTitle] = useState<string>(initialTitle);
    const [text, setText] = useState<string>(initialText);

    const InputTitle = useCallback((event) => {
        setTitle(event.target.value);
    }, [setTitle])
    const InputText = useCallback((event) => {
        setText(event.target.value);
    }, [setText])

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
                        onChange={InputTitle}
                    />
                </label>
                <br></br>
                <label htmlFor="text">
					<TextField
                        label="Text"
                        type="text"
                        variant="filled"
                        defaultValue={text}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={InputText}
                    />
                </label>
			</div>
            <Box component="span" m={1}>
                <Button variant="contained" color="primary" startIcon={<Create />} onClick={() => dispatch(edittodo(uid, id, title, text))} >編集</Button>
            </Box>
            <Box component="span" m={1}>
                <Button variant="outlined" color="primary" startIcon={<KeyboardReturn />} onClick={() => dispatch(push('/'))}>戻る</Button>
            </Box>

        </React.Fragment>
    );
};

export default EditTodo;
