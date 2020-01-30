export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = userId => {
  return {
    userId,
    type: LOGIN_USER
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const handleLoginUser = userId => {
  return dispatch => {
    localStorage.setItem("userId", userId);
    dispatch(loginUser(userId));
  };
};

export const handleLogoutUser = () => {
  return dispatch => {
    localStorage.removeItem("userId");
    dispatch(logoutUser());
  };
};
