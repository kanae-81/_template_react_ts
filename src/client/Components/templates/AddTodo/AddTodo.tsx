import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo } from '../../../reducks/todo/operations';
import { push } from 'connected-react-router';
import { getUserId } from '../../../reducks/users/selectors';

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
    const selector = useSelector((state: any) => state);
    const uid = getUserId(selector);
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<any>('');
    const [deadLine, setDsadLine] = useState<any>('');
    const InputTitle = useCallback((event) => {
        setTitle(event.target.value);
    }, [setTitle])
    const InputText = useCallback((event) => {
        setText(event.target.value);
    }, [setText])
    const InputDeadLine = useCallback((event) => {
        setDsadLine(event.target.value);
    }, [setDsadLine])
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
                <br></br>
                <label htmlFor="text">
                    <TextField
                        label="deadLine"
                        variant="filled"
                        type="date"
                        defaultValue={deadLine}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={InputDeadLine}
                    />
                </label>
            </div>
            <Box component="span" m={1}>
                <Button variant="contained" color="primary" startIcon={<AddRounded />} onClick={() => dispatch(addtodo(uid, title, text, deadLine))}>作成</Button>
            </Box>
            <Box component="span" m={1}>
                <Button variant="outlined" color="primary" startIcon={<KeyboardReturn />}  onClick={() => dispatch(push('/'))}>戻る</Button>
            </Box>
        </React.Fragment>
    );
};

export default AddTodo;
