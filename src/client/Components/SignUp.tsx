import React, { useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, PrimaryButton, PrimaryLink } from './UIkit';
import { signUp } from '../reducks/users/operations'
import { push } from 'connected-react-router';

const SignUp = () => {
    const dispatch = useDispatch();
    const [username,setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const InputUsername = useCallback( (event) => {
        setUsername(event.target.value);
    }, [setUsername])
    const InputEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [setEmail])
    const InputPassword = useCallback((event) => {
        setPassword(event.target.value);
    }, [setPassword])
    const InputConfirmPassword = useCallback((event) => {
        setConfirmPassword(event.target.value);
    }, [setConfirmPassword])
    return (
        <div>
            <h2>アカウント登録</h2>
            <TextInput
                fullWidth={true}
                label={'ユーザー名'}
                multiline={false}
                required={true}
                rows={1}
                value={username}
                type={'text'}
                onChange={InputUsername}
            />
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
            <TextInput
                fullWidth={true}
                label={'ConfirmPassword'}
                multiline={false}
                required={true}
                rows={1}
                value={confirmPassword}
                type={'password'}
                onChange={InputConfirmPassword}
            />
            <PrimaryButton
                label={'登録する'}
                variant={'contained'}
                color={'primary'}
            onClick={() => { dispatch(signUp(username, email, password, confirmPassword)); }} />
            <p>
                <PrimaryLink onClick={() => dispatch(push('/signin'))} text={'アカウントをお持ちの方はこちら'} />
            </p>
        </div>
    );
};

export default SignUp;

