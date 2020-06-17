import * as types from '../actions/types';

const initialState = {
	users: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_USERS:
			return Object.assign({}, state, { users: action.user });
		case types.ADD_SHOP:
			return Object.assign({}, state, { users: [...state.user, action.user] });
		default:
			return state;
	}
};
