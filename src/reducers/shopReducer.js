import { GET_SHOPS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_SHOPS:
			return {
				result: [],
			};
		default:
			return state;
	}
};
