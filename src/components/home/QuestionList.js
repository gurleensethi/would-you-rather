import React from "react";
import { connect } from "react-redux";
import { Question } from "../shared/Question";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const QuestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 600px;
  width: 100%;
`;

const Message = styled.p`
  padding: 0px;
  margin: 80px 20px;
  font-size: 24px;
`;

class QuestionList extends React.Component {
  render() {
    const { users, questions, navigateToQuestion } = this.props;

    if (questions.length === 0) {
      return (
        <Message>
          Great! You have answered all questions{" "}
          <span role="img" aria-label="tada emoji">
            &#127881;
          </span>
        </Message>
      );
    }

    return (
      <QuestionsList>
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
      </QuestionsList>
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
