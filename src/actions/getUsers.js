import * as types from './types';
import axios from 'axios';

export const getUsers = (users) => {
	const action = {
		type: types.GET_USERS,
		users,
	};
	return action;
};

//scaffolding until we link up front & back end
export const mockAsyncFetchUsers = () => {
	return function (dispatch) {
		setTimeout(function () {
			let mockData = {
				shops: ['user1', 'user2', 'user3'],
			};
			const actionWithMockData = getUsers(mockData);
			dispatch(actionWithMockData);
		}, 1500);
	};
};

//for future use
export const fetchUsers = () => {
	return async function thunk(dispatch) {
		const res = await axios.get('/users');
		const allUsers = res.data;
		const actionWithData = getUsers(allUsers);
		dispatch(actionWithData);
	};
};
