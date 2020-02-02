import React from "react";
import { connect } from "react-redux";
import QuestionAnswer from "./QuestionAnswer";
import QuestionSummary from "./QuestionSummary";
import { Redirect } from "react-router-dom";

class QuestionDetail extends React.Component {
  render() {
    const { isAnswered, questionUser, question, questionExists } = this.props;

    if (!questionExists) {
      return <Redirect to="/notfound" />;
    }

    return (
      <div>
        <img src={questionUser.avatarURL} height="100" alt="user avatar" />
        <h1>{questionUser.name} ask's</h1>
        <h3>Would You Rather...</h3>
        {isAnswered ? (
          <QuestionSummary id={question.id} />
        ) : (
          <QuestionAnswer id={question.id} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, { id }) => {
  const question = state.questions[id];
  const user = state.users[state.authUser];
  const questionExists = !!question;
  const questionUser =
    state.users[questionExists ? question.author : undefined];

  if (!questionExists) {
    return { questionExists };
  }

  return {
    questionExists: true,
    questionUser,
    question,
    isAnswered:
      question.optionOne.votes.indexOf(user.id) !== -1 ||
      question.optionTwo.votes.indexOf(user.id) !== -1
  };
};

export default connect(mapStateToProps)(QuestionDetail);
