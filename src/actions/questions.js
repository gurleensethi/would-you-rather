import { _saveQuestion } from "../_DATA";
export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";

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

export const handleCreateQuestion = (optionA, optionB, successCallback) => {
  return (dispatch, getState) => {
    const { authUser } = getState();
    console.log(authUser);
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
