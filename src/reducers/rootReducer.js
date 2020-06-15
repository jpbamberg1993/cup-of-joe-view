import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import coffeeReducer from "./coffeeReduce";

export default combineReducers({
  shopReducer,
  coffeeReducer
});
