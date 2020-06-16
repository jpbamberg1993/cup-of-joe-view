import { GET_SHOPS } from './types';

export const getShops = () => (dispatch) => {
	dispatch({
		type: GET_SHOPS,
		shops: [],
	});
};
