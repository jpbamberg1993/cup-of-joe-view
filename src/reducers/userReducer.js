import { GET_USERS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				result: [],
			};
		default:
			return state;
	}
};
