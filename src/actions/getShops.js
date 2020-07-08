/* eslint-disable func-names */
import axios from 'axios';
import * as types from './types';
// eslint-disable-next-line import/extensions
import mocking from './mockdata.js';

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

// scaffolding until we link up front & back end
export const mockAsyncFetchShops = () => function (dispatch) {
  setTimeout(() => {
    const mockData = {
      shops: mocking.shops,
    };
    const actionWithMockData = getShops(mockData);
    dispatch(actionWithMockData);
  }, 1500);
};

// for future use
export const fetchShops = () => async function thunk(dispatch) {
  const res = await axios.get('/shop/:shop_id');
  const allShops = res.data;
  const actionWithData = getShops(allShops);
  dispatch(actionWithData);
};
