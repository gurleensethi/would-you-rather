import { UPDATE_USERS } from "../actions/users";
import { CREATE_QUESTION, ANSWER_QUESTION } from "../actions/questions";

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
    case ANSWER_QUESTION: {
      const { authUser, question, option } = action;
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [question.id]: option
          }
        }
      };
    }
    default:
      return state;
  }
}
