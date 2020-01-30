import { LOGIN_USER, LOGOUT_USER } from "../actions/authUser";

// The current logged in user.

export default function authUser(state = null, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return action.userId;
    }
    case LOGOUT_USER: {
      return null;
    }
    default: {
      return state;
    }
  }
}
