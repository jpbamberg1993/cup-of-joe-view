import { GET_COFFEE } from '../actions/types';

const initialState = {
  coffee : []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_COFFEE:
			return {
				coffee: [...state.coffee,action.coffee],
			};
		default:
			return state;
	}
};
