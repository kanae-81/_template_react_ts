import { auth, FirebaseTimestamp, db } from '../../../firebase'
import { push } from 'connected-react-router';
import { signInAction } from './actions'

export const signIn = (email: any, password: any) => {
    return async (dispatch: any) => {
        // バリデーション
        if (email === '' || password === '') {
            alert('必須項目が未入力です');
            return false;
        }
        auth.signInWithEmailAndPassword(email, password)
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
                }else {
                    alert('ログインできませんでした');
                }
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
                        roke: 'customer',
                        uid: uid,
                        updated_at: timestamp,
                        username: username
                    }

                    db.collection('users').doc(uid).set(userInitialData)
                        .then(() => {
                            dispatch(push('/'));
                        })
                }
            })
    }
}
