export const UPDATE_USERS = "UPDATE_USERS";

export const updateUsers = users => {
  return {
    users,
    type: UPDATE_USERS
  };
};
