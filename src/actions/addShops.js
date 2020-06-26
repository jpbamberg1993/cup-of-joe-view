import * as types from './types';

export const addShops = (shops) => {
	const action = {
		type: types.ADD_SHOP,
		shops
	};
	return action;
};


//scaffolding until we link up front & back end
export const mockAsyncAddShops = (shop) => {
	return function (dispatch) {
		//mock adding to db
		setTimeout(function () {
			const actionWithMockData = addShops(shop);
			dispatch(actionWithMockData);
		}, 1000);
	};
};
