import React from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../../actions/questions";
import styled, { css } from "styled-components";
import Button from "../shared/Button";
import SizedBox from "../shared/SizedBox";

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
`;

const QuestionOption = styled.label`
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid rgb(220, 220, 220);
  width: 100%;
  text-align: center;
  font-size: 30px;
  transition: 0.3s;

  &:hover {
    background-color: rgb(240, 240, 240);
    cursor: pointer;
  }

  & > input[type="radio"] {
    display: none;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: rgb(240, 240, 240);
    `}
`;

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
      <Conatiner>
        <QuestionOption isActive={this.state.selectedOption === "optionOne"}>
          <input
            type="radio"
            name="option"
            value="optionOne"
            checked={this.state.selectedOption === "optionOne"}
            onChange={this.handleOptionChange}
          />
          {question.optionOne.text}
        </QuestionOption>
        <QuestionOption isActive={this.state.selectedOption === "optionTwo"}>
          <input
            type="radio"
            name="option"
            value="optionTwo"
            checked={this.state.selectedOption === "optionTwo"}
            onChange={this.handleOptionChange}
          />
          {question.optionTwo.text}
        </QuestionOption>
        <SizedBox height={40} />
        <Button
          disabled={!this.state.selectedOption}
          onClick={this.handleSubmit}
          width={250}
        >
          Submit
        </Button>
      </Conatiner>
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
