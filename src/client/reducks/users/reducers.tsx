import { SIGN_IN } from './actions';
import initialState from '../../Store/initialState';

export default (state: any = initialState.users, action: any) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
};
