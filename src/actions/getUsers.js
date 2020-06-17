import * as types from './types';
import axios from 'axios';

export const getUsers = (users) => {
	const action = {
		type: types.GET_USERS,
		users,
	};
	return action;
};

export const fetchUsers = () => {
	return async function thunk(dispatch) {
		const res = await axios.get('/whatistheroutetogetallusers');
		const allUsers = res.data;
		const actionWithData = getUsers(allUsers);
		dispatch(actionWithData);
	};
};
