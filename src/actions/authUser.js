export const LOGIN_USER = "login_user";

export const loginUser = userId => {
  return {
    userId,
    type: LOGIN_USER
  };
};
