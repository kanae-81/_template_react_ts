import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, PrimaryButton, PrimaryLink } from '../../atoms';
import { reset } from '../../../reducks/users/operations'
import { push } from 'connected-react-router';
import styles from './reset.module.scss';

const Reset = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const InputEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [setEmail])
    return (
        <div className={styles.reset}>
            <div className={styles.reset__inner}>
                <h2 className={styles.reset__title}>パスワードをリセット</h2>
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
                <div className={styles.reset__button}>
                    <PrimaryButton
                        label={'リセット'}
                        variant={'contained'}
                        color={'primary'}
                        onClick={() => { dispatch(reset(email)); }} />
                </div>
                <p className={styles.reset__link}>
                    <PrimaryLink onClick={() => dispatch(push('/signin'))} text={'ログイン画面に戻る'} />
                </p>
            </div>
        </div>
    );
};

export default Reset;

