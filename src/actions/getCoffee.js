import * as types from './types';
import axios from 'axios';

export const getCoffee = (coffee) => {
	const action = {
		type: types.GET_COFFEE,
		coffee,
	};
	return action;
};

//scaffolding until we link up front & back end
export const mockAsyncFetchCoffee = () => {
	return function (dispatch) {
		setTimeout(function () {
			let mockData = {
				shops: ['coffee1', 'coffee2', 'coffee3'],
			};
      const actionWithMockData = getCoffee(mockData)
      dispatch(actionWithMockData)
    }, 1500);
	};
};


//for future use
export const fetchShops = () => {
	return async function thunk(dispatch) {
		const res = await axios.get('/whatistheroutetogetallcoffee');
		const allCoffee = res.data;
		const actionWithData = getCoffee(allCoffee);
		dispatch(actionWithData);
	};
};
