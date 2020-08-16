import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsSignedIn } from './reducks/users/selectors';
import { listenAuthState } from './reducks/users/operations';

const Auth = ({children}: any) => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const isSignedIn = getIsSignedIn(selector);

    // 一回レンダーが走った後に実行したい関数
    useEffect(() => {
        // サインインしていない状態だったらlisten関数を実行
        if (!isSignedIn){
            dispatch(listenAuthState())
        }
    },[]);

    // サインインしていない状態なら空っぽのJSXを返す
    if(!isSignedIn) {
        return <></>
    // サインインしていたら子要素を返す（RouterでAuthの中にあるやつ）
    } else {
        return children;
    }
}

export default Auth;