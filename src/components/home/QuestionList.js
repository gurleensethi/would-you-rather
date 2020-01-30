import React from "react";
import { connect } from "react-redux";
import { Question } from "../shared/Question";

class QuestionList extends React.Component {
  render() {
    const { users, questions } = this.props;
    return (
      <ul>
        {questions.map(question => {
          return (
            <li key={question.id}>
              <Question user={users[question.author]} question={question} />
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

export default connect(mapStateToProps)(QuestionList);
