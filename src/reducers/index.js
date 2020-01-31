import { combineReducers } from "redux";
import users from "./users";
import authUser from "./authUser";
import questions from "./questions";
import loading from "./loading";

const reducer = combineReducers({
  users,
  authUser,
  questions,
  loading
});

export default reducer;
