import * as types from './types';

export const addShops = (shops) => {
  const action = {
    type: types.ADD_SHOP,
    shops,
  };
  return action;
};

// scaffolding until we link up front & back

export const mockAsyncAddShops = (shop) => {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    // mock adding to db
    setTimeout(() => {
      const actionWithMockData = addShops(shop);
      dispatch(actionWithMockData);
    }, 1000);
  };
};
