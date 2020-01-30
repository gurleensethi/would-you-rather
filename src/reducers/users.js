import { UPDATE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case UPDATE_USERS: {
      return action.users;
    }
    default:
      return state;
  }
}
