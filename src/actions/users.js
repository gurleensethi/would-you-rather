export const UPDATE_USERS = "update_users";

export const updateUsers = users => {
  return {
    users,
    type: UPDATE_USERS
  };
};
