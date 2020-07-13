import axios from 'axios';
import * as types from './types';
// eslint-disable-next-line import/extensions
import mocking from './mockdata.js';

export const getUsers = (users) => {
  const action = {
    type: types.GET_USERS,
    users,
  };
  return action;
};

// scaffolding until we link up front & back end
export const mockAsyncFetchUsers = () => (dispatch) => {
  setTimeout(() => {
    const mockData = {
      users: mocking.users,
    };
    const actionWithMockData = getUsers(mockData);
    dispatch(actionWithMockData);
  }, 1500);
};

// for future use
export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('/users');
  const allUsers = res.data;
  const actionWithData = getUsers(allUsers);
  dispatch(actionWithData);
};
