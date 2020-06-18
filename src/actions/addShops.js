import * as types from './types';

export const addShops = (shops) => {
	const action = {
		type: types.ADD_SHOP,
		shops,
	};
	return action;
};
