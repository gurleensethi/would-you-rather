import React from "react";
import { connect } from "react-redux";
import QuestionAnswer from "./QuestionAnswer";

class QuestionDetail extends React.Component {
  state = {};

  render() {
    const { isAnswered, questionUser, question } = this.props;
    return (
      <div>
        <img src={questionUser.avatarURL} height="100" alt="user avatar" />
        <h1>{questionUser.name} ask's</h1>
        <h3>Would You Rather...</h3>
        <QuestionAnswer question={question} />
      </div>
    );
  }
}

const mapStateToProps = (state, { id }) => {
  const question = state.questions[id];
  const user = state.users[state.authUser];
  const questionUser = state.users[question.author];

  return {
    questionUser,
    question,
    isAnswered: !(
      question.optionOne.votes.indexOf(user.id) !== -1 &&
      question.optionTwo.votes.indexOf(user.id) !== -1
    )
  };
};

export default connect(mapStateToProps)(QuestionDetail);
