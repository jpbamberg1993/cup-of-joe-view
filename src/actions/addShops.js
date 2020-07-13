import * as types from './types';

export const addShops = (shops) => {
  const action = {
    type: types.ADD_SHOP,
    shops,
  };
  return action;
};

// scaffolding until we link up front & back

export const mockAsyncAddShops = (shop) => async (dispatch) => {
  // mock adding to db
  setTimeout(() => {
    const actionWithMockData = addShops(shop);
    dispatch(actionWithMockData);
  }, 1000);
};


