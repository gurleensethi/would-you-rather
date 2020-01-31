import { updateUsers } from "./users";
import { updateQuestions } from "./questions";
import { _getUsers, _getQuestions } from "../_DATA";
import { loginUser } from "./authUser";
import { stopLoading } from "./loading";

export function handleInitialData() {
  return dispatch => {
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(updateUsers(users));
      dispatch(updateQuestions(questions));

      const loggedInUserId = localStorage.getItem("userId");
      dispatch(loginUser(loggedInUserId));
      dispatch(stopLoading());
    });
  };
}
