import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, PrimaryButton } from './UIkit';
import { signIn } from '../reducks/users/operations'

const SignIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const InputEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [setEmail])
    const InputPassword = useCallback((event) => {
        setPassword(event.target.value);
    }, [setPassword])
    return (
        <div>
            <h2>ログイン</h2>
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
            <TextInput
                fullWidth={true}
                label={'Password'}
                multiline={false}
                required={true}
                rows={1}
                value={password}
                type={'password'}
                onChange={InputPassword}
            />
            <PrimaryButton
                label={'ログイン'}
                variant={'contained'}
                color={'primary'}
                onClick={() => { dispatch(signIn(email, password)); }} />
        </div>
    );
};

export default SignIn;

