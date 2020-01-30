import { updateUsers } from "./users";
import { _getUsers } from "../_DATA";
import { loginUser } from "./authUser";

export function handleInitialData() {
  return dispatch => {
    Promise.all([_getUsers()]).then(([users]) => {
      dispatch(updateUsers(users));

      const loggedInUserId = localStorage.getItem("userId");
      dispatch(loginUser(loggedInUserId));
    });
  };
}
