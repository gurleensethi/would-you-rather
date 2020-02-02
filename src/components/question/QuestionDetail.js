import React from "react";
import { connect } from "react-redux";
import QuestionAnswer from "./QuestionAnswer";
import QuestionSummary from "./QuestionSummary";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionHeading = styled.h1`
  margin: 20px 20px;
  padding: 0px;
  font-size: 40px;
`;

const QuestionTitle = styled.h3`
  margin-bottom: 40px;
  padding: 0px;
  font-size: 24px;
`;

class QuestionDetail extends React.Component {
  render() {
    const { isAnswered, questionUser, question, questionExists } = this.props;

    if (!questionExists) {
      return <Redirect to="/notfound" />;
    }

    return (
      <QuestionContainer>
        <img src={questionUser.avatarURL} height="100" alt="user avatar" />
        <QuestionHeading>{questionUser.name} ask's</QuestionHeading>
        <QuestionTitle>Would You Rather...</QuestionTitle>
        {isAnswered ? (
          <QuestionSummary id={question.id} />
        ) : (
          <QuestionAnswer id={question.id} />
        )}
      </QuestionContainer>
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
