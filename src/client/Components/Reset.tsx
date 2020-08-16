import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, PrimaryButton, PrimaryLink } from './UIkit';
import { reset } from '../reducks/users/operations'
import { push } from 'connected-react-router';

const Reset = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const InputEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [setEmail])
    return (
        <div>
            <h2>パスワードをリセット</h2>
            <TextInput
                fullWidth={true}
                label={'Email'}
                multiline={false}
                required={true}
                rows={1}
                value={email}
                type={'email'}
                onChange={InputEmail}
            />
            <PrimaryButton
                label={'リセット'}
                variant={'contained'}
                color={'primary'}
                onClick={() => { dispatch(reset(email)); }} />
            <p>
                <PrimaryLink onClick={() => dispatch(push('/signin'))} text={'ログイン画面に戻る'} />
            </p>
        </div>
    );
};

export default Reset;

