import React from "react";
import { connect } from "react-redux";
import { Question } from "../shared/Question";
import { withRouter } from "react-router-dom";

class QuestionList extends React.Component {
  render() {
    const { users, questions, navigateToQuestion } = this.props;
    return (
      <ul>
        {questions.map(question => {
          return (
            <li key={question.id}>
              <Question
                user={users[question.author]}
                question={question}
                onViewPoll={() => navigateToQuestion(question)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state, { answered }) => {
  // Filter out the questions based on if the question
  // has been answered by the user or not.
  const questions = Object.values(state.questions).filter(
    ({ optionOne, optionTwo }) => {
      const hasAnswered =
        optionOne.votes.indexOf(state.authUser) !== -1 ||
        optionTwo.votes.indexOf(state.authUser) !== -1;
      return answered ? hasAnswered : !hasAnswered;
    }
  );

  return {
    questions: questions,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigateToQuestion: question => {
      const { history } = ownProps;
      history.push(`/questions/${question.id}`);
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionList)
);
