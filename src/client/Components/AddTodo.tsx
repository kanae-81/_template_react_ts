import React, { useState } from 'react';
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
    const [title, settitle] = useState<string>('');
    const [text, settext] = useState<any>('')
    const onSubmit = () => {
        if (title === '' || text === '') {
            alert('入力してください');
            return;
        }
        dispatch(addtodo(title, text));
    };
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
                        onChange={(e) => {
                            settitle(e.target.value);
                        }}
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
                        onChange={(e) => {
                            settext(e.target.value);
                        }}
                    />
                </label>
            </div>
            <Box component="span" m={1}>
                <Button variant="contained" color="primary" startIcon={<AddRounded />} onClick={() => onSubmit()}>作成</Button>
            </Box>
            <Box component="span" m={1}>
                <Button variant="outlined" color="primary" startIcon={<KeyboardReturn />}  onClick={() => dispatch(push('/'))}>戻る</Button>
            </Box>
        </React.Fragment>
    );
};

export default AddTodo;
