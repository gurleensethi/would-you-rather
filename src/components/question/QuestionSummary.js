import React from "react";
import { connect } from "react-redux";

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
      <div>
        Results:
        <div>
          <h3>Would you rather {question.optionOne.text}</h3>
          <div>{optionOneVotePercentage}%</div>
          <div>
            {optionOneVotes} of {totalVotes} votes
          </div>
        </div>
        <div>
          <h3>Would you rather {question.optionTwo.text}</h3>
          <div>{optionTwoVotePercentage}%</div>
          <div>
            {optionTwoVotes} of {totalVotes} votes
          </div>
        </div>
        You selected {selectedOption}.
      </div>
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
