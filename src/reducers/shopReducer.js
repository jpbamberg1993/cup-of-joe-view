import * as types from '../actions/types';

const initialState = {
	shops: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_SHOPS:
			return Object.assign({}, state, { shops: action.shops });
		case types.ADD_SHOP:
			return Object.assign({}, state, { shops: [...state.shops, action.shops] });
		default:
			return state;
	}
};
