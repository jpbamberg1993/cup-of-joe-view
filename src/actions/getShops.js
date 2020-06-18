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

export const fetchShops = () => {
	return async function thunk(dispatch) {
		const res = await axios.get('/whatistheroutetogetallshops');
		const allShops = res.data;
		const actionWithData = getShops(allShops);
		dispatch(actionWithData);
	};
};
