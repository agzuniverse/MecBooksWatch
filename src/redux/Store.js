import { createStore, combineReducers } from "redux";
import { testReducer, authReducer, searchReducer, msgReducer } from "./Reducers";

const reducer = combineReducers({
  test: testReducer,
  auth: authReducer,
  search: searchReducer,
  msg: msgReducer
});

export default createStore(reducer);
