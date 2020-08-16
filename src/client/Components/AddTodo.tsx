import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../reducks/todo/operations';
import { push } from 'connected-react-router';

import {
    Button,
    TextField,
    Box,
} from '@material-ui/core';

import {
    AddRounded,
    KeyboardReturn,
} from '@material-ui/icons';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<any>('');
    const InputTitle = useCallback((event) => {
        setTitle(event.target.value);
    }, [setTitle])
    const InputText = useCallback((event) => {
        setText(event.target.value);
    }, [setText])
    return (
        <React.Fragment>
            <h2>新規作成</h2>
            <div>
                <label htmlFor="title">
                    <TextField
                        label="Title"
                        defaultValue={title}
                        variant="filled"
                        size="small"
                        onChange={InputTitle}
                    />
                </label>
                <br></br>
                <label htmlFor="text">
                    <TextField
                        label="text"
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
                <Button variant="contained" color="primary" startIcon={<AddRounded />} onClick={() => dispatch(addtodo(title, text))}>作成</Button>
            </Box>
            <Box component="span" m={1}>
                <Button variant="outlined" color="primary" startIcon={<KeyboardReturn />}  onClick={() => dispatch(push('/'))}>戻る</Button>
            </Box>
        </React.Fragment>
    );
};

export default AddTodo;
