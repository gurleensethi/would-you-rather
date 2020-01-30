export const LOGIN_USER = "login_user";

export const loginUser = userId => {
  return {
    userId,
    type: LOGIN_USER
  };
};

export const handleLoginUser = userId => {
  return dispatch => {
    localStorage.setItem("userId", userId);
    dispatch(loginUser(userId));
  };
};
