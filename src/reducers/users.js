import { UPDATE_USERS } from "../actions/users";
import { CREATE_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case UPDATE_USERS: {
      return action.users;
    }
    case CREATE_QUESTION: {
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      };
    }
    default:
      return state;
  }
}
