import React from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../../actions/questions";

class QuestionAnswer extends React.Component {
  state = {
    selectedOption: null
  };

  handleOptionChange = event => {
    const { value } = event.target;
    this.setState(() => {
      return { selectedOption: value };
    });
  };

  handleSubmit = () => {
    const { submitAnswer, question } = this.props;    
    submitAnswer(question, this.state.selectedOption);
  };

  render() {
    const { question } = this.props;
    return (
      <div>
        <div>
          <label>
            <input
              type="radio"
              name="option"
              value="optionOne"
              checked={this.state.selectedOption === "optionOne"}
              onChange={this.handleOptionChange}
            />
            {question.optionOne.text}
          </label>
        </div>
        <br />
        <div>
          <label>
            <input
              type="radio"
              name="option"
              value="optionTwo"
              checked={this.state.selectedOption === "optionTwo"}
              onChange={this.handleOptionChange}
            />
            {question.optionTwo.text}
          </label>
        </div>
        <button
          disabled={!this.state.selectedOption}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questions[ownProps.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitAnswer: (question, selectedOption) => {
      dispatch(handleAnswerQuestion(question, selectedOption));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAnswer);
