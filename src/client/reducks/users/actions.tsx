// アクションクリエーターの定義（view側で、あるイベントを掴んだ時に、適切な状態宣言を行うための仕組み）
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// ここをちゃんとアロー関数にしないとだめだった
export const signInAction = (userState: any) => {
	return {
		type: SIGN_IN,
		payload: {
			isSignedIn: true,
			role: userState.role,
			uid: userState.uid,
			username: userState.username
		},
	};
};

export const signOutAction = () => {
	return {
		type: SIGN_OUT,
		payload: {
			isSignedIn: false,
			role: '',
			uid: '',
			username: ''
		},
	};
};
