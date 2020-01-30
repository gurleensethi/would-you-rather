export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

export const updateQuestions = questions => {
  return {
    questions,
    type: UPDATE_QUESTIONS
  };
};
