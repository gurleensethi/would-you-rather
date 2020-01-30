import { combineReducers } from "redux";
import users from "./users";
import authUser from "./authUser";

const reducer = combineReducers({
  users,
  authUser
});

export default reducer;
