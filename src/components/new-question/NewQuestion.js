import React from "react";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../../actions/questions";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Button from "../shared/Button";
import SizedBox from "../shared/SizedBox";

const NewQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const TextInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid lightgrey;

  &:focus {
    border: 1px solid purple;
  }
`;

class NewQuestion extends React.Component {
  state = {
    optionA: "",
    optionB: ""
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState(() => {
      return { [name]: value };
    });
  };

  handleSubmit = () => {
    const { createQuestion } = this.props;
    const { optionA, optionB } = this.state;
    createQuestion(optionA, optionB);
  };

  render() {
    return (
      <NewQuestionContainer>
        <h1>Create new question</h1>
        <h3>Would you rather...</h3>
        <SizedBox height={20} />
        <TextInput
          type="text"
          name="optionA"
          onChange={this.handleChange}
          value={this.state.optionA}
          placeholder="Enter option one text here"
        />
        <SizedBox height={20} />
        <TextInput
          type="text"
          name="optionB"
          onChange={this.handleChange}
          value={this.state.optionB}
          placeholder="Enter option two text here"
        />
        <SizedBox height={40} />
        <Button onClick={this.handleSubmit}>Submit</Button>
      </NewQuestionContainer>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createQuestion: (optionA, optionB) => {
      dispatch(
        handleCreateQuestion(optionA, optionB, () => {
          const { history } = ownProps;
          history.push("/");
        })
      );
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(NewQuestion));
