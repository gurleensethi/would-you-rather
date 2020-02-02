import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import ProgressBar from "../shared/ProgressBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
`;

const OptionContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;

  ${({ selected }) => css`
    border: 1px solid ${selected ? "green" : "rgb(220, 220, 220)"};
  `}

  & > h3:first-child {
    margin: 0;
    padding: 0;
  }
`;

class QuestionSummary extends React.Component {
  render() {
    const {
      question,
      totalVotes,
      optionOneVotes,
      optionTwoVotes,
      optionOneVotePercentage,
      optionTwoVotePercentage,
      selectedOption
    } = this.props;

    return (
      <Container>
        <h3>Results</h3>
        <OptionContainer selected={selectedOption === "optionOne"}>
          <h3>Would you rather {question.optionOne.text}</h3>
          <ProgressBar
            percentage={optionOneVotePercentage}
            isSelected={selectedOption === "optionOne"}
          />
          <div>
            {optionOneVotes} of {totalVotes} votes
          </div>
        </OptionContainer>
        <OptionContainer selected={selectedOption === "optionTwo"}>
          <h3>Would you rather {question.optionTwo.text}</h3>
          <ProgressBar
            percentage={optionTwoVotePercentage}
            isSelected={selectedOption === "optionTwo"}
          />
          <div>
            {optionTwoVotes} of {totalVotes} votes
          </div>
        </OptionContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const question = state.questions[ownProps.id];
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  return {
    question,
    totalVotes,
    optionOneVotes,
    optionTwoVotes,
    optionOneVotePercentage: (optionOneVotes / totalVotes) * 100,
    optionTwoVotePercentage: (optionTwoVotes / totalVotes) * 100,
    selectedOption: state.users[state.authUser].answers[question.id]
  };
};

export default connect(mapStateToProps)(QuestionSummary);
