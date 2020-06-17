import * as types from './types';
import axios from 'axios';

export const getCoffee = (coffee) => {
	const action = {
		type: types.GET_COFFEE,
		coffee,
	};
	return action;
};

export const fetchShops = () => {
	return async function thunk(dispatch) {
		const res = await axios.get('/whatistheroutetogetallcoffee');
		const allCoffee = res.data;
		const actionWithData = getCoffee(allCoffee);
		dispatch(actionWithData);
	};
};
