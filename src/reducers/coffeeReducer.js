import * as types from '../actions/types';

const initialState = {
  coffee: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COFFEE:
      // return Object.assign({}, state, { coffee: action.coffee });
      return { ...state, coffee: action.coffee };
    case types.ADD_COFFEE:
      return { ...state, coffee: [...state.coffee, action.coffee]};
    default:
      return state;
  }
};
