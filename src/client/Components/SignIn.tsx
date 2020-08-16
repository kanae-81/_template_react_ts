import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, PrimaryButton, PrimaryLink } from './UIkit';
import { signIn } from '../reducks/users/operations'
import { push } from 'connected-react-router';

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
            <p>
                <PrimaryLink onClick={() => dispatch(push('/signup'))} text={'アカウントをお持ちでない方はこちら'}/>
            </p>
            <p>
                <PrimaryLink onClick={() => dispatch(push('/signin/reset'))} text={'パスワードを忘れた方はこちら'} />
            </p>
        </div>
    );
};

export default SignIn;

