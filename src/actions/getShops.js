import * as types from './types';
import axios from 'axios';

export const getShops = (shops) => {
	const action = {
		type: types.GET_SHOPS,
		shops,
	};
	return action;
};

export const addShops = (shops) => {
	const action = {
		type: types.ADD_SHOP,
		shops,
	};
	return action;
};

//scaffolding until we link up front & back end
export const mockAsyncFetchShops = () => {
	return function (dispatch) {
		setTimeout(function () {
			let mockData = {
				shops: ['shop1', 'shop2', 'shop3'],
			};
      const actionWithMockData = getShops(mockData)
      dispatch(actionWithMockData)
    }, 1500);
	};
};

//for future use
export const fetchShops = () => {
	return async function thunk(dispatch) {
		const res = await axios.get('/whatistheroutetogetallshops');
		const allShops = res.data;
		const actionWithData = getShops(allShops);
		dispatch(actionWithData);
	};
};
