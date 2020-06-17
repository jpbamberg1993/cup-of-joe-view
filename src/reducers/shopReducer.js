import { GET_SHOPS } from '../actions/types';

const initialState = {
  shops: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SHOPS:
			return {
				shops: [...state.shops,action.shops],
			};
		default:
			return state;
	}
};
