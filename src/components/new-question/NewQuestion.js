import React from "react";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../../actions/questions";
import { withRouter } from "react-router-dom";

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
      <div>
        <h1>Create new question</h1>
        <h3>Would you rather...</h3>
        <input
          type="text"
          name="optionA"
          onChange={this.handleChange}
          value={this.state.optionA}
          placeholder="Enter option one text here"
        />
        <input
          type="text"
          name="optionB"
          onChange={this.handleChange}
          value={this.state.optionB}
          placeholder="Enter option two text here"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
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
