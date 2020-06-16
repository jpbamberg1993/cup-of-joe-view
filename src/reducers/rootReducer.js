import { combineReducers } from 'redux';
import shopReducer from './shopReducer';
import coffeeReducer from './coffeeReducer';
import userReducer from './userReducer';

export default combineReducers({
	shopReducer,
  coffeeReducer,
  userReducer
});
