import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {auth} from "./actions";

const isLoggedIn = handleActions(
    {
      [auth]: () => true,
    },
    true
);

export default combineReducers({
  isLoggedIn,
});