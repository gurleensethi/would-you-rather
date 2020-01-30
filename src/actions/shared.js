import { updateUsers } from "./users";
import { _getUsers } from "../_DATA";

export function handleInitialData() {
  return dispatch => {
    Promise.all([_getUsers()]).then(([users]) => {
      dispatch(updateUsers(users));
    });
  };
}
