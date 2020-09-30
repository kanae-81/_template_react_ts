import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, PrimaryButton, PrimaryLink } from '../../atoms';
import { signIn } from '../../../reducks/users/operations'
import { push } from 'connected-react-router';
import styles from './signin.module.scss';

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
        <div className={styles.signin}>
            <div className={styles.signin__inner}>
                <h2 className={styles.signin__title}>ログイン</h2>
                <TextInput
                    fullWidth={true}
                    label={'メールアドレス'}
                    multiline={false}
                    required={true}
                    rows={1}
                    value={email}
                    type={'email'}
                    onChange={InputEmail}
                />
                <TextInput
                    fullWidth={true}
                    label={'パスワード'}
                    multiline={false}
                    required={true}
                    rows={1}
                    value={password}
                    type={'password'}
                    onChange={InputPassword}
                />
                <div className={styles.signin__button}>
                    <PrimaryButton
                        label={'ログイン'}
                        variant={'contained'}
                        color={'primary'}
                        onClick={() => { dispatch(signIn(email, password)); }} />
                </div>
                <p className={styles.signin__link}>
                    <PrimaryLink onClick={() => dispatch(push('/signup'))} text={'アカウントをお持ちでない方はこちら'}/>
                </p>
                <p className={styles.signin__link}>
                    <PrimaryLink onClick={() => dispatch(push('/signin/reset'))} text={'パスワードを忘れた方はこちら'} />
                </p>
            </div>
        </div>
    );
};

export default SignIn;

