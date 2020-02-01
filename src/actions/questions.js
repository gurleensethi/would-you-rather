import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";
export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const updateQuestions = questions => {
  return {
    questions,
    type: UPDATE_QUESTIONS
  };
};

export const createQuestion = question => {
  return {
    question,
    type: CREATE_QUESTION
  };
};

export const answerQuestion = (question, option, authUser) => {
  return {
    question,
    option,
    authUser,
    type: ANSWER_QUESTION
  };
};

export const handleCreateQuestion = (optionA, optionB, successCallback) => {
  return (dispatch, getState) => {
    const { authUser } = getState();
    _saveQuestion({
      optionOneText: optionA,
      optionTwoText: optionB,
      author: authUser
    }).then(question => {
      dispatch(createQuestion(question));
      successCallback();
    });
  };
};

export const handleAnswerQuestion = (question, option) => {
  return (dispatch, getState) => {
    const { authUser: authedUser } = getState();    
    _saveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer: option
    }).then(() => {
      dispatch(answerQuestion(question, option, authedUser));
    });
  };
};
