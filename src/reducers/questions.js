import {
  UPDATE_QUESTIONS,
  CREATE_QUESTION,
  ANSWER_QUESTION
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case UPDATE_QUESTIONS: {
      return action.questions;
    }
    case CREATE_QUESTION: {
      const { question } = action;
      return {
        ...state,
        [question.id]: question
      };
    }
    case ANSWER_QUESTION: {
      const { question, option, authUser } = action;
      return {
        ...state,
        [question.id]: {
          ...state[question.id],
          [option]: {
            ...state[question.id][option],
            votes: state[question.id][option].votes.concat([authUser])
          }
        }
      };
    }
    default: {
      return state;
    }
  }
}
