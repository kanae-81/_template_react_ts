import { auth, FirebaseTimestamp, db } from '../../../firebase'
import { push } from 'connected-react-router';
import { signInAction, signOutAction } from './actions';

export const listenAuthState = () => {
    return async (dispatch: any) => {
        return auth.onAuthStateChanged(user => {
            if(user) {
                const uid = user.uid;
                if (uid !== null) {
                    db.collection('users').doc(uid).get()
                        .then(snapshot => {
                            const data = snapshot.data();
                            if (data !== undefined) {
                                dispatch(signInAction({
                                    isSignin: true,
                                    role: data.role,
                                    uid: uid,
                                    username: data.username
                                }))
                            }
                        })
                }
            }else {
                dispatch(push('/signin'))
            }
        })
    }
}

export const reset = (email: any) => {
    return async (dispatch: any) => {
        if(email === '') {
            alert('必須項目が未入力です');
            return false;
        } else {
            return auth.sendPasswordResetEmail(email)
                .then(() => {
                    alert('入力されたアドレスにパスワードをお送りしました。');
                    dispatch(push('/signin'))
                }).catch((e) => {
                    alert(e.message);
                })
        }
    }
}

export const signIn = (email: any, password: any) => {
    return async (dispatch: any) => {
        // バリデーション
        if (email === '' || password === '') {
            alert('必須項目が未入力です');
            return false;
        }
        return auth.signInWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                if(user) {
                    const uid = user.uid;
                    if(uid !== null){
                        db.collection('users').doc(uid).get()
                            .then(snapshot => {
                                const data = snapshot.data();
                                if(data !== undefined){
                                    dispatch(signInAction({
                                        isSignin: true,
                                        role: data.role,
                                        uid: uid,
                                        username: data.username
                                    }))
                                    dispatch(push('/'));
                                }
                            })
                    }
                }
            }).catch((e) => {
                alert(e.message);
            })
    }
}

export const signUp = (username: any, email: any, password: any, confirmPassword: any) => {
    return async (dispatch: any) => {
        // バリデーション
        if (username === '' || email === '' || password === '' || confirmPassword === ''){
            alert('必須項目が未入力です');
            return false;
        }

        if (password !== confirmPassword) {
            alert('パスワードが一致しません');
            return false;
        }

        return auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                if(user) {
                    const uid = user.uid
                    const timestamp = FirebaseTimestamp.now()
                    const userInitialData = {
                        created_at: timestamp,
                        email: email,
                        role: 'customer',
                        uid: uid,
                        updated_at: timestamp,
                        username: username
                    }

                    db.collection('users').doc(uid).set(userInitialData)
                        .then(() => {
                            dispatch(push('/signin'));
                        })
                }
            }).catch((e) => {
                alert(e.message);
            })
    }
}

export const signOut = () => {
    return async (dispatch: any) => {
        auth.signOut()
            .then (() => {
                dispatch(signOutAction())
                dispatch(push('/signin'))
            })
    }
}
