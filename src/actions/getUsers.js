import * as types from './types';
import axios from 'axios';
import mocking from './mockdata.js';

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
			let mockData ={
				users: mocking.users,
			}
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
