import { LOGIN_USER } from "../actions/authUser";

// The current logged in user.

export default function authUser(state = null, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return action.userId;
    }
    default: {
      return state;
    }
  }
}
